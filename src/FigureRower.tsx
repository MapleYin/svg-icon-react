import React from 'react'

export default function FigureRower({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.5421 20.1002' className={className}>
      <path
        d='M6.74258 5.0294C8.14659 5.0294 9.26602 3.90928 9.26602 2.50528C9.26602 1.12012 8.14659 0 6.74258 0C5.35674 0 4.23731 1.12012 4.23731 2.50528C4.23731 3.90928 5.35674 5.0294 6.74258 5.0294ZM0.671194 14.0109C0.160647 15.9066 1.36866 17.1237 2.83331 17.1237C3.31387 17.1237 3.81465 16.9968 4.28682 16.7415L10.5431 13.4209L17.4486 16.8873C18.2933 17.3002 18.9614 16.9668 19.2174 16.4172C19.4915 15.8962 19.3339 15.1597 18.5193 14.7663L11.29 11.1416C10.8088 10.9052 10.3066 10.8675 9.80655 11.0928L5.13077 13.1161L6.07442 9.83526C6.23204 9.25635 6.76212 8.84414 7.37032 8.84414L16.6633 8.84414C17.321 8.84414 17.842 8.32246 17.842 7.66475C17.842 7.00703 17.321 6.48604 16.6633 6.48604L6.50616 6.48604C4.20801 6.48604 2.33116 7.81192 1.80108 9.78643ZM0.288284 20.0988L20.8918 20.0988C21.0527 20.0988 21.1808 19.9707 21.1808 19.819C21.1808 19.6588 21.0527 19.5307 20.8918 19.5307L0.288284 19.5307C0.128126 19.5307 0 19.6588 0 19.819C0 19.9707 0.128126 20.0988 0.288284 20.0988Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
