import React from 'react'

export default function EraserFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.3074 23.068' className={className}>
      <path
        d='M2.87088 10.8123L12.1376 20.0699L22.3371 9.87041C23.1382 9.0791 23.1459 7.92939 22.3344 7.14579L15.8048 0.605754C15.0114-0.205772 13.8617-0.197374 13.0704 0.603703ZM0.912678 16.8963L6.04383 22.0281C7.25741 23.2222 8.97215 23.2535 10.1516 22.0649L11.507 20.6921L2.24871 11.4345L0.875177 12.7885C-0.313401 13.977-0.282053 15.6925 0.912678 16.8963Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
