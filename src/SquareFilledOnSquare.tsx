import React from 'react'

export default function SquareFilledOnSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.5115 23.8194' className={className}>
      <path
        d='M19.0376 3.23506L19.0376 4.78175L18.5254 4.78175L18.5254 3.26006C18.5254 1.48145 17.5366 0.558994 15.8264 0.558994L3.21124 0.558994C1.42628 0.558994 0.511533 1.48145 0.511533 3.26006L0.511533 15.8815C0.511533 17.6602 1.42628 18.5826 3.21124 18.5826L6.11328 18.5826L6.11328 19.0942L3.18125 19.0942C1.10606 19.0942 0 17.979 0 15.9059L0 3.23506C0 1.1626 1.10606 0.0474608 3.18125 0.0474608L15.8557 0.0474608C17.9302 0.0474608 19.0376 1.19053 19.0376 3.23506Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.29454 23.8194L21.969 23.8194C24.0435 23.8194 25.1502 22.6763 25.1502 20.6311L25.1502 7.97003C25.1502 5.92481 24.0435 4.78175 21.969 4.78175L9.29454 4.78175C7.21934 4.78175 6.11328 5.8878 6.11328 7.97003L6.11328 20.6311C6.11328 22.7133 7.21934 23.8194 9.29454 23.8194Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
