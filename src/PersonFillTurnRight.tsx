import React from 'react'

export function PersonFillTurnRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3911 21.2793' className={className}>
      <path
        d='M0 1.80137L0 19.0408C0 20.1572 0.335939 20.8422 1.41221 20.8422C4.60899 20.8422 9.01807 16.8439 9.01807 10.4211C9.01807 3.99824 4.60899 0 1.41221 0C0.335939 0 0 0.694043 0 1.80137ZM11.2921 10.4581C11.2921 13.2281 13.6497 15.3135 16.7118 15.3135C19.5687 15.3135 22.0298 13.1813 22.0298 10.4581C22.0298 7.73555 19.575 5.56641 16.7195 5.60342C13.6497 5.60342 11.2921 7.68877 11.2921 10.4581Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
