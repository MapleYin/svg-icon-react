import React from 'react'

export default function LbCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM13.1845 7.35635C13.0043 7.35635 12.9034 7.48086 12.9034 7.66807L12.9034 16.685C12.9034 16.8645 13.005 17.0148 13.1845 17.0148L15.4434 17.0148C17.0525 17.0148 17.9766 15.9722 17.9766 14.4231C17.9766 13.2121 17.3727 12.1456 16.2008 11.9914L16.2008 11.951C17.0461 11.7577 17.6082 10.74 17.6082 9.70831C17.6082 8.39307 16.8015 7.35635 15.4016 7.35635ZM7.22148 7.51817L7.22148 16.6661C7.22148 16.8651 7.35937 16.996 7.5207 16.996L11.2221 16.996C11.3654 16.996 11.4956 16.8658 11.4956 16.7043C11.4956 16.5609 11.3654 16.4217 11.2221 16.4217L7.84014 16.4217L7.84014 7.51817C7.84014 7.36094 7.6961 7.21826 7.54024 7.21826C7.36484 7.21826 7.22148 7.36094 7.22148 7.51817ZM17.3656 14.3869C17.3656 15.6596 16.6378 16.4396 15.3658 16.4396L13.4837 16.4396L13.4837 12.3272L15.2618 12.3272C16.5842 12.3272 17.3656 13.0822 17.3656 14.3869ZM16.9846 9.77012C16.9846 10.9549 16.328 11.7504 15.1433 11.7504L13.4837 11.7504L13.4837 7.92315L15.2807 7.92315C16.383 7.92315 16.9846 8.65645 16.9846 9.77012Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}