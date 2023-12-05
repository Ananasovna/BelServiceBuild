import { IconProps } from '@/common/icons/telephoneIcon'

export const LetterIcon = ({ color = '#000', ...props }: IconProps) => {
  return (
    <svg
      fill={color}
      style={{
        clipRule: 'evenodd',
        fillRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
      viewBox={'0 0 32 32'}
      xmlSpace={'preserve'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M2 8.616V24a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V8.616l-13.479 8.237a.997.997 0 0 1-1.042 0L2 8.616Zm14 6.212L3.19 7h25.62L16 14.828Z'
        }
      />
    </svg>
  )
}
