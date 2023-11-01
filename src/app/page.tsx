import { Typography } from '@/common/components/typography/typography';
import { Button } from '@/common/components/button/button';

export default function Page() {
	return (
		<div>
			<h1>Hello, Next.js!</h1>
			<Typography variant={'body1'} as={'div'}>
				Привет, это типография
			</Typography>
			<Button variant={'primary'}>ЭТо кнопочка</Button>
		</div>
	);
}
