import React from 'react'

export default function CircleGrid_2x1LeftFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.7514 13.2041' className={className}>
      <path
        d='M22.8487 13.1853C26.3931 13.1853 29.3901 10.1701 29.3901 6.59717C29.3901 3.01582 26.3931 0 22.8487 0C19.2011 0 16.2327 3.01582 16.2327 6.59717C16.2327 10.1701 19.2011 13.1853 22.8487 13.1853ZM22.8487 12.6737C19.514 12.6737 16.7449 9.92285 16.7449 6.59717C16.7449 3.26241 19.514 0.511533 22.8487 0.511533C26.1081 0.511533 28.8785 3.29171 28.8785 6.59717C28.8785 9.89424 26.1081 12.6737 22.8487 12.6737Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.61534 13.1853C10.1604 13.1853 13.1573 10.1701 13.1573 6.59717C13.1573 3.01582 10.1604 0 6.61534 0C2.96836 0 0 3.01582 0 6.59717C0 10.1701 2.96836 13.1853 6.61534 13.1853Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
