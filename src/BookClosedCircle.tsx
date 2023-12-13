import React from 'react'

export function BookClosedCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.56465 19.1625L17.2262 19.1625C17.399 19.1625 17.514 19.0469 17.514 18.8559C17.514 18.7695 17.459 18.656 17.3929 18.6064C16.4091 17.9524 16.2626 16.9207 17.0146 16.0312C17.36 15.6578 17.514 15.17 17.514 14.647L17.514 6.97677C17.514 5.79737 16.8694 5.17032 15.6907 5.17032L8.66729 5.17032C7.48858 5.17032 6.84405 5.79669 6.84405 6.97677L6.84405 17.5327C6.84405 18.5355 7.50674 19.1625 8.56465 19.1625ZM8.57715 18.559C7.86134 18.559 7.45596 18.1809 7.45596 17.5132C7.45596 16.8755 7.85567 16.5051 8.57149 16.5051L15.7014 16.5051C15.8612 16.5051 16.0113 16.4862 16.1251 16.4681C15.8167 17.2209 15.9382 17.9946 16.4603 18.559ZM8.29942 15.3589C8.10342 15.3589 7.9835 15.2306 7.9835 15.0423L7.9835 6.70713C7.9835 6.51954 8.10342 6.39053 8.29942 6.39053C8.46886 6.39053 8.61671 6.53838 8.61671 6.70713L8.61671 15.0423C8.61671 15.2117 8.46886 15.3589 8.29942 15.3589Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
