import React from 'react'

export default function TrapezoidAndLineHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.6392 20.022' className={className}>
      <path
        d='M6.33488 17.3973L21.2758 19.9373C22.8162 20.2189 23.8479 19.2791 23.8479 17.6499L23.8479 2.34373C23.8479 0.705439 22.8162-0.226008 21.2758 0.0472349L6.33488 2.58718C5.20293 2.77663 4.42998 3.7905 4.42998 5.05769L4.42998 14.9268C4.42998 16.1933 5.20293 17.217 6.33488 17.3973ZM0.269048 10.2586C0.104299 10.2586 0 10.1452 0 10.0111C0 9.83864 0.104299 9.73503 0.269048 9.73503L27.9997 9.73503C28.1735 9.73503 28.2778 9.83864 28.2778 10.0111C28.2778 10.1452 28.1735 10.2586 27.9997 10.2586Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
