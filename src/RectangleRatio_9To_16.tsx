import React from 'react'

export function RectangleRatio_9To_16({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14.2744 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L10.7318 22.0158C12.807 22.0158 13.9131 20.8734 13.9131 18.8282L13.9131 3.24414C13.9131 1.19893 12.807 0.0565428 10.7318 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L10.7025 0.568076C12.4121 0.568076 13.4016 1.49054 13.4016 3.26846L13.4016 18.8039C13.4016 20.5818 12.4121 21.5043 10.7025 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
