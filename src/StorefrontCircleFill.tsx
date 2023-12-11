import React from 'react'

export default function StorefrontCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM10.3499 13.1237C9.60274 13.1237 8.94278 12.8439 8.51104 12.3625C8.04161 12.8439 7.40049 13.1237 6.64493 13.1237C6.35782 13.1237 6.10977 13.0799 5.86582 13.0229L5.86582 17.8093C5.86582 18.6176 6.28418 19.0262 7.075 19.0262L17.3375 19.0262C18.1465 19.0262 18.5558 18.5987 18.5558 17.8093L18.5558 13.0299C18.3118 13.0785 18.054 13.1237 17.7857 13.1237C17.0399 13.1237 16.3702 12.8439 15.9385 12.3625C15.4788 12.8439 14.8279 13.1237 14.0808 13.1237C13.3168 13.1237 12.6652 12.8439 12.2153 12.3443C11.7654 12.8439 11.123 13.1237 10.3499 13.1237ZM14.422 14.6901L14.422 18.4439L9.99053 18.4439L9.99053 14.6901C9.99053 14.4607 10.1495 14.3024 10.3607 14.3024L14.0531 14.3024C14.2818 14.3024 14.422 14.4607 14.422 14.6901ZM4.48262 10.7506L4.48285 10.7506C4.48506 11.8478 5.35945 12.592 6.4585 12.592C7.3376 12.592 8.03526 12.1126 8.31553 11.3555C8.58536 12.1126 9.26485 12.592 10.1635 12.592C11.0607 12.592 11.7675 12.0944 12.0289 11.3555C12.2903 12.0944 12.988 12.592 13.8853 12.592C14.793 12.592 15.4725 12.1126 15.7521 11.3555C16.0135 12.1126 16.7118 12.592 17.5993 12.592C18.7097 12.592 19.5752 11.8563 19.5752 10.7574L19.5752 10.7506L4.48285 10.7506C4.48263 10.7492 4.48262 10.7476 4.48262 10.7461ZM7.74483 5.30596C7.33213 5.30596 6.99825 5.50742 6.82471 5.86016L4.6459 10.2384L19.4028 10.2384L17.224 5.86016C17.0603 5.50742 16.7166 5.30596 16.3046 5.30596Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}