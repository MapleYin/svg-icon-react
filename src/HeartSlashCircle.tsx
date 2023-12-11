import React from 'react'

export default function HeartSlashCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM0.500206 12.1706C0.500206 18.5963 5.73516 23.8319 12.1608 23.8319C18.5872 23.8319 23.8312 18.5963 23.8312 12.1706C23.8312 5.73516 18.5956 0.500206 12.1602 0.500206C5.73448 0.500206 0.500206 5.73516 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.0407 16.3495C14.1046 17.1642 13.1822 17.8332 12.5281 18.3305C12.4068 18.4211 12.2542 18.4768 12.1622 18.4768C12.0702 18.4768 11.9169 18.412 11.8026 18.3305C9.73994 17.0404 5.54473 13.8644 5.54473 10.1299C5.54473 9.17995 5.86287 8.33526 6.40896 7.70044ZM18.7776 10.1299C18.7776 11.9986 17.6991 13.6807 16.378 15.0801L7.96529 6.66171C8.32923 6.5397 8.72507 6.47569 9.14327 6.47569C10.4721 6.47569 11.6092 7.35752 12.1608 8.33526C12.7216 7.35752 13.8691 6.47569 15.1882 6.47569C17.2528 6.47569 18.7776 8.05069 18.7776 10.1299Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.7377 19.1802C18.852 19.2944 19.0478 19.3126 19.1704 19.1802C19.2854 19.038 19.2854 18.8624 19.1704 18.7384L5.58331 5.14151C5.46905 5.01817 5.27325 5.01817 5.14991 5.14151C5.01749 5.27393 5.02725 5.45157 5.14991 5.57423Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
