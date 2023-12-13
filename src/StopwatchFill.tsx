import React from 'react'

export function StopwatchFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 30.277' className={className}>
      <path
        d='M12.1608 27.2944C18.8604 27.2944 24.3315 21.8233 24.3315 15.1336C24.3315 8.43408 18.8597 2.96299 12.1602 2.96299C5.47041 2.96299 0 8.43408 0 15.1336C0 21.8233 5.4711 27.2944 12.1608 27.2944ZM12.1608 16.3645C11.4974 16.3645 10.9858 15.8334 10.9858 15.1434C10.9858 14.6562 11.2884 14.2491 11.9168 13.98L11.9168 5.92462C11.9168 5.77716 12.0315 5.67286 12.1602 5.67286C12.3265 5.67286 12.4496 5.77716 12.4496 5.92462L12.4496 14.017C13.0703 14.2854 13.3442 14.6743 13.3442 15.1434C13.3442 15.8516 12.8327 16.3645 12.1608 16.3645ZM11.6967 3.55439L12.6334 3.55439L12.6334 0.484381C12.6334 0.210842 12.4428 0 12.1602 0C11.8789 0 11.6967 0.210842 11.6967 0.484381ZM20.2247 6.7915L20.8922 7.48194L23.1547 5.20899C23.2633 5.09132 23.319 4.97725 23.319 4.82891C23.319 4.59512 23.1115 4.38769 22.8484 4.38769C22.7142 4.38769 22.6042 4.43154 22.4858 4.54014Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
