export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = JSON.parse(req.body);

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  if (!body.name || !body.email || !body.message) {
    // Sends a HTTP bad request error code.
    return res.status(400).json({
      error: "One or more of the following not found: name, email, message",
    });
  }
  const nodemailer = require('nodemailer');
  	const smtpTransport = require('nodemailer-smtp-transport');
  	const transporter = nodemailer.createTransport(smtpTransport({
      host: "mail.privateemail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  	}));

let response={}
  	const mailOptions = {
	    from: process.env.EMAIL,
	    to: process.env.EMAIL,
	    subject: 'Blog Contact form',
	    text:
      ` ${req.body.name},  ${req.body.email} sent you a message!
      
       ${req.body.message}`
  	};

  transporter.sendMail(mailOptions, function(error){ 
      if(error){
         response = {
          statusCode: 500,
          body: JSON.stringify({
            error: error.message,
          }),
        };
      }
       response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Email processed succesfully!`
        }),
      };
    });
  res.json(response)

  // Guard clause checks for email and returns early if it is not found.

  // Here, you could send the message to a service like Supabase to read later.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.

}
