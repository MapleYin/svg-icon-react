import React from 'react'

export function ButtonAngledbottomHorizontalRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.8142 20.7658' className={className}>
      <path
        d='M0 11.8597C0 14.2414 0.218751 15.0947 2 16.0007L9.13526 19.616C11.5129 20.8254 12.9549 21.112 15.5983 20.3267L26.3786 17.1431C29.3511 16.2671 30.4528 14.7352 30.4528 11.8597L30.4528 4.17295C30.4528 2.21953 29.3994 1.11865 27.4104 1.11865L3.03545 1.11796C1.0541 1.11796 0 2.20908 0 4.15205Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
