'use client'
import { useState } from 'react'

import { myAction } from '@/app/api/action'
import { Button } from '@/common/components/button/button'
import { ErrorCloud } from '@/common/components/emailForm/ErrorCloud'
import { Typography } from '@/common/components/typography/typography'
import { Field, FormikProvider, useFormik } from 'formik'
import { useOutsideClickRef } from 'rooks'
import * as Yup from 'yup'

import s from './emailForm.module.scss'

export const EmailForm = () => {
  console.log('render emailForm')
  const closePopup = () => setIsPopup(false)
  const showPopup = () => setIsPopup(true)
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const [ref] = useOutsideClickRef(closePopup)
  const formik = useFormik({
    initialValues: { email: '', message: '', name: '' },
    onSubmit: () => {},
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
    myAction(formik.values).then(() => {
      formik.setSubmitting(false)
      showPopup()
    })
  }

  return (
    <div className={s.wrapper}>
      {isPopup && (
        <div className={s.popupWrapper}>
          <div className={s.popup} ref={ref}>
            <Typography className={s.popupText} variant={'h3'}>
              Письмо успешно отправлено!
            </Typography>
            <Button className={s.popupButton} onClick={closePopup}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
      <FormikProvider value={formik}>
        <form action={handleAction} className={s.formContainer}>
          <div className={s.fieldWrapper}>
            {formik.touched.name && formik.errors.name && <ErrorCloud text={formik.errors.name} />}
            <Field
              className={s.field}
              placeholder={'Введите Ваше имя'}
              type={'text'}
              {...formik.getFieldProps('name')}
            />
          </div>
          <div className={s.fieldWrapper}>
            {formik.touched.email && formik.errors.email && (
              <ErrorCloud text={formik.errors.email} />
            )}
            <Field
              className={s.field}
              placeholder={'Введите Ваш email'}
              type={'email'}
              {...formik.getFieldProps('email')}
            />
          </div>
          <div className={s.textfieldWrapper}>
            {formik.touched.message && formik.errors.message && (
              <ErrorCloud text={formik.errors.message} />
            )}
            <Field
              as={'textarea'}
              className={s.textfield}
              placeholder={'Текст письма'}
              {...formik.getFieldProps('message')}
            />
          </div>

          <div className={s.buttonWrapper}>
            <Button
              disabled={formik.isSubmitting || Object.keys(formik.errors).length !== 0}
              onClick={() => formik.validateForm()}
              type={'submit'}
              variant={'secondary'}
            >
              Напишите нам
            </Button>
          </div>
        </form>
      </FormikProvider>
    </div>
  )
}
