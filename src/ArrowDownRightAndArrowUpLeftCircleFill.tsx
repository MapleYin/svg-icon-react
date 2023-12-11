import React from 'react'

export default function ArrowDownRightAndArrowUpLeftCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.9953 12.7319C12.8648 12.7319 12.7501 12.8503 12.7501 12.9862L12.7501 17.0293C12.7501 17.1697 12.8655 17.2943 13.0144 17.2943C13.1541 17.2943 13.2786 17.1697 13.2786 17.0293L13.2786 15.9622L13.2711 13.5797L17.442 17.814C17.5651 17.9287 17.7292 17.9287 17.8342 17.8056C17.9392 17.7006 17.9469 17.5365 17.8426 17.4315L13.6097 13.262L15.7765 13.2416L17.0559 13.2605C17.2047 13.2605 17.3201 13.145 17.3201 12.9962C17.3201 12.8564 17.2047 12.7319 17.0559 12.7319ZM6.48818 6.4707C6.38252 6.575 6.38388 6.74883 6.48887 6.85313L10.7127 11.0233L8.54521 11.034L7.26582 11.0158C7.12607 11.0158 7.00156 11.1403 7.00156 11.2885C7.00156 11.4289 7.12607 11.5443 7.26582 11.5443L11.3264 11.5443C11.4568 11.5443 11.5807 11.4344 11.5807 11.2984L11.5807 7.25537C11.5807 7.11562 11.4562 6.99111 11.3164 6.99111C11.1683 6.99111 11.0521 7.11562 11.0521 7.25537L11.0521 8.32246L11.0506 10.6966L6.88877 6.47139C6.76563 6.35664 6.59248 6.35664 6.48818 6.4707Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
