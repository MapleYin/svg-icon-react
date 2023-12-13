import React from 'react'

export function N1CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.1652 6.66231L9.40733 8.4378C9.29033 8.50459 9.25557 8.58955 9.25557 8.70088C9.25557 8.85264 9.38438 8.97511 9.53682 8.97511C9.58545 8.97511 9.6209 8.96397 9.64708 8.94395L12.3122 7.24122L12.3722 7.24122L12.3722 17.5764C12.3722 17.7109 12.4953 17.8277 12.6426 17.8277C12.8101 17.8277 12.915 17.7109 12.915 17.5764L12.915 6.7921C12.915 6.62051 12.7535 6.5044 12.5756 6.5044C12.4463 6.5044 12.335 6.54824 12.1652 6.66231Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
