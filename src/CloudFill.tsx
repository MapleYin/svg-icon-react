import React from 'react'

export default function CloudFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.8012 20.1633' className={className}>
      <path
        d='M5.93897 19.1948L22.6413 19.1948C26.6582 19.1948 29.8012 16.1663 29.8012 12.3867C29.8012 8.53945 26.5229 5.65537 22.2863 5.6749C20.6534 2.24287 17.8622 0 13.7441 0C9.05205 0 5.21728 3.92168 4.81553 8.83584C2.32461 9.47471 0.292285 11.3466 0.292285 14.1048C0.292285 16.8713 2.34746 19.1948 5.93897 19.1948Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
