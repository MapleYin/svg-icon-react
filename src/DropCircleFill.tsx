import React from 'react'

export function DropCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.5701 5.92266C10.5461 7.47403 9.59629 9.10245 8.8834 10.6629C8.17989 12.1306 7.76221 13.4848 7.76221 14.507C7.76221 17.0949 9.52276 18.8046 12.1608 18.8046C14.7989 18.8046 16.5602 17.0949 16.5602 14.507C16.5602 13.4848 16.1418 12.1306 15.4383 10.6629C14.7261 9.10245 13.7854 7.47403 12.7516 5.92266C12.5933 5.66602 12.4336 5.55723 12.1608 5.55723C11.8881 5.55723 11.7291 5.66602 11.5701 5.92266Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
