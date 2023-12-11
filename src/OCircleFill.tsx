import React from 'react'

export default function OCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM7.23564 12.1917C7.23564 15.5961 9.19951 17.8593 12.1608 17.8593C15.1222 17.8593 17.086 15.5961 17.086 12.1917C17.086 8.7957 15.1222 6.53252 12.1608 6.53252C9.19951 6.53252 7.23564 8.7957 7.23564 12.1917ZM16.5438 12.1917C16.5438 15.2313 14.7605 17.3061 12.1608 17.3061C9.56192 17.3061 7.77784 15.2313 7.77784 12.1917C7.77784 9.16055 9.56192 7.08643 12.1608 7.08643C14.7605 7.08643 16.5438 9.16055 16.5438 12.1917Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
