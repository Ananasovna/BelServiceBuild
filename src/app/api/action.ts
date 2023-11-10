'use server'
import sendEmail from '@/lib/mail'

export async function myAction(data: any) {
  const name = data.get('name')
  const email = data.get('email')
  const messageText = data.get('message')
  const message = {
    to: 'a.n.ushkova@yandex.ru',
    subject: `Письмо с сайта BelServiceBuild от ${name}`,
    text: `
  		Имя: ${name},
        	E-mail: ${email},
        	Сообщение: ${messageText},
        `,
  }
  sendEmail(message)
}
