import React from 'react'

export default function ButtonAngledbottomHorizontalLeftFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.8142 20.7658' className={className}>
      <path
        d='M30.4528 11.8597L30.4528 4.15205C30.4528 2.20908 29.3987 1.11796 27.4181 1.11796L3.04317 1.11865C1.05342 1.11865 0 2.21953 0 4.17295L0 11.8597C0 14.7352 1.10244 16.2671 4.07491 17.1431L14.8546 20.3267C17.4986 21.112 18.9406 20.8254 21.3176 19.616L28.4444 16.0007C30.225 15.0947 30.4528 14.2414 30.4528 11.8597Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
