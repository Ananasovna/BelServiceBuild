import { ComponentPropsWithoutRef, ElementType } from 'react';
import { clsx } from 'clsx';

import s from './typography.module.scss';

export type TypographyProps<T extends ElementType> = {
	as?: T;
	variant?:
		| 'body1'
		| 'body2'
		| 'caption'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'large'
		| 'link1'
		| 'link2'
		| 'overline'
		| 'subtitle1'
		| 'subtitle2';
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'span'>(
	props: TypographyProps<T>
) => {
	const {
		as: Component = 'span',
		children,
		className,
		variant = 'body1',
		...rest
	} = props;

	return (
		<Component className={clsx(className, s[variant])} {...rest}>
			{children}
		</Component>
	);
};
