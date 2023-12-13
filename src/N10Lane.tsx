import React from 'react'

export function N10Lane({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 18.8111' className={className}>
      <path
        d='M0 18.5596C0 18.702 0.118166 18.8111 0.251567 18.8111C0.393367 18.8111 0.511533 18.702 0.511533 18.5596L0.511533 0.299028C0.511533 0.165627 0.393367 0.0474608 0.251567 0.0474608C0.118166 0.0474608 0 0.165627 0 0.299028ZM21.4484 18.5596C21.4484 18.702 21.5666 18.8111 21.6993 18.8111C21.8418 18.8111 21.96 18.702 21.96 18.5596L21.96 0.299028C21.96 0.165627 21.8418 0.0474608 21.6993 0.0474608C21.5666 0.0474608 21.4484 0.165627 21.4484 0.299028Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.54053 14.9162C7.74864 14.9162 7.8795 14.7456 7.8795 14.5382L7.8795 4.34141C7.8795 4.11036 7.74522 3.98721 7.52324 3.98721C7.34512 3.98721 7.24082 4.05606 7.10586 4.15694L4.69961 5.8876C4.5833 5.97256 4.50039 6.05889 4.50039 6.21563C4.50039 6.37579 4.63555 6.51231 4.80547 6.51231C4.88067 6.51231 4.97129 6.49981 5.04444 6.45665L7.20928 4.87179L7.19248 4.87179L7.19248 14.5382C7.19248 14.7645 7.31426 14.9162 7.54053 14.9162ZM13.9114 14.9769C16.5572 14.9769 17.3467 11.9407 17.3467 9.4416C17.3467 6.86074 16.4832 3.91748 13.9114 3.91748C11.2468 3.91748 10.458 6.9627 10.458 9.4416C10.458 12.0336 11.3306 14.9769 13.9114 14.9769ZM13.9114 14.3376C11.7582 14.3376 11.1457 11.5551 11.1457 9.4416C11.1457 7.32041 11.7673 4.55675 13.9114 4.55675C16.0556 4.55675 16.6681 7.34834 16.6681 9.4416C16.6681 11.546 16.0842 14.3376 13.9114 14.3376Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
