import React from 'react'

export function PlaypauseCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.57061 17.1465L11.8912 12.7236C12.3062 12.4747 12.3062 11.9503 11.8912 11.7014L4.57061 7.22335C4.17315 6.99258 3.70958 7.19268 3.70958 7.60333L3.70958 16.7672C3.70958 17.1688 4.18018 17.3695 4.57061 17.1465ZM14.1605 16.8972L15.4524 16.8972C15.9385 16.8972 16.1658 16.6301 16.1658 16.2347L16.1658 8.15264C16.1658 7.75655 15.9385 7.49014 15.4524 7.49014L14.1605 7.49014C13.6842 7.49014 13.4478 7.75655 13.4478 8.15264L13.4478 16.2347C13.4478 16.6301 13.6842 16.8972 14.1605 16.8972ZM18.6549 16.8972L19.9476 16.8972C20.4225 16.8972 20.6596 16.6301 20.6596 16.2347L20.6596 8.15264C20.6596 7.75655 20.4225 7.49014 19.9476 7.49014L18.6549 7.49014C18.1793 7.49014 17.9604 7.75655 17.9604 8.15264L17.9604 16.2347C17.9604 16.6301 18.1793 16.8972 18.6549 16.8972Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
