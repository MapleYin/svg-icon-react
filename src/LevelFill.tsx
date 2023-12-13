import React from 'react'

export function LevelFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.3127 11.6172' className={className}>
      <path
        d='M2.88438 11.599L5.39512 11.599L5.39512 0L2.88301 0C1.08809 0 0 1.08809 0 2.88233L0.000683665 8.71671C0.000683665 10.5026 1.08809 11.599 2.88438 11.599ZM5.98867 11.599L22.962 11.599L22.962 0L20.9142 0C20.5758 3.35488 18.0035 5.47862 14.4903 5.47862C10.9953 5.47862 8.41328 3.35488 8.04698 0L5.98867 0ZM23.5563 11.599L26.0663 11.599C27.8626 11.599 28.9493 10.5026 28.95 8.71671L28.9514 2.88233C28.9521 1.08809 27.8633 0 26.067 0L23.5563 0ZM14.4903 4.87939C17.6385 4.87939 19.9781 3.00234 20.3403 0L18.0646 0C17.8985 1.86592 16.4532 3.10615 14.4903 3.10615C12.517 3.10615 11.0626 1.86592 10.9064 0L8.62081 0C8.9921 3.00234 11.3317 4.87939 14.4903 4.87939Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
