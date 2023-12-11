import React from 'react'

export default function FlagCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.19063 18.7817C7.39415 18.7817 7.49024 18.6473 7.49024 18.5185L7.49024 14.3654C7.80704 14.2496 8.37003 14.0473 9.33497 14.0473C11.646 14.0473 13.0062 15.2339 15.3683 15.2339C16.1409 15.2339 16.6698 15.1544 17.1574 14.9116C17.5563 14.7045 17.7445 14.5087 17.7445 14.2279L17.7445 7.89688C17.7445 7.63614 17.6051 7.4835 17.3543 7.4835C17.0572 7.4835 16.4272 7.79326 15.309 7.79326C12.9957 7.79326 11.6342 6.61504 9.27569 6.61504C8.40108 6.61504 7.9085 6.74131 7.51446 6.91846C7.09815 7.08789 6.89942 7.33184 6.89942 7.62032L6.89942 18.5185C6.89942 18.6466 6.99825 18.7817 7.19063 18.7817Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}