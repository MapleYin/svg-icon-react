import React from 'react'

export default function CapsuleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.0296 22.4561' className={className}>
      <path
        d='M0 11.2231C0 18.1493 4.31133 22.4372 11.006 22.4372L19.6623 22.4372C26.3569 22.4372 30.6683 18.1493 30.6683 11.2231C30.6683 4.28721 26.3569 0 19.6623 0L11.006 0C4.31133 0 0 4.28721 0 11.2231Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
