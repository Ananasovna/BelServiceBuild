import { Typography } from '@/common/components/typography/typography'

import Image from 'next/image'

import s from './projectCard.module.scss'
import { ProjectType } from '@/common/data/projectsData'

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={s.project}>
      <div className={s.imageWrapper}>
        <Image
          alt={project.alt}
          className={s.image}
          placeholder={'blur'}
          src={project.img}
          priority={true}
        />
      </div>
      {project.title !== '' && (
        <Typography className={s.title} variant={'subtitle2'}>
          {project.title}
        </Typography>
      )}
    </div>
  )
}
