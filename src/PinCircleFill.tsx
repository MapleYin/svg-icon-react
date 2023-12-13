import React from 'react'

export function PinCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM9.02373 5.45928C8.70303 5.45928 8.48272 5.6419 8.48272 5.92286C8.48272 6.09161 8.61738 6.3169 8.81133 6.56104C9.21875 7.08291 9.99023 7.64229 10.5136 7.99502L10.2897 11.4379C8.47051 12.0279 7.27481 13.4753 7.27481 15.0366C7.27481 15.3823 7.53555 15.5963 7.92735 15.5963L11.8301 15.5963L11.8301 18.915C11.8301 19.5572 12.0277 20.1676 12.1434 20.1676C12.2583 20.1676 12.4748 19.5572 12.4748 18.915L12.4748 15.5963L16.3587 15.5963C16.7693 15.5963 17.0301 15.3823 17.0301 15.0366C17.0301 13.4753 15.8337 12.0279 14.0152 11.4379L13.7913 7.99502C14.3517 7.62344 15.1608 7.02774 15.5676 6.48633C15.7245 6.28897 15.8222 6.08184 15.8222 5.92286C15.8222 5.6419 15.6207 5.45928 15.2805 5.45928Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
