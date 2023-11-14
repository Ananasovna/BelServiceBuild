import React from 'react'

import { Typography } from '@/common/components/typography/typography'

import styles from './ErrorCloud.module.css'

type ErrorCloudPropsType = {
  text: string
}

export const ErrorCloud = ({ text }: ErrorCloudPropsType) => {
  return (
    <div className={styles.wrapper}>
      <Typography className={styles.error} variant={'body2'}>
        {text}
      </Typography>
    </div>
  )
}
