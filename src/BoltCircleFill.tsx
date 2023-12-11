import React from 'react'

export default function BoltCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM14.106 3.52442L6.60899 12.9391C6.49952 13.1051 6.45 13.2075 6.45 13.2995C6.45 13.4751 6.58379 13.581 6.77823 13.581L11.4312 13.581L8.89395 20.4238C8.69112 20.9319 9.20333 21.2059 9.54698 20.7904L17.0349 11.3758C17.1527 11.2098 17.1939 11.1073 17.1939 11.0153C17.1939 10.8398 17.0594 10.7339 16.8656 10.7339L12.2127 10.7339L14.7499 3.88194C14.9527 3.38291 14.4405 3.10899 14.106 3.52442Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
