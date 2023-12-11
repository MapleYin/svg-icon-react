import React from 'react'

export default function PCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.43692 17.8038C9.60303 17.8038 9.71573 17.687 9.71573 17.537L9.71573 13.2906L12.933 13.2906C14.8233 13.2906 16.2244 11.8859 16.2244 9.97657C16.2244 8.08604 14.8129 6.67022 12.9246 6.67022L9.40831 6.67022C9.26104 6.67022 9.16787 6.7793 9.16787 6.94678L9.16787 17.537C9.16787 17.6856 9.28897 17.8038 9.43692 17.8038ZM9.71573 12.7331L9.71573 7.22774L12.9906 7.22774C14.5295 7.22774 15.6688 8.41114 15.6688 9.97657C15.6688 11.5497 14.5029 12.7331 12.9906 12.7331Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
