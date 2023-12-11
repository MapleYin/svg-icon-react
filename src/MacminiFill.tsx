import React from 'react'

export default function MacminiFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.0146 12.8922' className={className}>
      <path
        d='M24.3612 9.37618C23.6381 9.39571 23.0049 8.76182 23.0049 8.03868C23.0049 7.296 23.6381 6.68164 24.3612 6.68164C25.0844 6.68164 25.7071 7.296 25.7071 8.03868C25.7071 8.76182 25.0844 9.35665 24.3612 9.37618ZM3.18125 12.884L26.472 12.884C28.5465 12.884 29.6532 11.7409 29.6532 9.70548L29.6532 3.1876C29.6532 1.14307 28.5465 0 26.472 0L3.18125 0C1.10606 0 0 1.10606 0 3.1876L0 9.70548C0 11.7786 1.10606 12.884 3.18125 12.884Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
