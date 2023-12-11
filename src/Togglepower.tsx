import React from 'react'

export default function Togglepower({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1608 20.9723C12.297 20.9723 12.4215 20.8555 12.4215 20.7186L12.4215 3.53038C12.4215 3.3922 12.297 3.2754 12.1608 3.2754C12.0254 3.2754 11.91 3.3922 11.91 3.53038L11.91 20.7186C11.91 20.8555 12.0254 20.9723 12.1608 20.9723Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}