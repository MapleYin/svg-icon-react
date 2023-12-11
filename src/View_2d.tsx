import React from 'react'

export default function View_2d({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.354 18.5309' className={className}>
      <path
        d='M14.8204 18.3476L19.2394 18.3476C24.6946 18.3476 27.9954 14.7154 27.9954 9.2585C27.9954 3.80293 24.6946 0.16377 19.2394 0.16377L14.8204 0.16377C14.6788 0.16377 14.5802 0.263773 14.5802 0.424225L14.5802 18.0969C14.5802 18.2573 14.6788 18.3476 14.8204 18.3476ZM15.0788 17.8982L15.0788 0.620812L19.2396 0.620812C24.3996 0.620812 27.494 4.07589 27.494 9.25918C27.494 14.4425 24.3996 17.8982 19.2396 17.8982Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.345122 18.4593L11.7078 18.4593C11.8635 18.4593 11.9601 18.3718 11.9601 18.2175C11.9601 18.0632 11.8635 18.0029 11.7078 18.0029L0.795816 18.0029L0.795816 17.9534L6.93292 11.5193C9.99522 8.30537 10.967 6.90205 10.967 5.02432C10.967 2.19795 8.65704 0 5.52471 0C3.18906 0 1.16094 1.21553 0.371972 3.18369C0.1333 3.7419 0 4.36094 0 4.75654C0 4.97647 0.0679708 5.0835 0.259282 5.0835C0.39405 5.0835 0.491512 4.98467 0.493369 4.829C0.53585 4.39229 0.590147 3.92969 0.767296 3.50684C1.42228 1.83067 3.12345 0.473154 5.52471 0.473154C8.31094 0.473154 10.467 2.52608 10.467 5.01299C10.467 6.70693 9.58632 8.06064 6.57998 11.1851L0.18428 17.8734C0.0620121 17.9957 0.0245112 18.0693 0.0245112 18.1875C0.0245112 18.3718 0.160158 18.4593 0.345122 18.4593Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}