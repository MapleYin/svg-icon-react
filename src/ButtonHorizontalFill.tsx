import React from 'react'

export default function ButtonHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M8.28273 20.8495L19.2236 20.8495C25.7084 20.8495 27.5064 18.3924 27.5064 12.5194L27.5064 8.321C27.5064 2.44805 25.7084 0 19.2236 0L8.28273 0C1.78887 0 0 2.44805 0 8.321L0 12.5194C0 18.3924 1.78887 20.8495 8.28273 20.8495Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
