import React from 'react'

export function LeafCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.21104 6.97061C6.14971 7.6669 6.07158 8.44678 6.07158 8.9085C6.07158 13.3416 8.59248 16.3022 12.3675 16.3022C14.0106 16.3022 15.6336 15.5371 16.1466 14.0906L15.866 14.3393C16.5349 15.1289 16.7286 15.7006 17.1919 17.2419C17.27 17.5147 17.4653 17.5948 17.6606 17.5948C18.0715 17.5948 18.3399 17.2419 18.3399 16.7439C18.3399 15.8334 17.3363 14.3929 16.7588 13.8272C14.3412 11.4589 10.8566 12.8436 9.40098 10.433C9.28653 10.2377 9.52793 10.0626 9.70508 10.2384C11.6448 12.2001 13.9843 10.6444 16.7588 13.019C16.8619 13.1033 17.0223 13.0797 17.0334 12.9207C17.0445 12.7086 17.0822 12.417 17.0822 12.0898C17.0822 9.30655 15.2038 8.04268 12.3689 8.04268C11.497 8.04268 10.5987 8.14786 9.75889 8.14786C8.43584 8.14786 7.27217 7.87491 6.57129 6.91495C6.4375 6.72598 6.22491 6.79161 6.21104 6.97061Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
