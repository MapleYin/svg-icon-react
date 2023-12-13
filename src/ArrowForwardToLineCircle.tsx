import React from 'react'

export function ArrowForwardToLineCircle({
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
        d='M5.15918 12.1524C5.15918 12.3104 5.26211 12.4217 5.42774 12.4217L12.7839 12.4217L15.1535 12.3953L12.8435 14.7168L11.0203 16.5366C10.9276 16.6098 10.8872 16.6947 10.8872 16.8104C10.8872 16.9948 10.9895 17.1055 11.1362 17.1055C11.2959 17.1055 11.3752 16.989 11.4679 16.897L15.9512 12.3542C16.0173 12.2979 16.05 12.2115 16.05 12.1524C16.05 12.0843 16.0257 11.998 15.9512 11.9416L11.3932 7.33252C11.3641 7.27549 11.2603 7.19805 11.1551 7.19805C10.9908 7.19805 10.8872 7.3087 10.8872 7.49249C10.8872 7.60675 10.9276 7.69307 11.0203 7.76759L12.7975 9.50567L15.1528 11.9005L12.7839 11.8748L5.42774 11.8748C5.26211 11.8748 5.15918 11.9868 5.15918 12.1524ZM17.6541 17.0826C17.8204 17.0826 17.9233 16.9713 17.9233 16.8231L17.9233 7.47129C17.9233 7.32315 17.8204 7.2209 17.6541 7.2209C17.5066 7.2209 17.4037 7.32315 17.4037 7.47129L17.4037 16.8231C17.4037 16.9713 17.5066 17.0826 17.6541 17.0826Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
