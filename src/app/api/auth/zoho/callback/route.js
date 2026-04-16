import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL(`/?error=${error}`, request.url));
  }

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  const clientId = process.env.NEXT_PUBLIC_ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const redirectUri = process.env.NEXT_PUBLIC_ZOHO_REDIRECT_URI;

  try {
    const response = await fetch('https://accounts.zoho.in/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error('Zoho Token Exchange Error:', data.error);
      return NextResponse.json(data, { status: 400 });
    }

    // TODO: Store tokens securely (data.access_token, data.refresh_token)
    // For now, we'll log them (In production, never log tokens!)
    console.log('Successfully obtained Zoho tokens:', { 
      has_access: !!data.access_token, 
      has_refresh: !!data.refresh_token,
      expires_in: data.expires_in
    });

    // You can also set a cookie here with the tokens or a session ID
    // const cookieStore = cookies();
    // cookieStore.set('zoho_tokens', JSON.stringify(data), { httpOnly: true, secure: true });

    // Redirect back to the onboarding with success and app context
    return NextResponse.redirect(new URL(`/?onboarding=zoho_success&app=${state || 'unknown'}`, request.url));
  } catch (err) {
    console.error('Callback Route Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
