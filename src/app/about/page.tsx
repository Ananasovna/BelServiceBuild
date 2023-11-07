import logo from '@/../public/image/logoFull.jpg'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './page.module.scss'

const About = () => {
  return (
    <div className={s.wrapper}>
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
            крупнейших городах России. Позаботимся обо всех этапах строительства: от демонтажа до
            чистовой отделки. Лучшие цены, гарантия качества и опытные специалисты.
          </Typography>
          <Typography variant={'body1'}>
            Мы работаем в Москве, Санкт-Петербурге, Екатеринбурге, Пскове, Череповце, Белгороде,
            Астрахани, Казани, Самаре, Уфе, Якутске, Новосибирске, Хабаровске, Саратове, Иркутске,
            Ангарске, Коломне, Перми и Старом Осколе.
          </Typography>
        </div>
        <Image alt={'Фото компании'} className={s.photo} src={logo} />
      </Container>
    </div>
  )
}

export default About
