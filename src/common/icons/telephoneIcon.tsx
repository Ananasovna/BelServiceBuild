export type IconProps = {
  color?: string
  height?: string
  width?: string
}

export const TelephoneIcon = ({ color = '#000', height = '30px', width = '30px' }: IconProps) => {
  return (
    <svg
      fill={color}
      height={height}
      id={'Capa_1'}
      version={'1.1'}
      viewBox={'0 0 512.001 512.001'}
      width={width}
      x={'0px'}
      xmlSpace={'preserve'}
      xmlns={'http://www.w3.org/2000/svg'}
      y={'0px'}
    >
      <path
        d={
          'm462.491 468.206-33.938 33.937c-6.062 6.031-23.812 9.844-24.343 9.844-107.435.905-210.869-41.279-286.882-117.31C41.097 318.46-1.136 214.619.036 106.872c0-.063 3.891-17.312 9.938-23.312l33.937-33.968c12.453-12.437 36.295-18.062 52.998-12.5l7.156 2.406c16.703 5.562 34.155 23.999 38.78 40.967l17.093 62.717c4.64 17-1.594 41.186-14.031 53.623l-22.687 22.687c22.25 82.467 86.919 147.121 169.339 169.402l22.687-22.688c12.438-12.438 36.687-18.656 53.687-14.031l62.718 17.125c16.937 4.594 35.374 22.03 40.968 38.748l2.375 7.156c5.558 16.722-.066 40.565-12.503 53.002zM287.996 255.993h31.999c0-35.343-28.655-63.998-63.998-63.998v31.999c17.639 0 31.999 14.374 31.999 31.999zm127.996 0c0-88.373-71.623-159.996-159.995-159.996v32c70.591 0 127.996 57.436 127.996 127.996h31.999zM255.997 0v31.999c123.496 0 223.993 100.497 223.993 223.994h31.999C511.989 114.622 397.368 0 255.997 0z'
        }
      />
    </svg>
  )
}
