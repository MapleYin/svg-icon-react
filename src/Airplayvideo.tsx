import React from 'react'

export function Airplayvideo({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.0357 24.5516' className={className}>
      <path
        d='M27.6743 3.18282L27.6743 16.3111C27.6743 17.7886 26.858 18.6049 25.3715 18.6049L18.7674 18.6049L18.3155 18.0927L25.3233 18.0927C26.5006 18.0927 27.1628 17.4493 27.1628 16.2728L27.1628 3.21212C27.1628 2.03488 26.5006 1.39152 25.3233 1.39152L2.3503 1.39152C1.17374 1.39152 0.511533 2.03488 0.511533 3.21212L0.511533 16.2728C0.511533 17.4493 1.17374 18.0927 2.3503 18.0927L9.35918 18.0927L8.90721 18.6049L2.30284 18.6049C0.816311 18.6049 0 17.7886 0 16.3111L0 3.18282C0 1.6963 0.816311 0.879986 2.30284 0.879986L25.3715 0.879986C26.858 0.879986 27.6743 1.6963 27.6743 3.18282Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.5377 23.6521C21.7647 23.6521 21.8147 23.4147 21.6922 23.2608L14.0848 14.6573C13.9489 14.5104 13.717 14.5104 13.5902 14.6573L5.98282 23.2608C5.86035 23.4147 5.90127 23.6521 6.12754 23.6521Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
