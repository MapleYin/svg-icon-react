import React from 'react'

export default function Move_3d({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1431 23.3686' className={className}>
      <path
        d='M3.93152 19.2607L4.18309 19.6915L12.8909 15.3272L21.5994 19.6915L21.8594 19.2607L13.1516 14.9333L13.1516 4.60237L12.64 4.60237L12.64 14.9333ZM0.128986 21.0471C-0.168085 21.6551 0.052228 22.0798 0.746077 22.1223L5.70321 22.4771C6.28427 22.5125 6.71083 22.0203 6.45458 21.5739L3.45878 16.404C3.17596 15.9213 2.56883 16.0537 2.31238 16.5741ZM25.6535 21.0471L23.4785 16.5741C23.2221 16.0537 22.6058 15.9213 22.3328 16.404L19.3363 21.5739C19.0807 22.0203 19.5066 22.5125 20.0793 22.4771L25.0448 22.1223C25.7387 22.0798 25.9499 21.6551 25.6535 21.0471ZM12.2634 0.424146L9.48123 4.55071C9.15594 5.02727 9.3574 5.63509 9.8951 5.63509L15.8763 5.63509C16.4258 5.63509 16.6161 5.03772 16.2908 4.55071L13.508 0.424146C13.128-0.140698 12.6615-0.142066 12.2634 0.424146Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
