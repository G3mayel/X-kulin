import {emailTemplates} from '../utils/email_templates.js'
import transporter, { accountEmail}  from '../config/nodemailer.js'


export const sendReminderEmail = async ({ to, user }) => {
    
  const { subject, message} = emailTemplates({ user });
 
  
    const mailOptions = {
      from: accountEmail,
      to: to,
      subject,
      html: message,
    }
  
    transporter.sendMail(mailOptions, (error, info) => {
      if(error) return console.log(error, 'Error sending email');
  
      console.log('Email sent: ' + info.response);
    })
  }