'use server'
import sendEmail from '@/lib/mail'

export type ValuesType = {
  email: string
  message: string
  name: string
}

export async function myAction(data: ValuesType) {
  const name = data.name
  const email = data.email
  const messageText = data.message
  const message = {
    subject: `Письмо с сайта BelServiceBuild от ${name}`,
    text: `
  		Имя: ${name},
        	E-mail: ${email},
        	Сообщение: ${messageText},
        `,
    to: 'belsbmailer@yandex.ru',
  }

  sendEmail(message)
}
