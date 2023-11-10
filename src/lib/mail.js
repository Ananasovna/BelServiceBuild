import mailer from 'nodemailer'

const smtpTransport = mailer.createTransport(
  {
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'a.n.ushkova@yandex.ru',
      pass: '10051711elenaanastasiia',
    },
    tls: { rejectUnauthorized: false },
  },
  {
    from: 'a.n.ushkova <a.n.ushkova@yandex.ru>',
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
