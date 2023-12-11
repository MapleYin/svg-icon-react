import React from 'react'

export default function TrainSideMiddleCar({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.7324 18.6828' className={className}>
      <path
        d='M0 15.7557C0 17.6606 1.02227 18.6828 2.92081 18.6828L26.4412 18.6828C28.3488 18.6828 29.3711 17.6606 29.3711 15.7557L29.3711 2.92715C29.3711 1.02227 28.3488 0 26.4412 0L2.92081 0C1.02227 0 0 1.02227 0 2.92715ZM2.62033 9.67412L2.62033 4.02882C2.62033 3.37814 2.95011 3.05812 3.6008 3.05812L25.7619 3.05812C26.4119 3.05812 26.7417 3.37814 26.7417 4.02882L26.7417 9.67412C26.7417 10.2857 26.4119 10.6155 25.7619 10.6155L3.6008 10.6155C2.95011 10.6155 2.62033 10.2857 2.62033 9.67412Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
