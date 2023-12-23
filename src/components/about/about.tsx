import { Container } from '@/common/components/container/container'
import { ListItem } from '@/common/components/listItem/listItem'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image, { StaticImageData } from 'next/image'

import s from './about.module.scss'

import logo from '../../../public/image/logoFull.jpg'

export type ListType = {
  id: number
  text: string
}

export type AboutType = {
  aboutList: ListType[]
  logo: StaticImageData
  text2: string
  title: string
}

//Данные для раздела/страницы "О нас"
export const aboutData: AboutType = {
  // Список преимуществ компании, чтобы заменить пункты списка - изменить текст в кавычках, при добавлении новых пунктов добавить объект и присвоить ему номер id, при удалении пункта удалить весь объект пункта целиком (с фигурными скобками)
  aboutList: [
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
      text: 'Конкурентная стоимость строительно-монтажных работ.',
    },
  ],
  // Логотип
  logo: logo,
  // Второй абзац, чтобы заменить текст нужно поменять текст внутри кавычек
  text2:
    'Мы работаем в Москве, Санкт-Петербурге, Екатеринбурге, Пскове, Череповце, Белгороде, Астрахани, Казани, Самаре, Уфе, Якутске, Новосибирске, Хабаровске, Саратове, Иркутске, Ангарске, Коломне, Перми, Старом Осколе и других городах.',
  // Заголовок раздела
  title: 'О нас',
}

export const About = () => {
  return (
    <section>
      <Container className={s.aboutContainer}>
        <div className={s.logoBlock}>
          <div className={s.wrapper}>
            <TitleContainer align={'left'} className={s.title} variant={'h2'}>
              {aboutData.title}
            </TitleContainer>
            <div className={s.listWrapper}>
              <Typography className={s.listTitle}>
                <strong>Преимущества компании БелСервисСтрой</strong>
              </Typography>
              <div className={s.list}>
                {aboutData.aboutList.map(el => (
                  <ListItem key={el.id}>{el.text}</ListItem>
                ))}
              </div>
            </div>
          </div>
          <div className={s.photoWrapper}>
            <Image
              alt={'Фото компании'}
              className={s.photo}
              sizes={'h-[320px] w-[320px]'}
              src={aboutData.logo}
            />
          </div>
        </div>
        <Typography className={s.text1}>
          Наша компания оказывает про&shy;фес&shy;сиональ&shy;ные услуги{' '}
          <strong className={s.strong}>
            {' '}
            по проектированию, ремонту и обслуживанию коммерческих помещений
          </strong>{' '}
          в крупнейших городах России. Поможем на всех этапах строительства, как в мелком, так и в
          комплексном ремонте Вашей коммерческой площадки. Сдача помещения торговым центрам после
          строительно-монтажных работ, полное сопровождение вплоть до открытия. Мы понимаем что
          означают сроки в строительстве, поэтому поставленные задачи стараемся выполнять вовремя.
          Конкурентные цены, гарантия качества и опытные прорабы. При заключении с нами договора на
          обслуживание, наши специалисты оперативно про&shy;ана&shy;ли&shy;зи&shy;руют
          не&shy;исправ&shy;ности и отправят к Вам вы&shy;соко&shy;квали&shy;фицированных
          электриков, отде&shy;лочников, специалистов по вентиляции и кондиционированию.
        </Typography>
        <Typography className={s.text2}>{aboutData.text2}</Typography>
      </Container>
    </section>
  )
}
