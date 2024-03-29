import React from 'react'

export function MoonphaseWaxingGibbous({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M6.27453 12.1985C6.27453 6.88526 9.63614 2.37277 14.6903 0.780869C19.9036 1.93878 23.8306 6.59786 23.8312 12.1706C23.8228 17.7727 19.8373 22.4876 14.5577 23.5883C9.5796 21.9342 6.27453 17.4594 6.27453 12.1985Z'
        fill={color}
        fillOpacity='0.2125'
      />
      <path
        d='M0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706ZM6.27453 12.1985C6.27453 6.88526 9.63614 2.37277 14.6903 0.780869C19.9036 1.93878 23.8306 6.59786 23.8312 12.1706C23.8228 17.7727 19.8373 22.4876 14.5577 23.5883C9.5796 21.9342 6.27453 17.4594 6.27453 12.1985Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
