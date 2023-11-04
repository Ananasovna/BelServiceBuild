import { Typography } from '@/common/components/typography/typography'

import s from './projectCard.module.scss'

export const ProjectCard = () => {
  return (
    <div className={s.project}>
      <div className={s.projectName}>
        <Typography className={s.title} variant={'h3'}>
          Проект 1
        </Typography>
      </div>
    </div>
  )
}
