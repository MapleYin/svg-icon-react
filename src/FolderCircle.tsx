import React from 'react'

export default function FolderCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.45352 17.8563L17.8609 17.8563C18.9547 17.8563 19.544 17.2851 19.544 16.2104L19.544 10.3663L4.78741 10.3663L4.78741 16.2104C4.78741 17.3039 5.37745 17.8563 6.45352 17.8563ZM4.78741 9.75577L19.544 9.75577L19.544 8.97344C19.544 7.9169 18.954 7.30938 17.8772 7.30938L11.0151 7.30938C10.3829 7.30938 10.1395 7.24805 9.78155 6.90196L9.4461 6.58038C9.0171 6.16592 8.81563 6.11368 8.12843 6.11368L6.19122 6.11368C5.23712 6.11368 4.78741 6.5627 4.78741 7.48868Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}