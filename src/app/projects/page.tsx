import { Container } from '@/common/components/container/container'
import { Typography } from '@/common/components/typography/typography'

import s from '@/app/services/page.module.scss'

const Projects = () => {
  return (
    <div>
      <Container>
        <div className={s.titleWrapper}>
          <Typography className={s.title} variant={'large'}>
            Наши проекты
          </Typography>
          <div className={s.underline}></div>
        </div>
      </Container>
    </div>
  )
}

export default Projects
