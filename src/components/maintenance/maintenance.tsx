import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import s from './maintenance.module.scss'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'
import { MaintenanceDataType } from '@/common/data/maintanence'

type MaintenanceProps = {
  data: MaintenanceDataType
}

export const Maintenance = ({ data }: MaintenanceProps) => {
  return (
    <Container className={s.wrapper}>
      <TitleContainer variant={'h2'}>{data.title}</TitleContainer>
      <div className={s.imgWrapper}>
        <Image
          placeholder={'blur'}
          className={s.photo}
          priority={true}
          src={data.img}
          alt={'Комплексное обслуживание фото'}
        />
      </div>
      <div className={s.textWrapper}>
        <Typography className={s.text1}>{data.text1}</Typography>
        <Typography className={s.text2}>{data.text2}</Typography>
        <Typography className={s.textItalic}>{data.text3}</Typography>
      </div>
    </Container>
  )
}
