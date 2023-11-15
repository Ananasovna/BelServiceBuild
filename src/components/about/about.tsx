import logo from '@/../public/image/logoFull.jpg'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './about.module.scss'

export const About = () => {
  return (
    <Container className={s.aboutContainer}>
      <Image alt={'Фото компании'} className={s.photo} src={logo} />

      <div className={s.wrapper}>
        <TitleContainer className={s.title} variant={'h2'} align={'left'}>
          О нас
        </TitleContainer>
        <Typography className={s.text1} variant={'body1'}>
          Наша компания оказывает профессиональные услуги{' '}
          <strong className={s.strong}>
            {' '}
            по проектированию, ремонту и обслуживанию коммерческих помещений
          </strong>{' '}
          в крупнейших городах России. Поможем на всех этапах строительства, как в мелком, так и в
          комплексном ремонте Вашей коммерческой площадки. Сдача помещения торговым центрам после
          строительно-монтажных работ, полное сопровождение вплоть до открытия. Мы понимаем что
          означают сроки в строительстве, поэтому поставленные задачи стараемся выполнять вовремя.
          Конкурентные цены, гарантия качества и опытные прорабы. При заключении с нами договора на
          обслуживание, наши специалисты оперативно проанализируют неисправности и отправят к Вам
          высококвалифицированных электриков, отделочников, специалистов по вентиляции и
          кондиционированию.
        </Typography>
      </div>
      <Typography className={s.text2} variant={'body1'}>
        Мы работаем в Москве, Санкт-Петербурге, Екатеринбурге, Пскове, Череповце, Белгороде,
        Астрахани, Казани, Самаре, Уфе, Якутске, Новосибирске, Хабаровске, Саратове, Иркутске,
        Ангарске, Коломне, Перми, Старом Осколе и других городах.
      </Typography>
    </Container>
  )
}
