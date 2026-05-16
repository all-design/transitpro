import { NextRequest, NextResponse } from 'next/server';

// Country code to language mapping
const countryToLanguage: Record<string, string> = {
  AT: 'de', // Austria → German
  DE: 'de', // Germany → German
  CH: 'de', // Switzerland → German (majority)
  LI: 'de', // Liechtenstein → German
  LU: 'de', // Luxembourg → German (one of official)
  RS: 'sr', // Serbia → Serbian
  BA: 'sr', // Bosnia → Serbian (closely related)
  ME: 'sr', // Montenegro → Serbian (closely related)
  HR: 'sr', // Croatia → Serbian (closely related)
  MK: 'sr', // North Macedonia → Serbian (widely understood)
  SI: 'sr', // Slovenia → Serbian (closely related)
  RO: 'ro', // Romania → Romanian
  MD: 'ro', // Moldova → Romanian
  BG: 'bg', // Bulgaria → Bulgarian
  FR: 'fr', // France → French
  MC: 'fr', // Monaco → French
  BE: 'fr', // Belgium → French (Wallonia)
  IT: 'it', // Italy → Italian
  SM: 'it', // San Marino → Italian
  VA: 'it', // Vatican → Italian
};

export async function GET(request: NextRequest) {
  try {
    // Try to get the real IP from various headers (proxy/CDN aware)
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const cfConnectingIp = request.headers.get('cf-connecting-ip');

    // Get the first IP from x-forwarded-for if present
    const ip = cfConnectingIp || realIp || (forwarded ? forwarded.split(',')[0].trim() : null);

    if (!ip || ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') {
      // Local development — return German as default
      return NextResponse.json({
        country: 'AT',
        language: 'de',
        source: 'default',
      });
    }

    // Use free ip-api.com for geolocation (no API key needed, 45 req/min)
    const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,countryCode`, {
      next: { revalidate: 0 },
      signal: AbortSignal.timeout(3000), // 3s timeout
    });

    if (!geoRes.ok) {
      return NextResponse.json({
        country: null,
        language: 'en',
        source: 'fallback',
      });
    }

    const geoData = await geoRes.json();

    if (geoData.status !== 'success' || !geoData.countryCode) {
      return NextResponse.json({
        country: null,
        language: 'en',
        source: 'fallback',
      });
    }

    const countryCode = geoData.countryCode as string;
    const language = countryToLanguage[countryCode] || 'en';

    return NextResponse.json({
      country: countryCode,
      language,
      source: 'geolocation',
    });
  } catch {
    // On any error, fallback to English
    return NextResponse.json({
      country: null,
      language: 'en',
      source: 'fallback',
    });
  }
}
