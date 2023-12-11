import React from 'react'

export default function Powersleep({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.115 24.3119' className={className}>
      <path
        d='M4.70255 7.32686C4.70255 5.54444 5.01964 3.81494 5.7671 2.31279C5.89113 2.08701 5.67853 1.84375 5.32921 2.08789C2.11749 4.28105 0 7.97305 0 12.1511C0 18.8408 5.4711 24.3119 12.1608 24.3119C16.6613 24.3119 20.6238 21.8461 22.7371 18.1991C22.7885 18.0996 22.7083 18.003 22.5595 18.0937C20.8574 18.9886 18.9215 19.4877 16.8641 19.4877C10.1736 19.4877 4.70255 14.0166 4.70255 7.32686Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
