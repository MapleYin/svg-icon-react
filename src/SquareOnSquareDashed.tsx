import React from 'react'

export function SquareOnSquareDashed({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.5115 23.8194' className={className}>
      <path
        d='M0.511533 15.8815C0.511533 17.6602 1.42628 18.5826 3.21124 18.5826L6.11328 18.5826L6.11328 19.0942L3.18125 19.0942C1.10606 19.0942 0 17.979 0 15.9059L0 13.5384L0.511533 13.5384ZM0.511533 12.648L0 12.648L0 6.49366L0.511533 6.49366ZM5.78467 0.558994L3.21124 0.558994C1.42628 0.558994 0.511533 1.48145 0.511533 3.26006L0.511533 5.60322L0 5.60322L0 3.23506C0 1.1626 1.10606 0.0474608 3.18125 0.0474608L5.78467 0.0474608ZM19.0376 3.23506L19.0376 4.78175L18.5254 4.78175L18.5254 3.26006C18.5254 1.48145 17.5366 0.558994 15.8264 0.558994L13.2529 0.558994L13.2529 0.0474608L15.8557 0.0474608C17.9309 0.0474608 19.0376 1.19053 19.0376 3.23506ZM12.3512 0.558994L6.68575 0.558994L6.68575 0.0474608L12.3512 0.0474608Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.29454 23.8194L21.969 23.8194C24.0435 23.8194 25.1502 22.6763 25.1502 20.6311L25.1502 7.97003C25.1502 5.92481 24.0435 4.78175 21.969 4.78175L9.29454 4.78175C7.21934 4.78175 6.11328 5.8878 6.11328 7.97003L6.11328 20.6311C6.11328 22.7133 7.21934 23.8194 9.29454 23.8194ZM9.32452 23.3078C7.53956 23.3078 6.62481 22.3854 6.62481 20.6067L6.62481 7.99435C6.62481 6.21574 7.53956 5.29328 9.32452 5.29328L21.9397 5.29328C23.6499 5.29328 24.6387 6.21574 24.6387 7.99435L24.6387 20.6067C24.6387 22.3854 23.6499 23.3078 21.9397 23.3078Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
