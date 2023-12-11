import React from 'react'

export default function ClockCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.18907 12.8274C8.03028 12.8274 7.91465 12.7118 7.91465 12.5439C7.91465 12.3677 8.03028 12.2514 8.18907 12.2514L11.8864 12.2514L11.8864 7.37286C11.8864 7.20635 12.0027 7.09005 12.1602 7.09005C12.3553 7.09005 12.4723 7.20635 12.4723 7.37286L12.4723 12.5439C12.4723 12.7111 12.3267 12.8274 12.1602 12.8274ZM12.1608 18.9564C15.8983 18.9564 18.9557 15.899 18.9557 12.1706C18.9557 8.43311 15.8983 5.37579 12.1602 5.37579C8.43174 5.37579 5.3751 8.43311 5.3751 12.1706C5.3751 15.899 8.42334 18.9564 12.1608 18.9564Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
