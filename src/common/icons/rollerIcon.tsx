import { IconProps } from '@/common/icons/telephoneIcon'

export const RollerIcon = ({ color = '#000', height = '50px', width = '50px' }: IconProps) => {
  return (
    <svg
      height={height}
      viewBox={'0 0 128 128'}
      width={width}
      xmlSpace={'preserve'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M126 63.2V36.6h-5V2h-4v20H30.3v14.6h-2.2v4h2.2v14.6h20.2V126h4V55.2H121V40.6h1v19.2l-50 8.3v20.5h-5.8V126h15.7V88.7H76V71.5l50-8.3zm-9-12H34.3V26H117v25.2zM77.8 122h-7.7V92.7h7.7V122z'
        }
        fill={color}
      />
      <path
        d={
          'M36.5 72h4v4h-4zM102.5 2h4v4h-4zM82.5 12h4v4h-4zM42.5 2h4v4h-4zM19.5 12h4v4h-4zM36.5 106h4v20h-4zM3 52h4v4H3zM3 122h4v4H3zM3 86h4v20H3zM3 3h4v20H3zM19.3 113.2h4v4h-4zM19.3 63.2h4v20h-4z'
        }
        fill={color}
        opacity={0.3}
      />
    </svg>
  )
}
