import React from 'react'

export function PlayCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM8.8375 7.63096L8.8375 16.7382C8.8375 17.1418 9.30108 17.3342 9.68516 17.1105L16.9129 12.7173C17.3124 12.469 17.311 11.956 16.9129 11.7077L9.68516 7.25938C9.29473 7.02862 8.8375 7.22735 8.8375 7.63096Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
