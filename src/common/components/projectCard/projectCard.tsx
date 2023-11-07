import { ProjectType } from '@/app/projects/page'
import { Typography } from '@/common/components/typography/typography'
import Image from 'next/image'

import s from './projectCard.module.scss'

type ProjectCardProps = {
  project: ProjectType
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={s.project}>
      <div className={s.imageWrapper}>
        <Image alt={project.alt} className={s.image} placeholder={'blur'} src={project.img} />
      </div>
      <Typography className={s.title} variant={'h3'}>
        {project.title}
      </Typography>
    </div>
  )
}
