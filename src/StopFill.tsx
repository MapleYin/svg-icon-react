import React from 'react'

export function StopFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.406 19.0649' className={className}>
      <path
        d='M0 16.9808C0 18.2776 0.759963 19.0453 2.05821 19.0453L16.9864 19.0453C18.2763 19.0453 19.0446 18.2776 19.0446 16.9808L19.0446 2.06456C19.0446 0.767677 18.2763 0 16.9864 0L2.05821 0C0.759963 0 0 0.767677 0 2.06456Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
