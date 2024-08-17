exports.contactUsEmail = (
  email,
  firstname,
  lastname,
  message,
  phoneNo,
  countrycode
) => {
  return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Contact Confirmation</title>
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
      
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
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
              <div class="message">AI Kavach Contact Confirmation</div>
              <div class="body">
                  <p>Dear ${firstname} ${lastname},</p>
                  <p>Thank you for reaching out to AI Kavach. We have received your message and will respond promptly to address your inquiry.</p>
                  <p>Below are the details you provided:</p>
                  <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone Number:</strong> ${phoneNo} (Country Code: ${countrycode})</p>
                  <p><strong>Message:</strong> ${message}</p>
                  <p>Your interest in AI Kavach is greatly appreciated. We are committed to providing the best support and will get back to you shortly.</p>
              </div>
              <div class="support">
                  If you have any further questions or need immediate assistance, please do not hesitate to contact us at <a href="mailto:support@aikavach.com">support@aikavach.com</a>. We are here to assist you!
              </div>
          </div>
      </body>
      
      </html>`;
};
