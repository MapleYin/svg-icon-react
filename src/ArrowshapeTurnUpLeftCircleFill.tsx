import React from 'react'

export function ArrowshapeTurnUpLeftCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM10.4831 5.33379L4.75323 10.6374C4.36036 11.0017 4.30948 11.1913 4.30948 11.3803C4.30948 11.5692 4.36944 11.7498 4.75323 12.1141L10.4831 17.4197C10.5938 17.529 10.7562 17.6385 10.9513 17.6385C11.2266 17.6385 11.3483 17.4252 11.3483 17.1688L11.3483 13.9685L11.7001 13.9685C15.2523 13.9685 17.2931 14.9649 18.2833 17.2501C18.4066 17.524 18.4991 17.6385 18.7097 17.6385C18.9418 17.6385 19.1188 17.4552 19.1188 17.1808C19.1188 11.2039 16.0373 8.85772 11.7001 8.85772L11.3483 8.85772L11.3483 5.58477C11.3483 5.32833 11.2266 5.12207 10.9597 5.12207C10.7646 5.12207 10.5867 5.22246 10.4831 5.33379Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
