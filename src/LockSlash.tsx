import React from 'react'

export default function LockSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.1375 25.9798' className={className}>
      <path
        d='M6.25043 10.5122L5.68805 10.5122C4.69909 10.5122 3.98991 11.3135 3.98991 12.417L3.98991 22.164C3.98991 23.2674 4.69909 24.0695 5.68805 24.0695L18.0888 24.0695C18.5708 24.0695 18.9881 23.879 19.2884 23.5549L19.6552 23.9218C19.2459 24.3434 18.6757 24.5923 18.0182 24.5923L5.75797 24.5923C4.42769 24.5923 3.44136 23.5592 3.44136 22.1474L3.44136 12.4342C3.44136 11.0328 4.41327 10.0045 5.72917 9.99071ZM17.972 7.21128L17.972 9.98931L18.0182 9.98931C19.3576 9.98931 20.3348 11.0224 20.3348 12.4342L20.3348 21.2806L19.7947 20.7407L19.7947 12.417C19.7947 11.3135 19.0778 10.5122 18.0888 10.5122L9.56106 10.5122L9.03794 9.98931L17.4249 9.98931L17.4249 7.28843C17.4249 3.75494 15.2267 1.25533 11.8878 1.25533C8.53971 1.25533 6.35202 3.75494 6.35202 7.28843L6.35202 7.30472L5.82235 6.77532C5.99541 3.24154 8.34584 0.732471 11.8878 0.732471C15.5754 0.732471 17.972 3.45132 17.972 7.21128Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.9929 24.9812C22.0972 25.0855 22.2711 25.0855 22.3747 24.9812C22.4971 24.8574 22.4797 24.7122 22.3747 24.6079L1.37164 3.60483C1.28551 3.5103 1.12076 3.48169 0.997612 3.60483C0.893997 3.70913 0.893997 3.87456 0.997612 3.97818Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}