import React from 'react'

export default function ArrowDownLeftCircle({
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
        d='M7.73507 9.23907C7.59258 9.23907 7.48897 9.3461 7.48897 9.5172L7.48897 16.5603C7.48897 16.7039 7.58624 16.8125 7.72374 16.8125L14.7779 16.8125C14.9497 16.8125 15.054 16.7277 15.054 16.5853C15.054 16.4246 14.949 16.321 14.7766 16.321L10.0784 16.321L8.36056 16.3047L9.49445 15.1874L16.7305 7.95138C16.7868 7.89571 16.8216 7.83526 16.8216 7.72872C16.8216 7.57647 16.7173 7.47285 16.5657 7.47285C16.4474 7.47285 16.3876 7.51602 16.3319 7.56329L9.105 14.7895L8.01632 15.9221L7.99025 13.5911L7.99025 9.51583C7.99025 9.34405 7.88663 9.23907 7.73507 9.23907Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
