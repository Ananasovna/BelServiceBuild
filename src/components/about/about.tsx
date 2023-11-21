import logo from '@/../public/image/logoFull.jpg'
import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './about.module.scss'
import { ListItem } from '@/common/components/listItem/listItem'

export const About = () => {
  const list = [
    { id: 1, text: 'Высокий уровень организации строительно-монтажных работ.' },
    {
      id: 2,
      text: 'Современное высокотехнологичное оборудование.',
    },
    {
      id: 3,
      text: 'Строгое следование строительным стандартам и требованиям безопасности при выполнении проектно-инженерных работ.',
    },
    { id: 4, text: 'Высокая квалификация сотрудников компании.' },
    {
      id: 5,
      text: 'Соблюдение сроков строительства.',
    },
    {
      id: 6,
      text: 'Оперативное взаимодействие с клиентами.',
    },
    {
      id: 7,
      text: 'Консультации по вопросам проектирования и дизайна.',
    },
    {
      id: 8,
      text: 'Невысокая сметная стоимость строительно-монтажных работ.',
    },
  ]

  const mappedList = list.map(el => <ListItem key={el.id}>{el.text}</ListItem>)

  return (
    <Container className={s.aboutContainer}>
      <div className={s.logoBlock}>
        <div className={s.wrapper}>
          <TitleContainer className={s.title} variant={'h2'} align={'left'}>
            О нас
          </TitleContainer>
          <div className={s.listWrapper}>
            <Typography className={s.listTitle}>
              <strong>Преимущества компании БелСервисСтрой</strong>
            </Typography>
            <div className={s.list}>{mappedList}</div>
          </div>
        </div>
        <div className={s.photoWrapper}>
          <Image alt={'Фото компании'} className={s.photo} src={logo} />
        </div>
      </div>
      <Typography className={s.text1}>
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
      <Typography className={s.text2}>
        Мы работаем в Москве, Санкт-Петербурге, Екатеринбурге, Пскове, Череповце, Белгороде,
        Астрахани, Казани, Самаре, Уфе, Якутске, Новосибирске, Хабаровске, Саратове, Иркутске,
        Ангарске, Коломне, Перми, Старом Осколе и других городах.
      </Typography>
    </Container>
  )
}
