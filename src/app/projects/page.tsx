import project1 from '@/../public/image/project1.jpg'
import project2 from '@/../public/image/project2.jpg'
import project3 from '@/../public/image/project3.jpg'
import { Container } from '@/common/components/container/container'
import { ProjectCard } from '@/common/components/projectCard/projectCard'
import { TitleContainer } from '@/common/components/titleContainer/titleContainer'
import { Typography } from '@/common/components/typography/typography'
import { StaticImageData } from 'next/image'

import s from './page.module.scss'

export type ProjectType = {
  alt: string
  id: number
  img: StaticImageData
  title: string
}

const Projects = () => {
  const projects: ProjectType[] = [
    { alt: 'Фото проекта 1', id: 1, img: project1, title: 'Vfufpby jlt;ls' },
    { alt: 'Фото проекта 2', id: 2, img: project2, title: 'Vfufpby jlt;ls d w' },
    { alt: 'Фото проекта 3', id: 3, img: project3, title: 'project3' },
  ]

  const mappedProjects = projects.map(el => <ProjectCard key={el.id} project={el} />)

  return (
    <div className={s.wrapper}>
      <Container>
        <TitleContainer>
          <Typography className={s.title} variant={'h1'}>
            Наши проекты
          </Typography>
        </TitleContainer>
        <div className={s.projectsWrapper}>{mappedProjects}</div>
      </Container>
    </div>
  )
}

export default Projects
