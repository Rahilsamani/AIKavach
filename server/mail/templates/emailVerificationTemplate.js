const otpTemplate = (otp) => {
  return `<!DOCTYPE html>
	  <html>
	  
	  <head>
		  <meta charset="UTF-8">
		  <title>AI Kavach OTP Verification</title>
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
			  <div class="message">AI Kavach OTP Verification</div>
			  <div class="body">
				  <p>Dear User,</p>
				  <p>Thank you for choosing AI Kavach. To complete your registration, please use the following One-Time Password (OTP) to verify your account:</p>
				  <h2 class="highlight">${otp}</h2>
				  <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.</p>
				  <p>Once your account is verified, you'll gain access to AI Kavach's advanced features and protection tools.</p>
			  </div>
			  <div class="support">If you have any questions or need assistance, please reach out to us at <a href="mailto:support@aikavach.com">support@aikavach.com</a>. We are here to help!</div>
		  </div>
	  </body>
	  
	  </html>`;
};
module.exports = otpTemplate;
