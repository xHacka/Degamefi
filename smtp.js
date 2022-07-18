function SMTP(req, res) {
    const {name, email, phone, msg, subject} = req.body

    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: process.env.email,
          pass: process.env.password,
        },
        secure: true,
      })

      const data = {
        from: email,
        to: process.env.to,
        subject: subject,
        text: `Name: ${name} \nEmail: ${email} \nPhone: ${phone || 'Unspecified'} \nMessage: ${msg}`
      }

    transporter.sendMail(data, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info)
        }
    })
}

export default SMTP;