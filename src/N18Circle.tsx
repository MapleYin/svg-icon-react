import React from 'react'

export default function N18Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.11094 17.3771C9.26817 17.3771 9.42061 17.2246 9.42061 17.0388L9.42061 7.31563C9.42061 7.14043 9.26885 6.98096 9.08389 6.98096C8.88828 6.98096 8.73515 7.07071 8.60771 7.19473L6.76982 8.7292C6.68349 8.80371 6.64531 8.86348 6.64531 8.97413C6.64531 9.13497 6.74346 9.26104 6.92178 9.26104C7.00674 9.26104 7.0415 9.2297 7.1042 9.18721L8.77265 7.83624L8.77265 17.0388C8.77265 17.2246 8.9251 17.3771 9.11094 17.3771ZM14.1577 17.4189C15.8 17.4189 16.8949 16.1689 16.8949 14.4962C16.8949 13.2939 16.1822 12.1141 15.1394 11.8706L15.1394 11.8588C16.0902 11.5127 16.6208 10.5723 16.6208 9.575C16.6208 8.14668 15.7137 6.93213 14.1577 6.93213C12.6686 6.93213 11.7323 8.10987 11.7323 9.57432C11.7323 10.5959 12.2014 11.5134 13.2145 11.8588L13.2145 11.8706C12.1493 12.1148 11.4394 13.2764 11.4394 14.4962C11.4394 16.0842 12.4496 17.4189 14.1577 17.4189ZM14.1759 11.5955C13.2459 11.5955 12.3573 10.898 12.3573 9.61251C12.3573 8.40596 13.0999 7.52481 14.1759 7.52481C15.3649 7.52481 15.9951 8.56241 15.9951 9.61251C15.9951 10.7827 15.1883 11.5955 14.1759 11.5955ZM14.1759 16.8255C12.8899 16.8255 12.0901 15.7656 12.0901 14.4789C12.0901 13.174 12.9087 12.2077 14.1759 12.2077C15.3048 12.2077 16.2442 13.0337 16.2442 14.4789C16.2442 15.7475 15.4626 16.8255 14.1759 16.8255Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}