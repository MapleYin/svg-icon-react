import React from 'react'

export function VideoFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.9801 20.2201' className={className}>
      <path
        d='M4.79512 20.2104L19.0022 20.2104C21.6886 20.2104 23.1282 18.7644 23.1282 16.0968L23.1282 4.10381C23.1282 1.446 21.6772 0 18.9908 0L4.79512 0C2.09669 0 0.66905 1.446 0.66905 4.10381L0.66905 16.0968C0.66905 18.7644 2.1087 20.2104 4.79512 20.2104ZM24.0271 13.7798L28.5247 17.3305C28.9732 17.6834 29.3512 17.9087 29.829 17.9087C30.5108 17.9087 30.9801 17.4263 30.9801 16.5566L30.9801 3.64395C30.9801 2.775 30.5108 2.29258 29.829 2.29258C29.3512 2.29258 28.9732 2.51787 28.5247 2.8708L24.0271 6.38379Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
