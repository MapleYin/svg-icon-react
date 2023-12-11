import React from 'react'

export default function Mediastick({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.5986 12.0943' className={className}>
      <path
        d='M3.66724 12.0832L21.1267 12.0832C23.7229 12.0832 24.7937 10.3279 24.7937 6.0416C24.8126 1.75459 23.7418 0 21.1267 0L3.66724 0C1.0522 0-0.0186034 1.75459 0.000244211 6.0416C0.000244211 10.3279 1.07104 12.0832 3.66724 12.0832ZM3.66724 5.10547C3.02701 5.10547 2.52417 4.6124 2.52417 3.98125C2.52417 3.3417 3.02701 2.84863 3.66724 2.84863C4.30679 2.84863 4.79078 3.3417 4.79078 3.98125C4.79078 4.6124 4.30679 5.10547 3.66724 5.10547Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.3632 9.36582L29.5436 9.36582C30.6209 9.36582 31.2371 8.78799 31.2371 7.79932L31.2371 4.28253C31.2371 3.27569 30.6209 2.69717 29.5436 2.69717L25.3632 2.69717C25.5865 3.62901 25.6841 4.72822 25.6841 6.0416C25.6841 7.33545 25.5676 8.43467 25.3632 9.36582Z'
        fill={color}
        fillOpacity='0.425'
      />
    </svg>
  )
}
