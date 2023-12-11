import React from 'react'

export default function RectangleSplit_2x2Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 21.9795' className={className}>
      <path
        d='M0 11.2553L0 10.7437L14.2709 10.7437L14.2709 0.0195312L14.7824 0.0195312L14.7824 10.7437L29.054 10.7437L29.054 11.2553L14.7824 11.2553L14.7824 21.9795L14.2709 21.9795L14.2709 11.2553ZM3.18125 21.9795L25.8721 21.9795C27.9473 21.9795 29.054 20.8364 29.054 18.7912L29.054 3.20713C29.054 1.1626 27.9473 0.0195312 25.8721 0.0195312L3.18125 0.0195312C1.10674 0.0195312 0 1.1249 0 3.20713L0 18.7912C0 20.8644 1.10674 21.9795 3.18125 21.9795Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
