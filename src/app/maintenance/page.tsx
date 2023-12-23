import { Maintenance } from '@/components/maintenance/maintenance'
import { Metadata } from 'next'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  description: '',
  keywords: '',
  title: 'Комплексное обслуживание',
}

const MaintenancePage = () => {
  return <Maintenance />
}

export default MaintenancePage
