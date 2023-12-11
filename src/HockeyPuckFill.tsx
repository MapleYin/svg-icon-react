import React from 'react'

export default function HockeyPuckFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.719 16.3713' className={className}>
      <path
        d='M11.66 9.81417C18.2069 9.81417 23.3576 7.62022 23.3576 4.8335C23.3576 2.13535 18.2069 0 11.66 0C5.13116 0 0 2.13535 0 4.8335C0 7.62022 5.13116 9.81417 11.66 9.81417ZM11.66 16.3609C18.4492 16.3609 23.3576 13.5315 23.3576 10.0975L23.3576 7.11964C21.4757 9.33195 16.901 10.7046 11.66 10.7046C6.42032 10.7046 1.87354 9.33263 0 7.11964L0 10.0975C0 13.5315 4.87002 16.3609 11.66 16.3609Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
