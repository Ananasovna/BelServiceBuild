import { Button } from '@/common/components/button/button'
import { Typography } from '@/common/components/typography/typography'

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Typography as={'div'} variant={'body1'}>
        Привет, это типография
      </Typography>
      <Button variant={'primary'}>Подробнее</Button>
      <Button disabled variant={'primary'}>
        Подробнее
      </Button>
      <Button variant={'secondary'}>Подробнее</Button>
      <Button disabled variant={'secondary'}>
        Подробнее
      </Button>
      <Button variant={'link'}>Подробнее</Button>
      <Button disabled variant={'link'}>
        Подробнее
      </Button>
    </div>
  )
}
