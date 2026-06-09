export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Email Verification</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background: #0b1220;
      color: #ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    table, td {
      border-collapse: collapse;
    }

    .wrapper {
      width: 100%;
      max-width: 650px;
      margin: 0 auto;
      background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.15);
      border-radius: 28px;
      overflow: hidden;
      animation: fadeIn 1.2s ease-out;
    }

    .hero {
      padding: 50px 35px 30px;
      text-align: center;
      background: linear-gradient(135deg, #2563eb 0%, #22c55e 100%);
      color: #ffffff;
      position: relative;
    }

    .hero::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(255,255,255,0.12), transparent 25%);
      opacity: 0.8;
      pointer-events: none;
    }

    .hero h1 {
      margin: 0;
      font-size: 30px;
      letter-spacing: 1px;
      z-index: 1;
      position: relative;
    }

    .hero p {
      margin: 12px auto 0;
      max-width: 520px;
      font-size: 16px;
      line-height: 1.7;
      z-index: 1;
      position: relative;
    }

    .content {
      padding: 35px;
      background: #111827;
      color: #e5e7eb;
    }

    .title {
      font-size: 21px;
      margin: 0 0 18px;
      line-height: 1.4;
    }

    .text {
      font-size: 15px;
      line-height: 1.8;
      color: #d1d5db;
      margin: 0 0 20px;
    }

    .code-box {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 20px 0;
      border-radius: 18px;
      text-align: center;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 6px;
      color: #ffffff;
      margin: 0 0 24px;
      animation: pulse 2.5s infinite ease-in-out;
    }

    .footer {
      font-size: 13px;
      color: #9ca3af;
      line-height: 1.7;
      text-align: center;
      padding-bottom: 28px;
    }

    .footer a {
      color: #60a5fa;
      text-decoration: none;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.02); opacity: 0.92; }
    }

    @media only screen and (max-width: 520px) {
      .wrapper { margin: 20px; }
      .hero h1 { font-size: 24px; }
      .hero p, .text { font-size: 15px; }
      .code-box { font-size: 22px; letter-spacing: 4px; }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#0f172a">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table class="wrapper" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td class="hero">
              <h1>Verify your email</h1>
              <p>You're almost there! Confirm your account for <strong>{{email}}</strong> to unlock full access.</p>
            </td>
          </tr>
          <tr>
            <td class="content">
              <p class="title">Your secure access code</p>
              <p class="text">Enter the OTP below in the verification screen. This code is valid for the next 24 hours.</p>
              <div class="code-box">{{otp}}</div>
              <p class="text">If you did not request this email, you can safely ignore it.</p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>Powered by HariStack • Built for fast, secure onboarding.</p>
              <p><a href="https://haristack.io">Visit HariStack</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background: #0b1220;
      color: #ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    table, td {
      border-collapse: collapse;
    }

    .wrapper {
      width: 100%;
      max-width: 650px;
      margin: 0 auto;
      background: #111827;
      border-radius: 26px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.14);
      animation: fadeIn 1.2s ease-out;
    }

    .hero {
      padding: 46px 32px 28px;
      background: linear-gradient(135deg, #9333ea 0%, #2563eb 100%);
      text-align: center;
      color: #ffffff;
      position: relative;
    }

    .hero h1 {
      margin: 0;
      font-size: 30px;
      letter-spacing: 0.7px;
    }

    .hero p {
      margin: 14px auto 0;
      font-size: 16px;
      line-height: 1.7;
      max-width: 520px;
    }

    .content {
      padding: 32px;
      color: #d1d5db;
    }

    .title {
      font-size: 20px;
      margin: 0 0 16px;
      color: #ffffff;
    }

    .text {
      font-size: 15px;
      line-height: 1.8;
      margin: 0 0 22px;
    }

    .code-box {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 18px;
      padding: 22px 0;
      text-align: center;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 6px;
      color: #ffffff;
      animation: pulse 2.6s infinite ease-in-out;
    }

    .footer {
      padding: 0 0 28px;
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.7;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.03); opacity: 0.9; }
    }

    @media only screen and (max-width: 520px) {
      .wrapper { margin: 20px; }
      .hero h1 { font-size: 24px; }
      .hero p, .text { font-size: 15px; }
      .code-box { font-size: 24px; letter-spacing: 4px; }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#0f172a">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table class="wrapper" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td class="hero">
              <h1>Password reset requested</h1>
              <p>We received a reset request for <strong>{{email}}</strong>. Use the code below to continue securely.</p>
            </td>
          </tr>
          <tr>
            <td class="content">
              <p class="title">Your reset code</p>
              <p class="text">Enter this OTP in the reset flow to choose a new password. It expires in 15 minutes.</p>
              <div class="code-box">{{otp}}</div>
              <p class="text">If you did not request a password reset, ignore this message or contact support.</p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>Need help? Reply to this email or visit our support center.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const WELCOME_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Welcome to HariStack</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background: #0d1322;
      color: #ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    table, td {
      border-collapse: collapse;
    }

    .wrapper {
      width: 100%;
      max-width: 650px;
      margin: 0 auto;
      background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 24px 90px rgba(0, 0, 0, 0.2);
      animation: fadeIn 1.2s ease-out;
    }

    .hero {
      padding: 48px 36px 32px;
      text-align: center;
      background: linear-gradient(135deg, #16a34a 0%, #2563eb 100%);
      color: #ffffff;
      position: relative;
    }

    .hero h1 {
      margin: 0;
      font-size: 32px;
      letter-spacing: 0.6px;
    }

    .hero p {
      margin: 14px auto 0;
      max-width: 520px;
      font-size: 16px;
      line-height: 1.7;
    }

    .content {
      padding: 36px;
      color: #d1d5db;
    }

    .title {
      font-size: 20px;
      margin: 0 0 18px;
      color: #ffffff;
    }

    .text {
      font-size: 15px;
      line-height: 1.8;
      margin: 0 0 20px;
    }

    .button {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 999px;
      background: linear-gradient(135deg, #60a5fa 0%, #22c55e 100%);
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.25s ease;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .footer {
      padding: 0 0 28px;
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.7;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media only screen and (max-width: 520px) {
      .wrapper { margin: 18px; }
      .hero h1 { font-size: 26px; }
      .hero p, .text { font-size: 15px; }
      .button { width: 100%; box-sizing: border-box; text-align: center; }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#0c1221">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table class="wrapper" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td class="hero">
              <h1>Welcome to HariStack</h1>
              <p>Hello {{name}}, thanks for joining HariStack — we’re thrilled to have you aboard.</p>
            </td>
          </tr>
          <tr>
            <td class="content">
              <p class="title">Your journey starts now</p>
              <p class="text">You can now explore secure authentication, email verification, and a streamlined account experience. If you need help, our team is ready to support you.</p>
              <p style="text-align:center;"><a class="button" href="https://haristack.io">Get Started</a></p>
              <p class="text">Keep an eye on your inbox for helpful updates and tips to make the most of your new account.</p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>HariStack • Secure signups, instant email updates, delightful onboarding.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const LOGIN_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Logged in to HariStack</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background: #0d1322;
      color: #ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    table, td {
      border-collapse: collapse;
    }

    .wrapper {
      width: 100%;
      max-width: 650px;
      margin: 0 auto;
      background: linear-gradient(180deg, #111827 0%, #0f172a 100%);
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 24px 90px rgba(0, 0, 0, 0.2);
      animation: fadeIn 1.2s ease-out;
    }

    .hero {
      padding: 48px 36px 32px;
      text-align: center;
      background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%);
      color: #ffffff;
      position: relative;
    }

    .hero h1 {
      margin: 0;
      font-size: 32px;
      letter-spacing: 0.6px;
    }

    .hero p {
      margin: 14px auto 0;
      max-width: 520px;
      font-size: 16px;
      line-height: 1.7;
    }

    .content {
      padding: 36px;
      color: #d1d5db;
    }

    .title {
      font-size: 20px;
      margin: 0 0 18px;
      color: #ffffff;
    }

    .text {
      font-size: 15px;
      line-height: 1.8;
      margin: 0 0 20px;
    }

    .button {
      display: inline-block;
      padding: 14px 28px;
      border-radius: 999px;
      background: linear-gradient(135deg, #22c55e 0%, #60a5fa 100%);
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.25s ease;
    }

    .button:hover {
      transform: translateY(-2px);
    }

    .footer {
      padding: 0 0 28px;
      text-align: center;
      font-size: 13px;
      color: #94a3b8;
      line-height: 1.7;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media only screen and (max-width: 520px) {
      .wrapper { margin: 18px; }
      .hero h1 { font-size: 26px; }
      .hero p, .text { font-size: 15px; }
      .button { width: 100%; box-sizing: border-box; text-align: center; }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#0c1221">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table class="wrapper" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td class="hero">
              <h1>Welcome back to HariStack</h1>
              <p>Hello {{name}}, your account was just accessed successfully.</p>
            </td>
          </tr>
          <tr>
            <td class="content">
              <p class="title">Recent sign-in</p>
              <p class="text">If this was you, you’re all set. If you did not sign in, please reset your password immediately or contact support.</p>
              <p style="text-align:center;"><a class="button" href="https://haristack.io">Review your account</a></p>
              <p class="text">This login alert helps keep your account secure.</p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>HariStack • Real-time account security notifications.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
