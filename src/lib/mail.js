import mailer from 'nodemailer'

const smtpTransport = mailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  },
  {
    from: 'belsb.ru <belsbmailer@yandex.ru>',
  }
)

const sendEmail = message => {
  smtpTransport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent successfully', info)
    }
    smtpTransport.close()
  })
}

export default sendEmail
