import React from 'react'

export default function CarseatRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8229 24.7018' className={className}>
      <path
        d='M25.3284 20.0759C26.0409 17.0522 23.9051 15.7985 18.4742 15.7985C15.2173 15.7985 12.0505 16.0713 9.37059 16.5868L9.53329 16.8038C10.072 11.2497 8.10439 5.98575 4.84365 4.31983L4.93974 4.67452C5.50195 1.44015 3.74492 0 2.05633 0C0.774978 0-0.386937 0.920416 0.122732 3.03106L4.80388 22.1862C5.18045 23.749 6.3285 24.6913 7.86199 24.6913L20.9449 24.6913C23.0635 24.6913 24.4826 23.625 25.3284 20.0759ZM24.8496 19.9529C24.0413 23.306 22.7562 24.1791 20.9449 24.1791L7.86199 24.1791C6.58075 24.1791 5.61063 23.3786 5.28475 22.0388L0.611316 2.96466C0.197547 1.28233 1.06434 0.511533 2.08426 0.511533C3.42831 0.511533 4.76483 1.70909 4.50545 4.33077C4.47909 4.53644 4.43846 4.67023 4.65018 4.77521C7.72322 6.44445 9.48797 11.543 9.04109 16.5189C9.00408 16.9586 9.23397 17.1528 9.65487 17.0684C12.1129 16.5845 15.3453 16.3101 18.4742 16.3101C23.6056 16.3101 25.4796 17.3602 24.8496 19.9529Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}