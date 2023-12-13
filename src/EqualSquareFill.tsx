import React from 'react'

export function EqualSquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM5.58594 12.9442C5.43594 12.9442 5.32686 13.0556 5.32686 13.1951C5.32686 13.3431 5.43731 13.4544 5.58594 13.4544L16.3643 13.4544C16.5129 13.4544 16.6317 13.3431 16.6317 13.1951C16.6317 13.0556 16.5143 12.9442 16.3643 12.9442ZM5.58594 8.57187C5.43594 8.57187 5.32686 8.6832 5.32686 8.83252C5.32686 8.98047 5.43731 9.09112 5.58594 9.09112L16.3643 9.09112C16.5129 9.09112 16.6317 8.98047 16.6317 8.83252C16.6317 8.6832 16.5143 8.57187 16.3643 8.57187Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
