import React from 'react'

export default function Macmini({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.0146 12.8922' className={className}>
      <path
        d='M24.3612 9.38253C25.0921 9.363 25.7044 8.76046 25.7044 8.03868C25.7044 7.28829 25.0921 6.6753 24.3612 6.6753C23.6395 6.6753 22.9985 7.28829 22.9985 8.03868C22.9985 8.76046 23.6395 9.39298 24.3612 9.38253ZM3.18125 12.884L26.472 12.884C28.5465 12.884 29.6532 11.7409 29.6532 9.70548L29.6532 3.1876C29.6532 1.14307 28.5465 0 26.472 0L3.18125 0C1.10606 0 0 1.10606 0 3.1876L0 9.70548C0 11.7786 1.10606 12.884 3.18125 12.884ZM3.21124 12.3725C1.42628 12.3725 0.511533 11.45 0.511533 9.67139L0.511533 3.2126C0.511533 1.43399 1.42628 0.511533 3.21124 0.511533L26.4329 0.511533C28.1522 0.511533 29.1417 1.43399 29.1417 3.2126L29.1417 9.67139C29.1417 11.45 28.1522 12.3725 26.4329 12.3725Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
