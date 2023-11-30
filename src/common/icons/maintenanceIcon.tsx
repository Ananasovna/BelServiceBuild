import { IconProps } from '@/common/icons/telephoneIcon'
import { Maintenance } from '@/components/maintenance/maintenance'

export const MaintenanceIcon = ({
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
        <path d="m109.6 38.9 8.5-8.5L101 13.3V2H27v11.3L9.9 30.4l8.5 8.5c-1.9 3.4-3.3 6.9-4.4 10.6H2v29h12c1.1 3.7 2.5 7.2 4.4 10.6l-8.5 8.5 20.5 20.5 8.5-8.5c3.4 1.9 6.9 3.3 10.6 4.4v12h29v-12c3.7-1.1 7.2-2.5 10.6-4.4l8.5 8.5 20.5-20.5-8.5-8.5c1.9-3.4 3.3-6.9 4.4-10.6h12v-29h-12c-1.1-3.7-2.6-7.2-4.4-10.6zM31 6h66v91H64c-18.2 0-33-14.8-33-33V6zm91 68.5h-11.1l-.4 1.5c-1.1 4.3-2.8 8.5-5.1 12.4l-.8 1.3 7.9 7.9-14.8 14.8-7.9-7.9-1.3.8c-3.9 2.3-8.1 4-12.4 5.1l-1.5.4V122h-21v-11.1l-1.5-.4c-4.3-1.1-8.5-2.8-12.4-5.1l-1.3-.8-7.9 7.9-14.9-14.9 7.9-7.9-.8-1.3c-2.3-3.9-4-8.1-5.1-12.4l-.4-1.5H6v-21h11.1l.4-1.5c1.1-4.3 2.8-8.5 5.1-12.4l.8-1.3-7.9-7.9L27 19v45c0 20.4 16.6 37 37 37h37V19l11.4 11.4-7.9 7.9.8 1.3c2.3 3.9 4 8.1 5.1 12.4l.4 1.5H122v21z" />
        <path d="M39 32h50v4H39zM39 42h50v4H39zM39 52h50v4H39zM39 62h50v4H39zM79 72h10v4H79zM49 12h30v4H49z" />
      </g>
    </svg>
  )
}
