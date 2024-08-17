exports.passwordUpdated = (email, name) => {
  return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Password Update Confirmation</title>
          <style>
              body {
                  background-color: #ffffff;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.4;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
      
              .logo {
                  max-width: 200px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 18px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .support {
                  font-size: 14px;
                  color: #999999;
                  margin-top: 20px;
              }
      
              .highlight {
                  font-weight: bold;
              }
          </style>
      
      </head>
      
      <body>
          <div class="container">
              <div class="message">Password Update Confirmation</div>
              <div class="body">
                  <p>Hello ${name},</p>
                  <p>We wanted to inform you that the password for your AI Kavach account associated with <span class="highlight">${email}</span> has been successfully updated.</p>
                  <p>If you did not request this change, please contact our support team immediately to secure your account.</p>
              </div>
              <div class="support">If you have any questions or need further assistance, please reach out to us at <a href="mailto:support@aikavach.com">support@aikavach.com</a>. We are here to help!</div>
          </div>
      </body>
      
      </html>`;
};
