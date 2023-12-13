import React from 'react'

export function CreditcardCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.15449 10.5898L5.15449 15.5062C5.15449 16.5207 5.70821 17.0815 6.70391 17.0815L17.6178 17.0815C18.6226 17.0815 19.1763 16.5109 19.1763 15.5062L19.1763 10.5898ZM9.61495 13.6101L9.61495 14.7722C9.61495 15.1244 9.3708 15.3679 9.00879 15.3679L7.47491 15.3679C7.12334 15.3679 6.8876 15.1244 6.8876 14.7722L6.8876 13.6101C6.8876 13.2585 7.12334 13.0144 7.47491 13.0144L9.00879 13.0144C9.3708 13.0144 9.61495 13.2585 9.61495 13.6101ZM6.70391 7.25137C5.70821 7.25137 5.15449 7.80371 5.15449 8.82666L5.15449 9.24639L19.1763 9.24639L19.1763 8.82666C19.1763 7.82188 18.6226 7.25137 17.6178 7.25137Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
