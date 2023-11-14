'use client'
import { myAction } from '@/app/api/action'
import { Button } from '@/common/components/button/button'
import { ErrorCloud } from '@/common/components/emailForm/ErrorCloud'
import { clsx } from 'clsx'
import { Field, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'

import s from './emailForm.module.scss'

export const EmailForm = () => {
  const formik = useFormik({
    initialValues: { email: '', message: '', name: '' },
    onSubmit: (values, { resetForm, setSubmitting }) => {},
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Некорректный адрес электронной почты')
        .required('Поле обязательно'),
      message: Yup.string().required('Введите текст письма'),
      name: Yup.string().required('Поле обязательно'),
    }),
  })

  const handleAction = async () => {
    formik.setSubmitting(true)
    formik.resetForm()
    myAction(formik.values).then(() => formik.setSubmitting(false))
  }

  return (
    <div className={s.wrapper}>
      <FormikProvider value={formik}>
        <form action={handleAction} className={s.formContainer}>
          <div className={s.fieldWrapper}>
            {formik.errors.name && <ErrorCloud text={formik.errors.name} />}
            <Field
              className={s.field}
              placeholder={'Ваше имя'}
              type={'text'}
              {...formik.getFieldProps('name')}
            />
          </div>
          <div className={s.fieldWrapper}>
            {formik.errors.email && <ErrorCloud text={formik.errors.email} />}
            <Field
              className={s.field}
              placeholder={'Ваш почтовый адрес'}
              type={'email'}
              {...formik.getFieldProps('email')}
            />
          </div>
          <div className={s.textfieldWrapper}>
            {formik.errors.message && <ErrorCloud text={formik.errors.message} />}
            <Field
              as={'textarea'}
              className={s.textfield}
              placeholder={'Текст письма'}
              {...formik.getFieldProps('message')}
            />
          </div>

          <Button
            disabled={formik.isSubmitting || Object.keys(formik.errors).length !== 0}
            onClick={() => formik.validateForm()}
            type={'submit'}
            variant={'secondary'}
          >
            Напишите нам
          </Button>
        </form>
      </FormikProvider>
    </div>
  )
}
