import React from 'react'

export default function ShippingboxCircle({
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
        d='M12.4166 19.4294C12.4843 19.4287 12.5506 19.3813 12.5987 19.3436L18.4185 16.1925C18.8856 15.9422 19.0158 15.664 19.0158 15.2056L19.0158 9.33204C19.0158 9.17374 19.0151 9.09991 18.9852 9.04561L12.4166 12.5892ZM11.9051 19.4294L11.9051 12.5892L5.34629 9.04561C5.30655 9.09991 5.30655 9.17374 5.30655 9.33204L5.30655 15.2056C5.30655 15.664 5.43604 15.9422 5.91231 16.1925L11.723 19.3436C11.7711 19.3813 11.8374 19.4287 11.9051 19.4294ZM12.1608 12.1306L15.3323 10.4005L8.57735 6.77178L5.75948 8.33311C5.613 8.41963 5.56007 8.46143 5.52667 8.50391ZM15.8913 10.1127L18.795 8.50391C18.7714 8.46143 18.7087 8.41963 18.5622 8.33311L12.7907 5.11534C12.5649 5.0004 12.358 4.9209 12.1608 4.9209C11.9734 4.9209 11.7658 5.0004 11.5407 5.11534L9.16221 6.45674Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
