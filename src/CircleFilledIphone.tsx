import React from 'react'

export function CircleFilledIphone({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.8282 24.294' className={className}>
      <path
        d='M2.93047 24.294L10.5267 24.294C12.5041 24.294 13.4669 23.3073 13.4669 21.3256L13.4669 2.96699C13.4669 0.985256 12.5041 0.00771463 10.5267 0.00771463L2.93047 0.00771463C0.962112 0.00771463 0 0.985256 0 2.96699L0 21.3256C0 23.3073 0.962112 24.294 2.93047 24.294ZM2.94551 23.7824C1.24552 23.7824 0.511533 23.0589 0.511533 21.3623L0.511533 2.93936C0.511533 1.2337 1.24552 0.519248 2.94551 0.519248L10.5214 0.519248C12.2207 0.519248 12.9547 1.2337 12.9547 2.93936L12.9547 21.3623C12.9547 23.0589 12.2207 23.7824 10.5214 23.7824Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.7338 16.801C9.28468 16.801 11.3752 14.7105 11.3752 12.1414C11.3752 9.58145 9.28468 7.50001 6.7338 7.50001C4.17384 7.50001 2.08331 9.58145 2.08331 12.1414C2.08331 14.7105 4.17384 16.801 6.7338 16.801Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
