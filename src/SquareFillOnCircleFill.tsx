import React from 'react'

export function SquareFillOnCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.0375 27.6531' className={className}>
      <path
        d='M19.0993 6.49804L10.8635 6.49804C8.29219 6.49804 6.78271 8.00615 6.78271 10.5761L6.78271 19.2073C2.83953 17.9276 0 14.2282 0 9.85293C0 4.40752 4.39844 0 9.84385 0C14.1091 0 17.7375 2.70403 19.0993 6.49804Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.8635 26.4254L23.5379 26.4254C25.6124 26.4254 26.7192 25.32 26.7192 23.2378L26.7192 10.5761C26.7192 8.49385 25.6124 7.38848 23.5379 7.38848L10.8635 7.38848C8.78829 7.38848 7.68223 8.49385 7.68223 10.5761L7.68223 23.2378C7.68223 25.32 8.78829 26.4254 10.8635 26.4254Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
