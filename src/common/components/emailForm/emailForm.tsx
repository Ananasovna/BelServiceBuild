'use client'
import s from './emailForm.module.scss'
import { Field, Form, Formik, FormikProvider, useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { Button } from '@/common/components/button/button'
import { Typography } from '@/common/components/typography/typography'
import yellowBg from '@/../public/image/yellowBg.webp'
import { clsx } from 'clsx'

export const EmailForm = () => {
  const formik = useFormik({
    initialValues: { email: '', message: '', name: '' },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      resetForm()
      setSubmitting(false)
      axios({
        data: values,
        method: 'post',
        url: 'https://server-send-message.herokuapp.com/sendMessage',
      }).then(() => {
        alert('Сообщение отправилось')
      })
    },
    validationSchema: Yup.object({
      message: Yup.string().required('Введите текст письма'),
      email: Yup.string()
        .email('Некорректный адрес электронной почты')
        .required('Поле обязаетльно'),
      name: Yup.string().required('Поле обязаетльно'),
    }),
  })

  const formClass = clsx({ background: '#000' }, s.formContainer)

  return (
    <div className={s.wrapper}>
      <FormikProvider value={formik}>
        <form className={formClass}>
          <Field className={s.field} name={'name'} placeholder={'Ваше имя'} type={'text'} />
          <Field
            className={s.field}
            name={'email'}
            placeholder={'Ваш почтовый адрес'}
            type={'email'}
          />
          <Field
            className={s.textfield}
            as={'textarea'}
            name={'message'}
            placeholder={'Текст письма'}
          />

          <Button variant={'secondary'} disabled={formik.isSubmitting} type={'submit'}>
            Напишите нам
          </Button>
        </form>
      </FormikProvider>
    </div>
  )
}
