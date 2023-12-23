import { renovationData } from '@/common/data/renovationData'
import { Renovation } from '@/components/renovation/renovation'
import { Metadata } from 'next'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  description: '',
  keywords: '',
  title: 'Комплексный ремонт',
}

const RenovationPage = () => {
  return <Renovation data={renovationData} />
}

export default RenovationPage
