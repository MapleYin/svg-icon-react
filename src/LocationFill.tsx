import React from 'react'

export default function LocationFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3815 23.5061' className={className}>
      <path
        d='M0.596756 11.7206L11.6733 11.7324C11.7576 11.7324 11.8253 11.8008 11.8253 11.8851L11.8364 22.8933C11.8364 23.6445 12.7297 23.6698 12.9807 23.1608L23.3923 1.16135C23.7809 0.34718 23.1276-0.117863 22.4377 0.214269L0.412475 10.5636C-0.259503 10.8818-0.0475886 11.7199 0.596756 11.7206Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
