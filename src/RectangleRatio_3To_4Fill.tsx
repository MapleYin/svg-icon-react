import React from 'react'

export default function RectangleRatio_3To_4Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.8341 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L13.2908 22.0158C15.3569 22.0158 16.4728 20.8734 16.4728 18.8282L16.4728 3.24414C16.4728 1.19893 15.3569 0.0565428 13.2908 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
