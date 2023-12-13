import React from 'react'

export function ECircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.05723 17.7223L15.235 17.7223C15.4292 17.7223 15.5042 17.6025 15.5042 17.4537C15.5042 17.323 15.4292 17.1768 15.235 17.1768L9.36397 17.1768L9.36397 12.3235L14.9497 12.3235C15.1433 12.3235 15.2183 12.1695 15.2183 12.0486C15.2183 11.8998 15.1433 11.773 14.9497 11.773L9.36397 11.773L9.36397 7.21573L15.235 7.21573C15.4292 7.21573 15.5042 7.06807 15.5042 6.93809C15.5042 6.79834 15.4292 6.67022 15.235 6.67022L9.05723 6.67022C8.90088 6.67022 8.8168 6.7793 8.8168 6.96495L8.8168 17.4269C8.8168 17.6125 8.90088 17.7223 9.05723 17.7223Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
