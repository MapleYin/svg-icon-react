import React from 'react'

export default function JCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM14.1002 6.86544L14.1002 14.664C14.1002 16.2575 13.1966 17.2504 11.7725 17.2504C10.4188 17.2504 9.3503 16.385 9.23966 15.1764C9.22667 14.9919 9.12715 14.9063 8.98242 14.9063C8.80225 14.9063 8.71543 15.0112 8.71543 15.2012C8.71543 15.2687 8.73564 15.3809 8.74043 15.5028C8.9501 16.7772 10.1908 17.7664 11.7572 17.7664C13.542 17.7664 14.6424 16.5103 14.6424 14.6653L14.6424 6.86544C14.6424 6.7043 14.5388 6.60498 14.3706 6.60498C14.2311 6.60498 14.1002 6.70567 14.1002 6.86544Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
