import React from 'react'

export function Minus({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9462 0.544738' className={className}>
      <path
        d='M0.248638 0.544738L19.3362 0.544738C19.4724 0.544738 19.5849 0.432235 19.5849 0.296099C19.5849 0.15928 19.4724 0.0565428 19.3362 0.0565428L0.248638 0.0565428C0.112503 0.0565428 0 0.15928 0 0.296099C0 0.432235 0.112503 0.544738 0.248638 0.544738Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
