import React from 'react'

export function N10Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.84893 17.3771C9.01524 17.3771 9.16768 17.2246 9.16768 17.0388L9.16768 7.31563C9.16768 7.14043 9.01592 6.98096 8.83096 6.98096C8.63535 6.98096 8.48223 7.07071 8.35478 7.19473L6.50781 8.7292C6.42148 8.80371 6.39307 8.86348 6.39307 8.97413C6.39307 9.13497 6.49053 9.26104 6.65977 9.26104C6.74473 9.26104 6.78858 9.2297 6.85127 9.18721L8.51973 7.83624L8.51973 17.0388C8.51973 17.2246 8.67217 17.3771 8.84893 17.3771ZM13.9159 17.4488C16.1771 17.4488 16.6525 14.2857 16.6525 12.1706C16.6525 10.0464 16.1771 6.8833 13.9159 6.8833C11.6541 6.8833 11.1787 10.0464 11.1787 12.1706C11.1787 14.2857 11.6541 17.4488 13.9159 17.4488ZM13.9159 16.857C12.116 16.857 11.8364 13.8972 11.8364 12.1706C11.8364 10.4343 12.116 7.47511 13.9159 7.47511C15.7242 7.47511 16.0038 10.4343 16.0038 12.1706C16.0038 13.8972 15.7242 16.857 13.9159 16.857Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
