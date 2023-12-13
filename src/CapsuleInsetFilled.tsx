import React from 'react'

export function CapsuleInsetFilled({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.0296 22.4561' className={className}>
      <path
        d='M0 11.2231C0 18.1493 4.31133 22.4372 11.006 22.4372L19.6623 22.4372C26.3569 22.4372 30.6683 18.1493 30.6683 11.2231C30.6683 4.28721 26.3569 0 19.6623 0L11.006 0C4.31133 0 0 4.28721 0 11.2231ZM0.511533 11.2231C0.511533 4.46231 4.46759 0.511533 11.006 0.511533L19.6623 0.511533C26.2007 0.511533 30.1567 4.46231 30.1567 11.2231C30.1567 17.9742 26.2007 21.925 19.6623 21.925L11.006 21.925C4.46759 21.925 0.511533 17.9742 0.511533 11.2231Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.40197 11.2231C1.40197 4.83644 4.84669 1.41037 11.006 1.41037L19.6623 1.41037C25.8216 1.41037 29.2663 4.83644 29.2663 11.2231C29.2663 17.6099 25.8216 21.0352 19.6623 21.0352L11.006 21.0352C4.84669 21.0352 1.40197 17.6099 1.40197 11.2231Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
