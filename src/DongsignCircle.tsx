import React from 'react'

export default function DongsignCircle({
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
        d='M8.50537 12.5835C8.50537 14.6389 9.87305 15.9289 11.4915 15.9289C12.5546 15.9289 13.49 15.3805 14.0194 14.4469L14.0194 15.6168C14.0194 15.7992 14.1112 15.891 14.2937 15.891C14.4663 15.891 14.5567 15.7992 14.5567 15.6168L14.5567 8.14414L15.5244 8.14414C15.7182 8.14414 15.8156 8.04736 15.8156 7.85225C15.8156 7.69482 15.7189 7.57012 15.5244 7.57012L14.5567 7.57012L14.5567 6.679C14.5567 6.49453 14.4468 6.40273 14.2818 6.40273C14.0981 6.40273 14.0069 6.49453 14.0069 6.679L14.0069 7.57012L11.6659 7.57012C11.4708 7.57012 11.3747 7.69482 11.3747 7.85225C11.3747 8.04736 11.4715 8.14414 11.6659 8.14414L14.0069 8.14414L14.0069 10.6999C13.4782 9.78584 12.5351 9.23809 11.4908 9.23809C9.87236 9.23809 8.50537 10.5268 8.50537 12.5835ZM9.04883 12.5842C9.04883 10.9057 10.1505 9.79991 11.4605 9.79991C12.8599 9.79991 13.9168 11.0292 13.9168 12.5842C13.9168 14.1392 12.8599 15.3587 11.4605 15.3587C10.1505 15.3587 9.04883 14.2529 9.04883 12.5842ZM8.84609 16.9866C8.84609 17.1629 8.96309 17.2792 9.13799 17.2792L14.6275 17.2792C14.8129 17.2792 14.9292 17.1629 14.9292 16.9866C14.9292 16.8097 14.8136 16.6941 14.6275 16.6941L9.13799 16.6941C8.96172 16.6941 8.84609 16.8104 8.84609 16.9866Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}