import React from 'react'

export default function LinkCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.11817 17.8595C7.4879 19.1824 9.16583 19.1107 10.5597 17.7168L13.3377 14.9758C14.7511 13.5806 14.8061 11.8293 13.4538 10.5231C12.7937 9.88047 12.2041 9.56934 11.5571 9.50098C11.3899 9.62569 11.1907 9.82764 11.1149 10.1009C11.8202 10.0596 12.4161 10.2828 13.0324 10.9445C14.1382 11.9776 14.1195 13.3966 12.9778 14.5097L10.1208 17.3492C9.00069 18.5057 7.60967 18.5048 6.55841 17.436C5.47081 16.3855 5.47764 14.9756 6.62706 13.8827L8.98535 11.4797C8.97373 11.231 9.00938 10.8945 9.21514 10.463L6.25948 13.4173C4.84746 14.8111 4.775 16.5442 6.11817 17.8595ZM17.6342 6.35957C16.2735 5.02754 14.5963 5.1084 13.2024 6.49317L10.4244 9.24326C9.01035 10.6385 8.95537 12.3807 10.2992 13.6959C10.9678 14.3386 11.5573 14.6497 12.2043 14.709C12.3631 14.5934 12.5714 14.3914 12.6375 14.1182C11.9419 14.1595 11.3453 13.9362 10.7206 13.2745C9.62393 12.2414 9.6419 10.8134 10.7836 9.7003L13.6406 6.86075C14.7614 5.71339 16.1518 5.70518 17.203 6.78301C18.2822 7.8336 18.2936 9.23438 17.1344 10.3363L14.7677 12.7303C14.7877 12.9881 14.7521 13.3238 14.5379 13.7561L17.502 10.7927C18.914 9.39883 18.9864 7.66573 17.6342 6.35957Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}