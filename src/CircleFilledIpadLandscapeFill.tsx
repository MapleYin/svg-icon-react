import React from 'react'

export default function CircleFilledIpadLandscapeFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 22.0158' className={className}>
      <path
        d='M29.054 3.24414L29.054 18.8282C29.054 20.8734 27.9473 22.0158 25.8721 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L25.8721 0.0565428C27.9473 0.0565428 29.054 1.19893 29.054 3.24414ZM8.28809 11.0212C8.28809 14.4669 11.0963 17.2556 14.5315 17.2556C17.957 17.2556 20.7659 14.4669 20.7659 11.0212C20.7659 7.58662 17.957 4.79727 14.5315 4.79727C11.0963 4.79727 8.28809 7.58662 8.28809 11.0212Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}