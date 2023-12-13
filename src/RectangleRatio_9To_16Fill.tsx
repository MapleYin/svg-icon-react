import React from 'react'

export function RectangleRatio_9To_16Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.2744 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L10.7318 22.0158C12.807 22.0158 13.9131 20.8734 13.9131 18.8282L13.9131 3.24414C13.9131 1.19893 12.807 0.0565428 10.7318 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
