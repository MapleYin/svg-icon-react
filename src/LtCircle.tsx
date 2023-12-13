import React from 'react'

export function LtCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.18408 17.2689L12.0837 17.2689C12.2452 17.2689 12.3852 17.1199 12.3852 16.9486C12.3852 16.7962 12.2452 16.6562 12.0837 16.6562L8.52237 16.6562L8.52237 7.25499C8.52237 7.09776 8.36993 6.94463 8.20361 6.94463C8.01846 6.94463 7.86601 7.09776 7.86601 7.25499L7.86601 16.9195C7.86601 17.1192 8.01299 17.2689 8.18408 17.2689ZM14.8846 17.3693C15.0607 17.3693 15.204 17.2357 15.204 17.059L15.204 7.66681L17.1695 7.66681C17.3408 7.66681 17.4703 7.53731 17.4703 7.36534C17.4703 7.19405 17.3408 7.06456 17.1695 7.06456L12.3022 7.06456C12.1302 7.06456 12.0098 7.19405 12.0098 7.36534C12.0098 7.53731 12.1302 7.66681 12.3022 7.66681L14.5651 7.66681L14.5651 17.059C14.5651 17.2357 14.6994 17.3693 14.8846 17.3693Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
