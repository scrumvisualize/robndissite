const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail')

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express();

// const port = 8000;

const port = process.env.PORT || 8000;
const godaddyUserEmail = process.env.GODADDY_USER_EMAIL;
const godaddyEmailPassword = process.env.GODADDY_EMAIL_PASSWORD;
const recipientJegniLifeEmail = process.env.JEGNILIFE_RECIPIENT_EMAIL;
const sendGridToken = process.env.SENDGRID_MAIL_KEY;
const sendGridToEmail = process.env.SENDGRID_TO_EMAIL_ADDRESS;
const sendGridFromEmail = process.env.SENDGRID_FROM_EMAIL_ADDRESS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)) // Use this after the variable declaration

sgMail.setApiKey(sendGridToken);

// Set up a route to handle the email sending
app.post('/service/emailtransfer', async (req, res) => {

  const senderEmail = req.body.email;
  const senderMobile = req.body.mobile;
  const senderComments = req.body.comments;
  console.log("Contact details in server side:: " + senderEmail, senderMobile, senderComments);

  const to = sendGridToEmail;
  const from = sendGridFromEmail;
  const subject = "Email enquiry request from JEGNI Life website";
  const mailhtml = `<div><p>Senders Email: ${senderEmail}</p><p>Mobile Number: ${senderMobile}</p><p>Comments: ${senderComments}</p><img src="https://jegnilife.com.au/images/emailEnquiry.png" alt="community" width="340" height="453"></img></div>`;

  // const transporter = nodemailer.createTransport({
  //   // Replace with your godaddy email service provider
  //   host: "smtpout.secureserver.net", //smtp.office365.com
  //   secure:true,
  //   secureConnection: false,
  //   tls: {
  //     ciphers:'SSLv3'
  //   },
  //   requireTLS: true,
  //   port:465, //587 25
  //   debug:true,
  //   auth: {
  //     user: godaddyUserEmail, // Replace with your godaddy email
  //     pass: godaddyEmailPassword, // Replace with your godaddy email password
  //   },
  // });

  // try {
  //   await transporter.sendMail({
  //     from: senderEmail, // Replace with your email
  //     to: recipientJegniLifeEmail, // Replace with the recipient's email
  //     subject: 'Enquiry request from JEGNI Life website',
  //     text: `SendersEmail: ${senderEmail}\nMobile Number: ${senderMobile}\nComments: ${senderComments}`,
  //     html: `<div><p>Senders Email: ${senderEmail}</p><p>Mobile Number: ${senderMobile}</p><p>Comments: ${senderComments}</p><img src="https://jegnilife.com.au/images/emailEnquiry.png" alt="community" width="340" height="453"></img></div>`,
  //   });
  //   res.status(200).json({ success: true });
  // } catch (e) {
  //   console.error(e);
  //   res.status(500).json({ message: e.message });
  // }

  try {
    const msg = {
      to,
      from,
      subject,
      html: mailhtml
    }
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
