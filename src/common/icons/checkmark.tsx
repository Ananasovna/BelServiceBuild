import { IconProps } from '@/common/icons/telephoneIcon'

export const Checkmark = ({
  color = '#000',
  height = '60px',
  width = '60px',
  ...props
}: IconProps) => {
  return (
    <svg
      fill={color}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 548.873 548.873"
      {...props}
    >
      <path d="M449.34 47.966 195.46 301.845l-95.927-95.928L0 305.449l95.928 95.929 99.532 99.529 99.53-99.529 253.883-253.882z" />
    </svg>
  )
}
