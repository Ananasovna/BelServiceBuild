import { Container } from '@/common/components/container/container'
import { Item } from '@/common/components/listItem/item'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import { RenovationDataType } from '@/common/data/renovationData'
import { RenovationIcon } from '@/common/icons/renovationIcon'

import s from './renovation.module.scss'

type RenovationProps = {
  data: RenovationDataType
}

export const Renovation = ({ data }: RenovationProps) => {
  return (
    <section>
      <Container>
        <TitleContainer variant={'h2'}>{data.title}</TitleContainer>
        <div className={s.bg}>
          <div className={s.textWrapper}>
            <div className={s.iconTextBlock}>
              <div className={s.iconWrapperBig}>
                <RenovationIcon height={'100%'} />
              </div>
              <div className={s.textWithIcon}>
                <div className={s.iconWrapperSmall}>
                  <RenovationIcon height={'100%'} />
                </div>
                <Typography className={s.text1}>
                  <strong>Ремонт нежилых помещений</strong> важен для бизнеса, поскольку такие
                  помещения являются основными средствами для достижения прибыли. Таким образом от
                  того, насколько хорошо обеспечено их техническое и эстетическое состояние часто
                  зависит поток клиентов, имидж орга&shy;низации, эффек&shy;тивность
                  эксплуа&shy;тации простран&shy;ства, а также ре&shy;зуль&shy;та&shy;тив&shy;ность
                  работы персонала.
                </Typography>
                <Typography className={s.text2}>
                  Строительно-монтажные работы – важный этап в создании ком&shy;мерческих объектов,
                  который включает в себя широкий спектр мероприятий: от разработки и
                  со&shy;гла&shy;со&shy;вания проекта до ввода объекта в эксплуатацию. Высокие
                  современные стандарты строи&shy;тель&shy;ства требуют от специалистов глубоких
                  знаний и опыта, а также профес&shy;сиональной технической
                  под&shy;го&shy;тов&shy;ки.
                </Typography>
              </div>
            </div>
            <div className={s.listWrapper}>
              <Typography className={s.listTitle}>
                <strong>{data.listTitle}</strong>
              </Typography>
              <div className={s.list}>
                {data.renovationList.map(el => (
                  <Item key={el.id}>{el.text}</Item>
                ))}
              </div>
            </div>
            <Typography className={s.textItalic}>
              Мы проведем ремонт и отделку ком&shy;мер&shy;ческих помещений быстро,
              про&shy;фес&shy;сиональ&shy;но, экономично, с соб&shy;люде&shy;нием технических
              строительных стандартов и требований к различным видам помещений, тщательным контролем
              над соблюдением проекта и сметы расходов! В кратчайшие сроки вы получите в
              эксплуатацию помещения для ком&shy;мерчес&shy;кого использования,
              от&shy;ве&shy;чаю&shy;щие мировым стандартам качества, безопасности и принципов
              сов&shy;ре&shy;мен&shy;ного интерьерного дизайна!
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  )
}
