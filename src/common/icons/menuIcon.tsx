import { IconProps } from '@/common/icons/telephoneIcon'

export const MenuIcon = ({ color = '#000', ...props }: IconProps) => {
  return (
    <svg
      fill={color}
      viewBox={'0 0 384 384'}
      xmlSpace={'preserve'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path d={'M0 277.333h384V320H0zM0 170.667h384v42.667H0zM0 64h384v42.667H0z'} />
    </svg>
  )
}
