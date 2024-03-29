import React from 'react'

export function PlaceholdertextFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.4453 23.2129' className={className}>
      <path
        d='M4.72656 0C1.70898 0 0 1.5918 0 4.61914L0 18.5645C0 21.6016 1.70898 23.2129 4.72656 23.2129L11.3867 23.2129C14.4141 23.2129 16.084 21.6016 16.084 18.5645L16.084 4.61914C16.084 1.5918 14.4141 0 11.3867 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
