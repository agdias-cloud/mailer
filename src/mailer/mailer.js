const nodemailer = require('nodemailer');
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const user =  process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;
const secure = process.env.SECURE;

console.log(`host> ${smtpHost} port ${smtpPort}`)
const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort, 
  secure: secure,
  /* auth: {
    user: 'agdias.cloud@gmail.com',
    pass: '!1m9a8Z4urka'
  }
 */
})

const sendmail =  (from, to, subject, text) => {
  
    console.log('sending mail...');
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info.response)
      }
    })
}

module.exports = sendmail;