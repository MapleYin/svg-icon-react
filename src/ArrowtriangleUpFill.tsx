import React from 'react'

export default function ArrowtriangleUpFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9122 20.3346' className={className}>
      <path
        d='M19.5509 19.5395C19.5509 19.3083 19.4646 19.1565 19.3119 18.8317L10.6034 0.660356C10.3987 0.267774 10.15 0.0181639 9.7709 0.0181639C9.39248 0.0181639 9.14375 0.267774 8.94746 0.660356L0.23965 18.8317C0.086329 19.1481 0 19.309 0 19.5402C0 20.0175 0.335061 20.3262 0.941314 20.3262L18.6103 20.3346C19.2067 20.3346 19.5509 20.0168 19.5509 19.5395Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
