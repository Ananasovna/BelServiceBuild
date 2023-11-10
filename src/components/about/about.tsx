import logo from '@/../public/image/logoFull.jpg'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './about.module.scss'

export const About = () => {
  return (
    <Container className={s.aboutContainer}>
      <div className={s.text}>
        <TitleContainer align={'left'}>
          <Typography className={s.title} variant={'h1'}>
            О нас
          </Typography>
        </TitleContainer>
        <Typography variant={'body1'}>
          Наша компания оказывает профессиональные услуги{' '}
          <strong>по проектированию, ремонту и обслуживанию коммерческих помещений</strong> в
          крупнейших городах России. Поможем на всех этапах строительства, как в мелком, так и в
          комплексном ремонте Вашей коммерческой площадки. Сдача помещения торговым центрам после
          строительно-монтажных работ, полное сопровождение вплоть до открытия. Мы понимаем что
          означают сроки в строительстве, поэтому поставленные задачи стараемся выполнять вовремя.
          Конкурентные цены, гарантия качества и опытные прорабы. При заключении с нами договора на
          обслуживание, наши специалисты оперативно проанализируют неисправности и отправят к Вам
          высококвалифицированных электриков, отделочников, специалистов по вентиляции и
          кондиционированию.
        </Typography>
        <Typography variant={'body1'}>
          Мы работаем в Москве, Санкт-Петербурге, Екатеринбурге, Пскове, Череповце, Белгороде,
          Астрахани, Казани, Самаре, Уфе, Якутске, Новосибирске, Хабаровске, Саратове, Иркутске,
          Ангарске, Коломне, Перми, Старом Осколе и других городах.
        </Typography>
      </div>
      <Image alt={'Фото компании'} className={s.photo} src={logo} />
    </Container>
  )
}