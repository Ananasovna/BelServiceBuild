import { Projects } from '@/components/projects/projects'
import { Metadata } from 'next'
import { projectsData } from '@/common/data/projectsData'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'Проекты компании BelServiceBuild',
  description: '',
  keywords: '',
}
const ProjectsPage = () => {
  return <Projects data={projectsData} />
}

export default ProjectsPage
