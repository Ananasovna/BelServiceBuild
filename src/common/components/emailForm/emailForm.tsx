'use client'
import s from './emailForm.module.scss'
import { Field, Form, Formik, FormikProvider, useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { Button } from '@/common/components/button/button'
import { Typography } from '@/common/components/typography/typography'
import yellowBg from '@/../public/image/yellowBg.webp'
import { clsx } from 'clsx'
import { myAction } from '@/app/api/action'

export const EmailForm = () => {
  const formik = useFormik({
    initialValues: { email: '', message: '', name: '' },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      resetForm()
      setSubmitting(false)
    },
    validationSchema: Yup.object({
      message: Yup.string().required('Введите текст письма'),
      email: Yup.string()
        .email('Некорректный адрес электронной почты')
        .required('Поле обязаетльно'),
      name: Yup.string().required('Поле обязаетльно'),
    }),
  })

  const handleSubmit = () => {
    formik.resetForm()
    formik.setSubmitting(false)
  }

  const formClass = clsx({ background: '#000' }, s.formContainer)

  return (
    <div className={s.wrapper}>
      <FormikProvider value={formik}>
        <form action={myAction} onSubmit={handleSubmit} className={formClass}>
          <Field
            className={s.field}
            placeholder={'Ваше имя'}
            type={'text'}
            {...formik.getFieldProps('name')}
          />
          <Field
            className={s.field}
            placeholder={'Ваш почтовый адрес'}
            type={'email'}
            {...formik.getFieldProps('email')}
          />
          <Field
            className={s.textfield}
            as={'textarea'}
            placeholder={'Текст письма'}
            {...formik.getFieldProps('message')}
          />

          <Button type={'submit'} variant={'secondary'} disabled={formik.isSubmitting}>
            Напишите нам
          </Button>
        </form>
      </FormikProvider>
    </div>
  )
}
