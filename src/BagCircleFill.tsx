import React from 'react'

export default function BagCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM9.73594 7.26602L8.21124 7.26602C7.08018 7.26602 6.47696 7.85743 6.47696 8.98712L6.47696 16.3033C6.47696 17.4226 7.08018 18.0244 8.21124 18.0244L16.0864 18.0244C17.2422 18.0244 17.8447 17.4037 17.8447 16.3033L17.8447 8.98712C17.8447 7.88536 17.2415 7.26602 16.1111 7.26602L14.5857 7.26602C14.5753 6.13428 13.722 4.99737 12.1608 4.99737C10.5997 4.99737 9.74707 6.13428 9.73594 7.26602ZM14.0991 7.26602L10.2316 7.26602C10.2428 6.13848 10.9663 5.46173 12.1608 5.46173C13.3645 5.46173 14.0796 6.13848 14.0991 7.26602Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}