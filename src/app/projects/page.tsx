import { Projects } from '@/components/projects/projects'
import { Metadata } from 'next'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'Проекты компании BelServiceBuild',
  description: '',
  keywords: '',
}
const ProjectsPage = () => {
  return <Projects />
}

export default ProjectsPage
