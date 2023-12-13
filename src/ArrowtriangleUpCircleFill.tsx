import React from 'react'

export function ArrowtriangleUpCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.6791 7.73174L7.23916 14.9595C7 15.3408 7.20782 15.7981 7.60235 15.7981L16.7103 15.7981C17.1139 15.7981 17.314 15.3345 17.0818 14.9595L12.6894 7.73174C12.4404 7.33086 11.9273 7.32383 11.6791 7.73174Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
