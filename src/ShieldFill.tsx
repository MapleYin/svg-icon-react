import React from 'react'

export default function ShieldFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.7152 24.9422' className={className}>
      <path
        d='M9.67696 24.9422C9.97422 24.9422 10.2951 24.7719 10.498 24.6429C17.316 20.3865 19.3539 19.2295 19.3539 15.4637L19.3539 6.01621C19.3539 4.60703 19.0361 4.13193 17.6504 3.60937C15.1903 2.68193 13.052 1.77334 10.5648 0.898142C10.2418 0.790721 9.97334 0.703514 9.67696 0.703514C9.37149 0.703514 9.11211 0.791404 8.78916 0.898142C6.32003 1.84599 4.16357 2.68262 1.69443 3.60937C0.317775 4.1124 0 4.60703 0 6.01621L0 15.4637C0 19.2295 2.09151 20.3002 8.85596 24.6429C9.05811 24.7635 9.37969 24.9422 9.67696 24.9422Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
