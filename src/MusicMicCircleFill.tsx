import React from 'react'

export default function MusicMicCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.5859 9.34258L5.83301 16.6376C5.55753 16.9235 5.61202 17.2324 5.99581 17.6105L4.94708 18.8469C4.90255 18.8851 4.90255 18.9455 4.95821 19.0089L5.14512 19.2133C5.21895 19.2767 5.26759 19.2689 5.32462 19.2335L6.58048 18.1394C6.90206 18.5036 7.22979 18.5763 7.52481 18.3287L11.5856 14.5771L11.5856 19.2144C11.5856 19.4687 11.7605 19.6716 12.0344 19.6716C12.316 19.6716 12.5091 19.4506 12.5091 19.2144L12.5091 13.7037L14.7458 11.67C15.6304 11.8592 16.6351 11.4154 17.568 10.4818L13.6813 6.58467C12.7463 7.51963 12.387 8.41192 12.5859 9.34258ZM13.3336 10.7834C13.6072 11.1038 13.9102 11.3404 14.1936 11.4939L7.13868 18.0987L6.05528 17.0153L12.7523 9.85645C12.9044 10.188 13.104 10.4986 13.3336 10.7834ZM14.0869 6.16992L18.0022 10.0664C19.3431 8.68858 19.4282 7.16172 18.1823 5.95284C16.9539 4.7251 15.4731 4.81094 14.0869 6.16992Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
