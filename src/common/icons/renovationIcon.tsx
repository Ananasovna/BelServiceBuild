import { IconProps } from '@/common/icons/telephoneIcon'

export const RenovationIcon = ({
  color = '#000',
  height = '100%',
  width = '100%',
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 128 128"
      width={width}
      fill={color}
      height={height}
      {...props}
    >
      <g fill={color}>
        <path d="M17 2v124h94V23.2L89.8 2H17zm74 6.8L104.2 22H91V8.8zM21 122V6h66v20h20v96H21z" />
        <path d="M29 77h70v4H29zM29 87h70v4H29zM74 97h25v4H74zM64 63.6c8.7 0 17.4-1.5 25.7-4.4l1.3-.5v-7.3l-3.1-.9v-2.9c0-9-5-17.2-12.9-21.2v-.2c0-2.3-1.9-4.2-4.2-4.2H66v-.6h-4v.6h-4.8c-2.3 0-4.2 1.9-4.2 4.2v.2c-7.9 4.1-12.9 12.3-12.9 21.2v2.9l-3.1 1v7.3l1.3.5c8.3 2.8 17 4.3 25.7 4.3zm-23-9.1 3.1-.9v-5.9c0-6.7 3.4-13 8.9-16.6v6.1h4v-11c0-.1.1-.2.2-.2H62v17.3h4V26h4.8c.1 0 .2.1.2.2v11h4v-6.1c5.5 3.7 8.9 9.9 8.9 16.6v5.9l3.1.9v1.4a73.81 73.81 0 0 1-46 0v-1.4z" />
        <path d="M48.6 50.1h30.7v4H48.6z" />
      </g>
    </svg>
  )
}
