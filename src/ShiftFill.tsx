import React from 'react'

export function ShiftFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0189 22.7529' className={className}>
      <path
        d='M8.68184 22.3844L17.9848 22.3844C18.9604 22.3844 19.6583 21.7089 19.6583 20.7206L19.6583 13.9984L25.8531 13.9984C26.354 13.9984 26.6575 13.7052 26.6575 13.2545C26.6575 12.9717 26.5301 12.7348 26.2736 12.4783L14.5738 0.733789C13.9284 0.0799817 13.642 0 13.3333 0C13.0155 0 12.7291 0.0799817 12.0844 0.733789L0.383889 12.4783C0.135157 12.7277 0 12.9717 0 13.2545C0 13.7052 0.313284 13.9984 0.813483 13.9984L6.99922 13.9984L6.99922 20.7206C6.99922 21.7089 7.70693 22.3844 8.68184 22.3844Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
