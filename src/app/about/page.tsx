import { About } from '@/components/about/about'
import { Metadata } from 'next'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  description: '',
  keywords: '',
  title: 'О компании BelServiceBuild',
}

const AboutPage = () => {
  return <About />
}

export default AboutPage
