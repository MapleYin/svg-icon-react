import React from 'react'

export default function IpodshuffleGen3({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11.5332 24.2785' className={className}>
      <path
        d='M2.93047 24.2778L8.24142 24.2778C10.2034 24.2778 11.1719 23.2933 11.1719 21.3186L11.1719 2.95928C11.1719 0.984572 10.2034 0 8.24142 0L2.93047 0C0.968459 0 0 0.984572 0 2.95928L0 21.3186C0 23.2933 0.968459 24.2778 2.93047 24.2778ZM2.94551 23.7754C1.2462 23.7754 0.511533 23.0512 0.511533 21.3462L0.511533 2.93164C0.511533 1.22667 1.2462 0.511533 2.94551 0.511533L8.22706 0.511533C9.92569 0.511533 10.6604 1.22667 10.6604 2.93164L10.6604 21.3462C10.6604 23.0512 9.92569 23.7754 8.22706 23.7754Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}