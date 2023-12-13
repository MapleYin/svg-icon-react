import React from 'react'

export function SquareTophalfFilled({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 23.5059' className={className}>
      <path
        d='M0 18.7787C0 20.8539 1.14307 21.96 3.1876 21.96L18.7717 21.96C20.8169 21.96 21.96 20.8539 21.96 18.7787L21.96 3.18194C21.96 1.10742 20.8448 0 18.7717 0L3.1876 0C1.10537 0 0 1.10742 0 3.18194ZM0.511533 18.7487L0.511533 10.9849L21.4484 10.9849L21.4484 18.7487C21.4484 20.459 20.526 21.4484 18.7474 21.4484L3.2126 21.4484C1.43399 21.4484 0.511533 20.459 0.511533 18.7487Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
