import React from 'react'

export default function ArrowshapeUpCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM11.4089 4.73145L5.96993 10.5939C5.86065 10.7234 5.75049 10.8677 5.75049 11.0628C5.75049 11.3569 5.96309 11.4969 6.23975 11.4969L9.58926 11.4969L9.58926 18.1119C9.58926 18.9809 10.0278 19.4292 10.8675 19.4292L13.3711 19.4292C14.2107 19.4292 14.6402 18.9809 14.6402 18.1119L14.6402 11.4969L18.089 11.4969C18.3643 11.4969 18.5712 11.3569 18.5712 11.0705C18.5712 10.8761 18.4617 10.7164 18.3581 10.5939L12.9142 4.73145C12.5395 4.33858 12.3498 4.2877 12.1608 4.2877C11.9726 4.2877 11.7829 4.33858 11.4089 4.73145Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
