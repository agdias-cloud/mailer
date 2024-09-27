const sendmail = require('../mailer/mailer');

const destination = process.env.DESTINATION;
const origin = process.env.ORIGIN;


exports.placeOrder = (req, res, next) => {
  console.log("Placing order...")
  const from = origin;
  const to = destination;
  const subject = `Order # ${req.body.orderId} placed successfully`
  const text = `Order # ${req.body.orderId} placed successfully`
  
  try {
  
    const info = sendmail(from, to, subject, text)  

    res.json({
      success: true,
      data: {
        subject: subject
      }
    })
  } catch (error) {
     console.log(error);
  }
}