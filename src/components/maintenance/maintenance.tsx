import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image, { StaticImageData } from 'next/image'

import s from './maintenance.module.scss'

import maintenance from '../../../public/image/maintenance.jpg'

export type MaintenanceDataType = {
  img: StaticImageData
  text3: string
  title: string
}

//Данные для страницы "Комплексное обслуживание"
export const maintenanceData: MaintenanceDataType = {
  // Фото для страницы
  img: maintenance,
  // Текст для 3 абзаца
  text3:
    'Сотрудничая с нами, вы получаете бесперебойную работу инженерных систем и снижаете затраты на текущий и капитальный ремонт.',
  // Заголовок раздела
  title: 'Комплексное обслуживание',
}

export const Maintenance = () => {
  return (
    <section>
      <Container className={s.wrapper}>
        <TitleContainer variant={'h2'}>{maintenanceData.title}</TitleContainer>
        <div className={s.imgWrapper}>
          <Image
            alt={'Комплексное обслуживание фото'}
            className={s.photo}
            placeholder={'blur'}
            sizes={'h-[300px] w-full'}
            src={maintenanceData.img}
          />
        </div>
        <div className={s.textWrapper}>
          <Typography className={s.text1}>
            Комплексное обслуживание ком&shy;мер&shy;чес&shy;кой нед&shy;вижи&shy;мости – это
            пере&shy;чень меро&shy;прия&shy;тий по техни&shy;чес&shy;кому обес&shy;пече&shy;нию
            рабо&shy;тоспособ&shy;ности ком&shy;муни&shy;кацион&shy;ных систем, оно включает текущий
            ремонт, а также мониторинг технического состо&shy;яния об&shy;ъекта.
          </Typography>
          <Typography className={s.text2}>
            Опытные работники возьмут на себя все заботы по управлению недвижимостью. Специалисты
            ка&shy;чес&shy;твенно и опера&shy;тивно выполнят весь спектр сантех&shy;нических,
            электро&shy;монтажных и многих других работ при обслуживании Вашего поме&shy;щения.
          </Typography>
          <Typography className={s.textItalic}>{maintenanceData.text3}</Typography>
        </div>
      </Container>
    </section>
  )
}
