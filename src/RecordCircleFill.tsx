import React from 'react'

export function RecordCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM7.43262 12.1141C7.43262 14.7338 9.54248 16.8437 12.1622 16.8437C14.7631 16.8437 16.8723 14.7338 16.8723 12.1141C16.8723 9.51319 14.7631 7.40401 12.1622 7.40401C9.54248 7.40401 7.43262 9.51319 7.43262 12.1141Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
