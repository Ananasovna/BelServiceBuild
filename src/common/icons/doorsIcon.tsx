import { IconProps } from '@/common/icons/telephoneIcon'

export const DoorsIcon = ({
  color = '#ce5d00',
  height = '60px',
  width = '60px',
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      fill={color}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 3"
      viewBox="0 0 64 64"
      {...props}
    >
      <path d="M62 11H2a1 1 0 0 0-1 1v50a1 1 0 0 0 1 1h60a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm-5 50H33V17h24zm-26 0H7V17h24zm30 0h-2V16a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v45H3V13h58zM26 1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm11 6H27V3h10z" />
      <path d="M23 35h5a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm1-14h3v12h-3zM27 43h2v-6h-2v2H10v2h17zM36 35h5a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm1-14h3v12h-3zM37 43v-2h17v-2H37v-2h-2v6z" />
    </svg>
  )
}
