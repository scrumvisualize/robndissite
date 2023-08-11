const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path')
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express();

// const port = 8000;

const port = process.env.PORT || 8000;
const godaddyUserEmail = process.env.GODADDY_USER_EMAIL;
const godaddyEmailPassword = process.env.GODADDY_EMAIL_PASSWORD;
const recipientJegniLifeEmail = process.env.JEGNILIFE_RECIPIENT_EMAIL;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin:'*',
  credentials:true,
  optionSuccessStatus:200,
};

app.use(cors(corsOptions)) // Use this after the variable declaration

// Set up a route to handle the email sending
app.post('/service/emailtransfer', async (req, res) => {

  const senderEmail = req.body.email;
  const senderMobile = req.body.mobile;
  const senderComments = req.body.comments;
  console.log("Contact details in server side:: "+senderEmail, senderMobile, senderComments );

  const transporter = nodemailer.createTransport({
    //service: 'smtpout.secureserver.net', // Replace with your godaddy email service provider
    host: "smtpout.secureserver.net", //smtp.office365.com
    secure:true,
    secureConnection: false,
    tls: {
      ciphers:'SSLv3'
    },
    requireTLS: true,
    port:465, //587 25
    debug:true,
    auth: {
      user: godaddyUserEmail, // Replace with your godaddy email
      pass: godaddyEmailPassword, // Replace with your godaddy email password
    },
  });

  try {
    await transporter.sendMail({
      from: senderEmail, // Replace with your email
      to: recipientJegniLifeEmail, // Replace with the recipient's email
      subject: 'Enquiry request from JEGNI Life website',
      text: `SendersEmail: ${senderEmail}\nMobile Number: ${senderMobile}\nComments: ${senderComments}`,
      html: `<div>${text}<img src="https://jegnilife.com.au/images/community.png" alt="community"></img></div>`,
    });
    res.status(200).json({ success: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
