import { IconProps } from '@/common/icons/telephoneIcon'

export const ProjectIcon = ({ color = '#ce5d00' }: IconProps) => {
  return (
    <svg viewBox={'0 0 128 128'} xmlSpace={'preserve'} xmlns={'http://www.w3.org/2000/svg'}>
      <g fill={color}>
        <path
          d={
            'M6 104H2c0 9.4 7.6 17 17 17h107V17H21V2h-2C9.6 2 2 9.6 2 19v85h4c0-7.2 5.8-13 13-13h2V21h101v96H19c-7.2 0-13-5.8-13-13zm11-16.9c-4.4.5-8.3 2.7-11 5.9V19c0-6.5 4.8-11.9 11-12.8v80.9z'
          }
        />
        <path
          d={
            'M103 29H91v67.5l6 12 6-12V29zm-4 4v11h-4V33h4zm-2 66.5-2-4V48h4v47.5l-2 4zM42 77v4h8l-5 27.7 3.9.7L54 81h12l5.1 28.4 3.9-.7L70 81h8v-4h-8.7L67 63.8c3.1-2.2 5-5.9 5-9.8 0-5.9-4.3-10.9-10-11.8V29h-4v13.2c-5.7 1-10 5.9-10 11.8 0 3.9 1.9 7.5 5 9.8L50.7 77H42zm14.2-16c-2.6-1.4-4.2-4.1-4.2-7 0-4.4 3.6-8 8-8s8 3.6 8 8c0 2.9-1.6 5.6-4.2 7l-1.3.7L65.3 77H54.7l2.7-15.3-1.2-.7z'
          }
        />
      </g>
    </svg>
  )
}
