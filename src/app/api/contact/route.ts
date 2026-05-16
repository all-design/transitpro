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

    // In production, you would send this email or save to database
    // For now, we log it and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      language,
      timestamp: new Date().toISOString(),
    });

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
