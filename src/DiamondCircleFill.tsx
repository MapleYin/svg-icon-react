import React from 'react'

export default function DiamondCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.2717 5.86738L5.8583 11.2808C5.19287 11.9371 5.19492 12.3957 5.85059 13.0514L11.271 18.4906C11.9273 19.147 12.4034 19.1393 13.0598 18.492L18.4822 13.0695C19.1302 12.4125 19.119 11.9183 18.4809 11.2801L13.0605 5.85967C12.4041 5.20332 11.928 5.21104 11.2717 5.86738Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}