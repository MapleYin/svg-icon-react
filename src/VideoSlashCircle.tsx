import React from 'react'

export default function VideoSlashCircle({
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
        d='M15.2443 16.5535C14.9166 16.8608 14.4416 17.019 13.8325 17.019L7.19053 17.019C5.89444 17.019 5.21582 16.3326 5.21582 15.0554L5.21582 9.30606C5.21582 8.40442 5.55987 7.79268 6.22481 7.51592ZM19.7468 9.09395L19.7468 15.2752C19.7468 15.7013 19.5076 15.9334 19.1856 15.9334C18.9609 15.9334 18.772 15.8155 18.5655 15.6579L16.4272 13.9543L16.4272 10.3883L18.5655 8.71192C18.7804 8.5459 18.9609 8.43711 19.1856 8.43711C19.5076 8.43711 19.7468 8.66924 19.7468 9.09395ZM15.7884 9.30606L15.7884 14.49L8.64561 7.34248L13.8178 7.34248C15.0957 7.34248 15.7884 8.03721 15.7884 9.30606Z'
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
