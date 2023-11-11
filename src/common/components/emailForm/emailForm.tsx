'use client'
import { myAction } from '@/app/api/action'
import { Button } from '@/common/components/button/button'
import { clsx } from 'clsx'
import { Field, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

import s from './emailForm.module.scss'

export const EmailForm = () => {
  const formik = useFormik({
    initialValues: { email: '', message: '', name: '' },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      resetForm()
      setSubmitting(false)
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Некорректный адрес электронной почты')
        .required('Поле обязаетльно'),
      message: Yup.string().required('Введите текст письма'),
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
        <form action={myAction} className={formClass} onSubmit={handleSubmit}>
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
            as={'textarea'}
            className={s.textfield}
            placeholder={'Текст письма'}
            {...formik.getFieldProps('message')}
          />

          <Button disabled={formik.isSubmitting} type={'submit'} variant={'secondary'}>
            Напишите нам
          </Button>
        </form>
      </FormikProvider>
    </div>
  )
}
