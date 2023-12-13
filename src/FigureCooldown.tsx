import React from 'react'

export function FigureCooldown({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.4782 27.9654' className={className}>
      <path
        d='M4.54708 8.53536C5.92247 8.53536 7.02374 7.44385 7.02374 6.06709C7.02374 4.70078 5.92247 3.59951 4.54708 3.59951C3.18008 3.59951 2.07881 4.70078 2.07881 6.06709C2.07881 7.44385 3.18008 8.53536 4.54708 8.53536ZM11.0994 20.7251L14.6558 15.824L16.9051 19.9398C17.6709 23.4661 17.7504 26.1772 17.7504 26.5894C17.7504 27.2966 18.2993 27.8176 18.9291 27.8176C19.6057 27.8176 20.1169 27.2966 20.1169 26.6284C20.1169 26.4924 19.8181 23.4725 19.2039 19.2911L19.1733 19.0756C18.4594 14.2944 15.167 5.53994 7.36729 0.353613C6.96485 0.117188 6.63985 0 6.23672 0L1.17871 0C0.530078 0 0 0.530078 0 1.18779C0 1.85596 0.530078 2.37695 1.17871 2.37695L6.13975 2.37695C7.36729 3.22227 8.4379 4.1541 9.41085 5.1375C9.55665 5.26514 9.5671 5.4709 9.47852 5.6376L5.50088 12.4155C5.00987 13.2699 5.59922 14.2031 6.52198 14.2031L11.9447 14.2031L9.09561 19.4481L8.97774 19.6545L5.4709 26.0691C5.14727 26.6389 5.3628 27.3754 5.93262 27.6802C6.47315 27.9648 7.19082 27.8371 7.54444 27.1989ZM8.56553 11.8366L9.44014 10.3427C9.58731 10.0867 9.85303 10.1272 9.98907 10.3043L11.0018 11.8366Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
