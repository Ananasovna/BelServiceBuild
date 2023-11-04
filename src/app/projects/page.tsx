import { Container } from '@/common/components/container/container'
import { ProjectCard } from '@/common/components/projectCard/projectCard'
import { Typography } from '@/common/components/typography/typography'

import s from './page.module.scss'

const Projects = () => {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.titleWrapper}>
          <Typography className={s.title} variant={'large'}>
            Наши проекты
          </Typography>
          <div className={s.underline}></div>
        </div>
        <div className={s.projectsWrapper}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </div>
  )
}

export default Projects
