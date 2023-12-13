import React from 'react'

export function PlusminusCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM8.45606 17.1267C8.30791 17.1267 8.19248 17.2428 8.19248 17.3902C8.19248 17.5357 8.30791 17.6538 8.45606 17.6538L15.8488 17.6538C15.9977 17.6538 16.1131 17.5357 16.1131 17.3902C16.1131 17.2428 15.9977 17.1267 15.8488 17.1267ZM11.8986 5.77237L11.8986 9.21563L8.45538 9.21563C8.30791 9.21563 8.19248 9.33106 8.19248 9.47852C8.19248 9.62667 8.30791 9.74278 8.45538 9.74278L11.8986 9.74278L11.8986 13.1672C11.8986 13.314 12.0147 13.4489 12.1622 13.4301C12.3104 13.4301 12.4265 13.3328 12.4265 13.1672L12.4265 9.74278L15.8495 9.74278C15.9977 9.74278 16.1131 9.62667 16.1131 9.47852C16.1131 9.33106 15.9977 9.21563 15.8495 9.21563L12.4265 9.21563L12.4265 5.77237C12.4265 5.62422 12.2915 5.50879 12.1622 5.50879C12.0147 5.52764 11.8986 5.64307 11.8986 5.77237Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
