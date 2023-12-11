import React from 'react'

export default function BubbleLeftCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.34307 19.3999C8.44054 19.3999 8.53253 19.3567 8.61319 19.2949L11.0716 17.1987L16.8925 17.1987C18.3136 17.1987 19.2824 16.2383 19.2824 14.8081L19.2824 8.80001C19.2824 7.3712 18.3136 6.42823 16.8925 6.42823L7.43829 6.42823C6.00811 6.42823 5.04835 7.35235 5.04835 8.80001L5.04835 14.8081C5.04835 16.2564 6.00811 17.1987 7.43829 17.1987L8.10977 17.1987L8.10977 19.1618C8.10977 19.3213 8.2129 19.3999 8.34307 19.3999Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
