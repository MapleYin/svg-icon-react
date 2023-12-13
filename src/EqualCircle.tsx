import React from 'react'

export function EqualCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.75059 14.634L17.5593 14.634C17.7065 14.634 17.824 14.5233 17.824 14.3768C17.824 14.2204 17.7079 14.1188 17.5593 14.1188L6.75059 14.1188C6.60196 14.1188 6.48584 14.2204 6.48584 14.3768C6.48584 14.5233 6.59424 14.634 6.75059 14.634ZM6.75059 10.2517L17.5593 10.2517C17.7065 10.2517 17.824 10.1417 17.824 9.99512C17.824 9.83809 17.7079 9.73652 17.5593 9.73652L6.75059 9.73652C6.60196 9.73652 6.48584 9.83809 6.48584 9.99512C6.48584 10.1417 6.59424 10.2517 6.75059 10.2517Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
