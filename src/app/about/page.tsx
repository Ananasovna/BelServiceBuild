import { About } from '@/components/about/about'
import { Metadata } from 'next'
import { aboutData } from '@/common/data/aboutData'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'О компании BelServiceBuild',
  description: '',
  keywords: '',
}

const AboutPage = () => {
  return <About data={aboutData} />
}

export default AboutPage
