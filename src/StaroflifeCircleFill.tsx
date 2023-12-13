import React from 'react'

export function StaroflifeCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM12.1043 6.02969C11.435 6.02969 11.2705 6.19346 11.2705 6.83213L11.2705 10.6046L7.9793 8.74072C7.38037 8.35576 7.17344 8.39824 6.86523 9.05235L6.81641 9.13115C6.51728 9.72032 6.57793 9.94473 7.14551 10.2439L10.5092 12.0848L7.12598 14.0533C6.55908 14.3636 6.49775 14.588 6.82686 15.1856L6.86523 15.2351C7.17549 15.8606 7.38242 15.9219 7.97793 15.5369L11.2705 13.6737L11.2705 17.4455C11.2705 18.1037 11.435 18.2675 12.1043 18.2675L12.2013 18.2675C12.8783 18.2675 13.0428 18.1037 13.0428 17.4455L13.0428 13.6737L16.3354 15.5369C16.9329 15.9233 17.1392 15.8612 17.4481 15.2351L17.4871 15.1856C17.7953 14.5873 17.7347 14.3811 17.1873 14.0533L13.8041 12.0848L17.1678 10.2439C17.7354 9.92657 17.7967 9.70147 17.4969 9.13115L17.4481 9.05235C17.1587 8.43457 16.9427 8.38232 16.334 8.74072L13.0428 10.6046L13.0428 6.83213C13.0428 6.19346 12.8783 6.02969 12.2013 6.02969Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
