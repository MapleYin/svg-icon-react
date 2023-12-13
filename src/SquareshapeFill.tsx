import React from 'react'

export function SquareshapeFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M0 21.4891C0 21.8187 0.188771 22.0158 0.517679 22.0158L21.4423 22.0158C21.7712 22.0158 21.96 21.8187 21.96 21.4891L21.96 0.574222C21.96 0.24463 21.7712 0.0565428 21.4423 0.0565428L0.517679 0.0565428C0.188771 0.0565428 0 0.24463 0 0.574222Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
