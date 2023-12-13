import React from 'react'

export function BubbleMiddleTopFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.7813 25.5803' className={className}>
      <path
        d='M13.2128 0C13.0054 0 12.8559 0.115626 12.7161 0.321294L10.2075 4.10674L4.41798 4.10674C1.74492 4.10674 0 5.846 0 8.52472L0 19.7208C0 22.3995 1.74492 24.1381 4.41798 24.1381L22.002 24.1381C24.6743 24.1381 26.4199 22.3625 26.4199 19.7208L26.4199 8.52472C26.4199 5.87393 24.6743 4.10674 22.002 4.10674L16.2181 4.10674L13.7095 0.321294C13.5613 0.115626 13.4202 0 13.2128 0Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
