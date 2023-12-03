import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import s from './maintenance.module.scss'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'
import maintenance from '@/../public/image/maintenance.jpg'

export const Maintenance = () => {
  return (
    <Container className={s.wrapper}>
      <TitleContainer variant={'h2'}>{'Комплексное обслуживание'}</TitleContainer>
      <div className={s.imgWrapper}>
        <Image
          placeholder={'blur'}
          className={s.photo}
          src={maintenance}
          alt={'Комплексное обслуживание фото'}
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
        <Typography className={s.textItalic}>
          Сотрудничая с нами, вы получаете бесперебойную работу инженерных систем и снижаете затраты
          на текущий и капитальный ремонт.
        </Typography>
      </div>
    </Container>
  )
}
