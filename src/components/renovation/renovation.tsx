import { Container } from '@/common/components/container/container'
import { Item } from '@/common/components/listItem/item'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import { RenovationIcon } from '@/common/icons/renovationIcon'
import { ListType } from '@/components/about/about'

import s from './renovation.module.scss'

export type RenovationDataType = {
  listTitle: string
  renovationList: ListType[]
  title: string
}

//Данные для раздела "Комплексный ремонт"
export const renovationData: RenovationDataType = {
  // Заголовок списка
  listTitle:
    'Комплекс ремонта и отделки коммерческих помещений от компании «БелСервисСтрой» предполагает:',
  // Список услуг, чтобы заменить пункты списка - изменить текст в кавычках, при добавлении новых пунктов добавить объект и присвоить ему номер id, при удалении пункта удалить весь объект пункта целиком (с фигурными скобками)
  renovationList: [
    { id: 1, text: 'Демонтажные / монтажные работы по планировке помещений;' },
    {
      id: 2,
      text: 'Демонтаж/монтаж инженерных коммуникаций (вентиляция, канализация, отопление, электропроводка);',
    },
    { id: 3, text: 'Замену потолочных подвесных и натяжных конструкций;' },
    { id: 4, text: 'Черновую отделку стен и полов (штукатурка, шпатлевка, стяжка);' },
    {
      id: 5,
      text: 'Финишную отделку потолков и стен (побелка, покраска, декоративная штукатурка и т.д.);',
    },
    {
      id: 6,
      text: 'Установку напольных покрытий любого типа (включая укладку керамической плитки);',
    },
    {
      id: 7,
      text: 'Монтаж климатических, электрических и сантехнических приборов;',
    },
    {
      id: 8,
      text: 'Уборку строительного мусора.',
    },
  ],
  // Заголовок раздела
  title: 'Комплексный ремонт',
}

export const Renovation = () => {
  return (
    <section>
      <Container>
        <TitleContainer variant={'h2'}>{renovationData.title}</TitleContainer>
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
                <strong>{renovationData.listTitle}</strong>
              </Typography>
              <div className={s.list}>
                {renovationData.renovationList.map(el => (
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
