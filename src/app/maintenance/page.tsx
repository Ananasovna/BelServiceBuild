import { Metadata } from 'next'
import { Maintenance } from '@/components/maintenance/maintenance'

// Этот объект необходимо отредактировать для SEO-продвижения, подробнее о полях здесь https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
  title: 'Комплексное обслуживание',
  description: '',
  keywords: '',
}

const MaintenancePage = () => {
  return <Maintenance />
}

export default MaintenancePage
