import React from 'react'

export function Circlebadge({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.6582 19.3262' className={className}>
      <path
        d='M9.64844 19.3066C14.9121 19.3066 19.2969 14.9121 19.2969 9.6582C19.2969 4.39453 14.9121 0 9.63867 0C4.375 0 0 4.39453 0 9.6582C0 14.9121 4.39453 19.3066 9.64844 19.3066ZM9.64844 18.8071C4.66475 18.8071 0.499522 14.6426 0.499522 9.6582C0.499522 4.67383 4.64522 0.500206 9.63867 0.500206C14.6335 0.500206 18.7974 4.67383 18.7974 9.6582C18.7974 14.6419 14.6335 18.8071 9.64844 18.8071Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
