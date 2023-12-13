import React from 'react'

export function PillFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.7482 23.4203' className={className}>
      <path
        d='M7.38116 7.74929L2.25265 12.8967C-0.501063 15.6413-0.76649 19.3111 1.65724 21.7551C4.07257 24.1879 7.7424 23.9224 10.5059 21.1499L15.6344 16.0025ZM21.7205 1.66315C19.3052-0.76058 15.6528-0.512632 12.8901 2.25924L7.74338 7.39684L15.9966 15.6591L21.1433 10.5125C23.8977 7.75807 24.1449 4.10641 21.7205 1.66315Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
