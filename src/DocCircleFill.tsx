import React from 'react'

export function DocCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM9.03858 5.03008C7.94317 5.03008 7.32178 5.62491 7.32178 6.73917L7.32178 16.9564C7.32178 18.0721 7.90615 18.6655 9.03858 18.6655L15.7601 18.6655C16.8834 18.6655 17.4678 18.0707 17.4678 16.9564L17.4678 10.7999L12.6426 10.7999C12.0207 10.7999 11.7111 10.4813 11.7111 9.86778L11.7111 5.03008ZM12.3147 9.65001C12.3147 10.0143 12.4786 10.1964 12.8422 10.1964L17.3526 10.1964C17.3408 10.0787 17.237 9.98828 17.1445 9.89512L12.5971 5.37149C12.5046 5.27832 12.4135 5.17451 12.3147 5.14453Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
