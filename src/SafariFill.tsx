import React from 'react'

export default function SafariFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM18.106 5.67305L10.3614 9.72979C10.0993 9.87764 9.91738 10.0414 9.7207 10.3887L5.64512 18.1346C5.39141 18.635 5.66016 18.9505 6.19757 18.6779L13.9435 14.6024C14.216 14.4622 14.435 14.2607 14.594 13.9616L18.65 6.21641C18.9135 5.72374 18.6559 5.38096 18.106 5.67305ZM13.6988 12.1804C13.6988 13.032 13.0041 13.7261 12.1615 13.7261C11.3106 13.7261 10.6158 13.032 10.6158 12.1804C10.6158 11.3294 11.3106 10.6438 12.1615 10.6438C13.0041 10.6438 13.6988 11.3294 13.6988 12.1804Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
