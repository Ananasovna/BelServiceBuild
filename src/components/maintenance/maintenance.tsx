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
        <Image className={s.photo} src={maintenance} alt={'Комплексное обслуживание'} />
      </div>
      <div className={s.textWrapper}>
        <Typography className={s.text1}>
          Комплексное обслуживание коммерческой недвижимости – это перечень мероприятий по
          техническому обеспечению работоспособности коммуникационных систем, оно включает текущий
          ремонт, а также мониторинг технического состояния объекта.
        </Typography>
        <Typography className={s.text2}>
          Опытные работники возьмут на себя все заботы по управлению недвижимостью. Специалисты
          качественно и оперативно выполнят весь спектр сантехнических, электромонтажных и многих
          других работ при обслуживании Вашего помещения.
        </Typography>
        <Typography className={s.textItalic}>
          Сотрудничая с нами, вы получаете бесперебойную работу инженерных систем и снижаете затраты
          на текущий и капитальный ремонт.
        </Typography>
      </div>
    </Container>
  )
}
