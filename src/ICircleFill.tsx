import React from 'react'

export default function ICircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.8897 6.86612L11.8897 17.5264C11.8897 17.6673 12.0115 17.7868 12.1602 17.7868C12.3283 17.7868 12.4319 17.6693 12.4319 17.5264L12.4319 6.86612C12.4319 6.7043 12.3283 6.60498 12.1602 6.60498C12.0115 6.60498 11.8897 6.70635 11.8897 6.86612Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}