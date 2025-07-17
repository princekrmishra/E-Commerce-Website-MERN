const VerificationEmail = (username, otp) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Verify Your Email</title>
      <style>
          body {
              background-color: #f4f4f4;
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #ffffff;
              padding: 30px 20px;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
          h2 {
              color: #28a745;
              font-size: 24px;
              margin-bottom: 20px;
          }
          p {
              font-size: 16px;
              color: #333;
              margin: 10px 0;
          }
          .otp {
              display: inline-block;
              padding: 10px 20px;
              font-size: 24px;
              font-weight: bold;
              color: white;
              background-color: #007bff;
              border-radius: 5px;
              margin: 20px 0;
              letter-spacing: 4px;
          }
          .footer {
              font-size: 12px;
              color: #888;
              margin-top: 30px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Hii ${username}, Please Verify Your Email Address</h2>
          <p>Thank you for registering with MishraMart - An Ecommerce App. Please use the OTP below to verify your email address:</p>
          <div class="otp">${otp}</div>
          <p>If you didn’t create an account, you can safely ignore this email.</p>
          <div class="footer">
              &copy; ${new Date().getFullYear()} Ecommerce App. All rights reserved.
          </div>
      </div>
  </body>
  </html>
  `;
};

export default VerificationEmail;
