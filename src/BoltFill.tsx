import React from 'react'

export default function BoltFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 15.8244 26.0199' className={className}>
      <path
        d='M0 14.6082C0 14.6635 0.0218773 14.7671 0.217485 14.7671L7.53008 14.7671L3.59571 25.3409C3.41123 25.8107 3.82862 25.9789 4.11671 25.6149L15.2861 11.566C15.39 11.4399 15.461 11.3334 15.461 11.2066C15.461 11.1423 15.4489 11.038 15.2533 11.038L7.93097 11.038L11.8751 0.473913C12.0596 0.00339987 11.6422-0.164767 11.3541 0.190803L0.175587 14.2397C0.0808597 14.3749 0 14.4723 0 14.6082Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
