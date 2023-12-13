import React from 'react'

export function MinusCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.10636 11.9156C5.9711 11.9156 5.86065 12.0583 5.86065 12.1999C5.86065 12.3129 5.99063 12.4458 6.10636 12.4458L18.216 12.4458C18.3408 12.4458 18.4617 12.3129 18.4617 12.1999C18.4617 12.0583 18.352 11.9156 18.216 11.9156Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
