import React from 'react'

export function Line_3Horizontal({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.92 12.9758' className={className}>
      <path
        d='M0.257231 12.9758L24.3008 12.9758C24.4419 12.9758 24.5587 12.8597 24.5587 12.7179C24.5587 12.5774 24.4419 12.4613 24.3008 12.4613L0.257231 12.4613C0.116115 12.4613 0 12.5774 0 12.7179C0 12.8597 0.116115 12.9758 0.257231 12.9758Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.257231 6.80586L24.3008 6.80586C24.4419 6.80586 24.5587 6.68975 24.5587 6.54863C24.5587 6.40752 24.4419 6.2914 24.3008 6.2914L0.257231 6.2914C0.116115 6.2914 0 6.40752 0 6.54863C0 6.68975 0.116115 6.80586 0.257231 6.80586Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.257231 0.635262L24.3008 0.635262C24.4419 0.635262 24.5587 0.519147 24.5587 0.378715C24.5587 0.237599 24.4419 0.112402 24.3008 0.112402L0.257231 0.112402C0.116115 0.112402 0 0.237599 0 0.378715C0 0.519147 0.116115 0.635262 0.257231 0.635262Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
