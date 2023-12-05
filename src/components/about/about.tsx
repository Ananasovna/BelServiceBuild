import { Container } from '@/common/components/container/container'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './about.module.scss'
import { ListItem } from '@/common/components/listItem/listItem'
import { AboutType } from '@/common/data/aboutData'

type AboutPropsType = {
  data: AboutType
}

export const About = ({ data }: AboutPropsType) => {
  const mappedList = data.aboutList.map(el => <ListItem key={el.id}>{el.text}</ListItem>)

  return (
    <section>
      <Container className={s.aboutContainer}>
        <div className={s.logoBlock}>
          <div className={s.wrapper}>
            <TitleContainer className={s.title} variant={'h2'} align={'left'}>
              {data.title}
            </TitleContainer>
            <div className={s.listWrapper}>
              <Typography className={s.listTitle}>
                <strong>Преимущества компании БелСервисСтрой</strong>
              </Typography>
              <div className={s.list}>{mappedList}</div>
            </div>
          </div>
          <div className={s.photoWrapper}>
            <Image alt={'Фото компании'} className={s.photo} src={data.logo} />
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
        <Typography className={s.text2}>{data.text2}</Typography>
      </Container>
    </section>
  )
}
