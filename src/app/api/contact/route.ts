import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, language } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || 'office@transitplates.eu';

    if (resendApiKey) {
      const languageNames: Record<string, string> = {
        de: 'Deutsch',
        sr: 'Srpski',
        en: 'English',
        ro: 'Română',
        bg: 'Български',
        fr: 'Français',
        it: 'Italiano',
      };

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #dc2626; color: white; padding: 16px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">Transit Pro — Novi upit</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Ime:</td>
                <td style="padding: 8px 0; color: #6b7280;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #dc2626;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefon:</td>
                <td style="padding: 8px 0; color: #6b7280;">${phone || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Kompanija:</td>
                <td style="padding: 8px 0; color: #6b7280;">${company || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Jezik:</td>
                <td style="padding: 8px 0; color: #6b7280;">${languageNames[language] || language}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;">
            <p style="font-weight: bold; color: #374151; margin-bottom: 8px;">Poruka:</p>
            <p style="color: #6b7280; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">
            Poslato sa transitplates.eu kontakt forme
          </p>
        </div>
      `;

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Transit Pro <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: email,
          subject: `Transit Pro — Novi upit od ${name}`,
          html: htmlBody,
          text: `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone || '-'}\nKompanija: ${company || '-'}\nJezik: ${languageNames[language] || language}\n\nPoruka:\n${message}`,
        }),
      });

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json();
        console.error('Resend API error:', errorData);
        // Still return success to user, but log the error
      }
    } else {
      // Fallback: log to console if API key not configured
      console.log('Contact form submission (Resend not configured):', {
        name,
        email,
        phone,
        company,
        message,
        language,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: 'Request received successfully.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'An error occurred processing your request.' },
      { status: 500 }
    );
  }
}
