import React from 'react'

export default function Visionpro({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.4964 19.4744' className={className}>
      <path
        d='M16.563 14.7225C18.9108 14.7225 21.1531 18.5091 25.6072 18.5091C29.9421 18.5091 33.1351 14.576 33.1351 9.39717C33.1351 0.913672 25.7544 0 16.563 0C7.37159 0 0 0.914356 0 9.39717C0 14.576 3.19297 18.5091 7.51875 18.5091C11.9819 18.5091 14.2061 14.7225 16.563 14.7225ZM16.563 14.2109C13.8975 14.2109 11.6653 17.9976 7.51875 17.9976C3.43067 17.9976 0.511533 14.4037 0.511533 9.39717C0.511533 1.35567 7.39366 0.511533 16.563 0.511533C25.7414 0.511533 32.6235 1.35499 32.6235 9.39717C32.6235 14.4037 29.696 17.9976 25.6072 17.9976C21.4697 17.9976 19.2104 14.2109 16.563 14.2109Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.563 14.2109C13.8975 14.2109 11.6653 17.9976 7.51875 17.9976C3.43067 17.9976 0.511533 14.4037 0.511533 9.39717C0.511533 1.35567 7.39366 0.511533 16.563 0.511533C25.7414 0.511533 32.6235 1.35499 32.6235 9.39717C32.6235 14.4037 29.696 17.9976 25.6072 17.9976C21.4697 17.9976 19.2104 14.2109 16.563 14.2109Z'
        fill={color}
        fillOpacity='0.2125'
      />
    </svg>
  )
}
