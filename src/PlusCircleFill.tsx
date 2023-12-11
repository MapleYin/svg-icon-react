import React from 'react'

export default function PlusCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.8961 6.97442L11.8961 11.887L6.98418 11.887C6.83555 11.887 6.72646 12.0136 6.72646 12.1622C6.72646 12.2816 6.8544 12.4165 6.98418 12.4165L11.8961 12.4165L11.8961 17.3207C11.8961 17.4582 12.0317 17.5861 12.142 17.5861C12.299 17.5861 12.4256 17.4771 12.4256 17.3207L12.4256 12.4165L17.3389 12.4165C17.4673 12.4165 17.6043 12.2816 17.6043 12.1622C17.6043 12.0136 17.4861 11.887 17.3389 11.887L12.4256 11.887L12.4256 6.97442C12.4256 6.82647 12.299 6.7083 12.142 6.7083C12.0317 6.7083 11.8961 6.84531 11.8961 6.97442Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
