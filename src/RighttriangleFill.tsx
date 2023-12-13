import React from 'react'

export function RighttriangleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.4323 22.8752' className={className}>
      <path
        d='M0.810748 21.4362L19.8207 21.4362C21.0013 21.4362 21.4272 21.0104 21.4272 19.8291L21.4272 0.81983C21.4272 0.324612 21.1473 0 20.7002 0C20.4315 0 20.1932 0.128126 19.9347 0.386624L0.376858 19.9444C0.127442 20.1932 0 20.4321 0 20.7009C0 21.148 0.314846 21.4362 0.810748 21.4362Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
