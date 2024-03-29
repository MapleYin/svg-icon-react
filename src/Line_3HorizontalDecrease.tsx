import React from 'react'

export function Line_3HorizontalDecrease({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.92 12.6715' className={className}>
      <path
        d='M6.80244 12.661L17.7506 12.661C17.884 12.661 18.0015 12.5436 18.0015 12.4011C18.0015 12.267 17.884 12.1495 17.7506 12.1495L6.80244 12.1495C6.65995 12.1495 6.55155 12.267 6.55155 12.4011C6.55155 12.5436 6.65995 12.661 6.80244 12.661Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.52383 6.58175L21.0292 6.58175C21.1626 6.58175 21.2801 6.46427 21.2801 6.33087C21.2801 6.1877 21.1626 6.07022 21.0292 6.07022L3.52383 6.07022C3.39043 6.07022 3.27295 6.1877 3.27295 6.33087C3.27295 6.46427 3.39043 6.58175 3.52383 6.58175Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.251567 0.511533L24.3071 0.511533C24.4412 0.511533 24.5587 0.39405 24.5587 0.250884C24.5587 0.108401 24.4412 0 24.3071 0L0.251567 0C0.117483 0 0 0.108401 0 0.250884C0 0.39405 0.117483 0.511533 0.251567 0.511533Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
