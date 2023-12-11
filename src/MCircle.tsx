import React from 'react'

export default function MCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.41494 17.7898C7.56788 17.7898 7.67921 17.6855 7.67921 17.5375L7.67921 7.3798L7.74054 7.3798L11.6906 17.4355C11.7749 17.6361 11.9303 17.7399 12.1413 17.7399C12.3796 17.7399 12.5266 17.6361 12.6199 17.4355L16.5707 7.3798L16.632 7.3798L16.632 17.5375C16.632 17.6939 16.7343 17.7898 16.8949 17.7898C17.0479 17.7898 17.1599 17.6855 17.1599 17.5375L17.1599 7.05938C17.1599 6.77178 16.9566 6.58867 16.6871 6.58867C16.4315 6.58867 16.2791 6.70498 16.1383 7.03955L12.172 17.0583L12.1127 17.0583L8.16388 7.03955C8.03145 6.70498 7.87061 6.58867 7.61504 6.58867C7.34492 6.58867 7.15137 6.77178 7.15137 7.05938L7.15137 17.5375C7.15137 17.6939 7.25361 17.7898 7.41494 17.7898Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}