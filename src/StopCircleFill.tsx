import React from 'react'

export default function StopCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.66885 7.70176C8.06993 7.70176 7.70108 8.07901 7.70108 8.67657L7.70108 15.664C7.70108 16.2531 8.06993 16.6297 8.66885 16.6297L15.6626 16.6297C16.2518 16.6297 16.6297 16.2531 16.6297 15.664L16.6297 8.67657C16.6297 8.07901 16.2518 7.70176 15.6626 7.70176Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
