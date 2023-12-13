import React from 'react'

export function PersonFillTurnLeft({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3911 21.2793' className={className}>
      <path
        d='M22.0298 1.80137C22.0298 0.694043 21.6932 0 20.6176 0C17.4208 0 13.0117 3.99824 13.0117 10.4211C13.0117 16.8439 17.4208 20.8422 20.6176 20.8422C21.6932 20.8422 22.0298 20.1572 22.0298 19.0408ZM10.7377 10.4581C10.7377 7.68877 8.38008 5.60342 5.31025 5.60342C2.45478 5.56641 0 7.73555 0 10.4581C0 13.1813 2.46113 15.3135 5.31797 15.3135C8.38008 15.3135 10.7377 13.2281 10.7377 10.4581Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
