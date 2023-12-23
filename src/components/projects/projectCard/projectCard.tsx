import { Typography } from '@/common/components/typography/typography'
import { ProjectType } from '@/components/projects/projects'
import Image from 'next/image'

import s from './projectCard.module.scss'

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
          priority
          src={project.img}
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
