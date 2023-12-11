import React from 'react'

export default function SurfboardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.5125 29.5184' className={className}>
      <path
        d='M9.83997 10.1564C5.43948 14.5575 2.12092 19.1518 0.552268 23.1937C-0.311209 25.4507-0.164724 26.9402 1.00989 28.2045L26.7226 2.49182C23.6318-0.310719 17.869 2.12737 9.83997 10.1564ZM27.0345 2.80442L1.3218 28.5171C2.58616 29.682 4.0763 29.8291 6.32357 28.9657C10.3745 27.397 14.9695 24.0785 19.37 19.678C27.3906 11.6574 29.8377 5.88616 27.0345 2.80442Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
