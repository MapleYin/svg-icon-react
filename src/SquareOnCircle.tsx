import React from 'react'

export default function SquareOnCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.0375 27.6531' className={className}>
      <path
        d='M19.3741 7.38848L18.8474 7.38848C17.8037 3.38213 14.2271 0.523544 9.84385 0.523544C4.60186 0.523544 0.514462 4.61094 0.514462 9.85293C0.514462 14.3467 3.51836 17.9854 7.68223 18.9238L7.68223 19.4522C3.27887 18.4756 0 14.5545 0 9.85293C0 4.40752 4.39844 0 9.84385 0C14.4365 0 18.2908 3.13513 19.3741 7.38848Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.8635 26.4254L23.5379 26.4254C25.6124 26.4254 26.7192 25.32 26.7192 23.2378L26.7192 10.5761C26.7192 8.49385 25.6124 7.38848 23.5379 7.38848L10.8635 7.38848C8.78829 7.38848 7.68223 8.49385 7.68223 10.5761L7.68223 23.2378C7.68223 25.32 8.78829 26.4254 10.8635 26.4254ZM10.8928 25.9139C9.10851 25.9139 8.19376 24.9914 8.19376 23.2128L8.19376 10.6004C8.19376 8.82247 9.10851 7.90001 10.8928 7.90001L23.5079 7.90001C25.2838 7.90001 26.2076 8.82247 26.2076 10.6004L26.2076 23.2128C26.2076 24.9914 25.2838 25.9139 23.5079 25.9139Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}