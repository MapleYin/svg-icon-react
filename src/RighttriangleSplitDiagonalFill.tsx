import React from 'react'

export function RighttriangleSplitDiagonalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.4323 22.8752' className={className}>
      <path
        d='M0.810748 21.4369L19.8207 21.4362C20.1836 21.4362 20.4822 21.3881 20.7125 21.3093L9.85283 10.4685L0.376858 19.9444C0.127442 20.1932 0 20.4321 0 20.7009C0 21.148 0.314846 21.4369 0.810748 21.4369ZM21.3184 20.69C21.3972 20.4675 21.4272 20.1759 21.4272 19.8291L21.4272 0.81983C21.4272 0.324612 21.1473 0 20.7002 0C20.4315 0 20.1932 0.128126 19.9347 0.386624L10.4657 9.85557Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
