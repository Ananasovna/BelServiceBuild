import { Metadata } from 'next'
import { Renovation } from '@/components/renovation/renovation'
import { renovationData } from '@/common/data/renovationData'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'Комплексный ремонт',
  description: '',
  keywords: '',
}

const RenovationPage = () => {
  return <Renovation data={renovationData} />
}

export default RenovationPage
