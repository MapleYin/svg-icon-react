import React from 'react'

export function CapsuleLefthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.0296 22.4561' className={className}>
      <path
        d='M0 11.2231C0 18.1493 4.31133 22.4372 11.006 22.4372L19.6623 22.4372C26.3569 22.4372 30.6683 18.1493 30.6683 11.2231C30.6683 4.28721 26.3569 0 19.6623 0L11.006 0C4.31133 0 0 4.28721 0 11.2231ZM15.3345 21.925L15.3345 0.511533L19.6623 0.511533C26.2007 0.511533 30.1567 4.46231 30.1567 11.2231C30.1567 17.9742 26.2007 21.925 19.6623 21.925Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
