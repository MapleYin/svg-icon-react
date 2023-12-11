import React from 'react'

export default function ButtonHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.8677 20.86' className={className}>
      <path
        d='M8.28273 20.8495L19.2236 20.8495C25.7084 20.8495 27.5064 18.3924 27.5064 12.5194L27.5064 8.321C27.5064 2.44805 25.7084 0 19.2236 0L8.28273 0C1.78887 0 0 2.44805 0 8.321L0 12.5194C0 18.3924 1.78887 20.8495 8.28273 20.8495ZM8.28273 20.338C2.12384 20.338 0.511533 18.0538 0.511533 12.5194L0.511533 8.321C0.511533 2.78663 2.12384 0.503135 8.28273 0.503135L19.2236 0.503135C25.3825 0.503135 26.9948 2.78663 26.9948 8.321L26.9948 12.5194C26.9948 18.0538 25.3825 20.338 19.2236 20.338Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
