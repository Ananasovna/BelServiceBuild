import { projectsData } from '@/common/data/projectsData'
import { Projects } from '@/components/projects/projects'
import { Metadata } from 'next'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  description: '',
  keywords: '',
  title: 'Проекты компании BelServiceBuild',
}
const ProjectsPage = () => {
  return <Projects data={projectsData} />
}

export default ProjectsPage
