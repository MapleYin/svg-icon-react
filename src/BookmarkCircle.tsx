import React from 'react'

export default function BookmarkCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.25508 18.8405C8.40206 18.8405 8.50518 18.7751 8.63019 18.6508L12.1197 15.0159C12.1497 14.9859 12.1804 14.9859 12.2097 15.0159L15.6999 18.6508C15.8242 18.7751 15.9273 18.8405 16.075 18.8405C16.3106 18.8405 16.482 18.6397 16.482 18.3897L16.482 7.47129C16.482 6.41543 15.9031 5.83584 14.857 5.83584L9.46329 5.83584C8.41719 5.83584 7.84737 6.41543 7.84737 7.47129L7.84737 18.3897C7.84737 18.6397 8.00977 18.8405 8.25508 18.8405Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
