import React from 'react'

export default function TriangleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1327 24.0723' className={className}>
      <path
        d='M2.58057 23.5947L23.1992 23.5947C24.8225 23.5947 25.7714 22.4323 25.7714 21.0889C25.7714 20.5393 25.6326 19.9701 25.3104 19.4044L15.0377 1.20332C14.5587 0.346388 13.7108 0 12.8902 0C12.0599 0 11.2218 0.346388 10.7337 1.20332L0.461035 19.4044C0.147168 19.9617 0 20.5393 0 21.0889C0 22.4323 0.948928 23.5947 2.58057 23.5947Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
