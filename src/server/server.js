const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

const app = express();

const port = process.env.PORT || 8000;
const godaddyUserEmail = process.env.GODADDY_USER_EMAIL;
const godaddyEmailPassword = process.env.GODADDY_EMAIL_PASSWORD;
const recipientJegniLifeEmail = process.env.JEGNILIFE_RECIPIENT_EMAIL;
const mailersendToEmail = process.env.MAILERSEND_TO_EMAIL_ADDRESS;

/* Getting mailerSend api key from the .env file */ 
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

/* MailerSend need a sender email details and name */ 
const sentFrom = new Sender("info@jegnilife.com.au", "jegnilife");
/* MailerSend need a valid To email address to send and name */ 
const recipients = [
  new Recipient(`${mailersendToEmail}`, "Jegnilife")
];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)) // Use this after the variable declaration

// Set up a server side service/route to handle the email sending using mailersend api
app.post('/service/emailtransfer', async (req, res) => {

  const senderEmail = req.body.email;
  const senderMobile = req.body.mobile;
  const senderComments = req.body.comments;
  
  try {
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("New enquiry from Jegnilife website")
      .setHtml(`<div><p>Requesting persons email address: ${senderEmail}</p><p>Contact Number: ${senderMobile}</p><p>Comments: ${senderComments}</p><img src="https://jegnilife.com.au/images/emailEnquiry.png" alt="community" width="340" height="453"></img></div>`)
      .setText(`${senderComments}`);

    await mailerSend.email.send(emailParams);

    // If the email sending is successful, send a response to the client
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // If an error occurs during email sending, handle it here
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
