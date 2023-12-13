import React from 'react'

export function WebCamera({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.8469 23.1725' className={className}>
      <path
        d='M9.25254 18.4862C14.3412 18.4862 18.4856 14.351 18.4856 9.2337C18.4856 4.12617 14.3412 0 9.25254 0C4.14502 0 0 4.12617 0 9.2337C0 14.351 4.14502 18.4862 9.25254 18.4862ZM9.25254 17.9747C4.34278 17.9747 0.511533 14.1532 0.511533 9.2337C0.511533 4.32462 4.34278 0.511533 9.25254 0.511533C14.1428 0.511533 17.974 4.32462 17.974 9.2337C17.974 14.1532 14.1428 17.9747 9.25254 17.9747ZM8.9919 22.9021L9.50411 22.9021L9.50411 18.2583L8.9919 18.2583ZM5.21631 23.1529L13.2699 23.1529C13.4124 23.1529 13.5215 23.0439 13.5215 22.9021C13.5215 22.7596 13.4124 22.6505 13.2699 22.6505L5.23516 22.6505C5.09268 22.6505 4.97451 22.7596 4.97451 22.9021C4.97451 23.0439 5.07451 23.1529 5.21631 23.1529Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.25254 14.5602C12.2118 14.5602 14.5406 12.2118 14.5406 9.2337C14.5406 6.26602 12.2118 3.92608 9.25254 3.92608C6.28418 3.92608 3.94492 6.26602 3.94492 9.2337C3.94492 12.2118 6.28418 14.5602 9.25254 14.5602ZM9.25254 11.7201C7.86739 11.7201 6.78565 10.6195 6.78565 9.2337C6.78565 7.84854 7.86739 6.7668 9.25254 6.7668C10.6195 6.7668 11.7097 7.84854 11.7097 9.2337C11.7097 10.6195 10.6195 11.7201 9.25254 11.7201Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
