import React from 'react'

export default function LockRotation({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.0511 24.351' className={className}>
      <path
        d='M0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315C16.7127 24.3315 20.5102 21.7221 22.7819 18.0944C22.8617 17.9519 22.8081 17.8109 22.6956 17.7478C22.574 17.6923 22.4204 17.7291 22.3518 17.8598C20.2617 21.3925 16.5277 23.8312 12.1608 23.8319C5.73516 23.8326 0.499522 18.5963 0.499522 12.1706C0.499522 5.73516 5.73516 0.500889 12.1608 0.500889C17.8947 0.500889 22.6673 4.66046 23.6402 10.107L20.9773 10.107C20.6223 10.107 20.471 10.3633 20.7197 10.7249L23.3115 14.4257C23.5185 14.726 23.774 14.7267 23.9816 14.4257L26.565 10.7256C26.8235 10.3633 26.6625 10.107 26.3074 10.107L24.1516 10.107C23.1745 4.38389 18.1595 0 12.1608 0C5.4711 0 0 5.4711 0 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.54512 17.3166C7.54512 18.3651 8.01045 18.8228 8.97178 18.8228L15.3576 18.8228C16.3099 18.8228 16.785 18.3651 16.785 17.3166L16.785 11.9751C16.785 10.9118 16.3126 10.4633 15.3399 10.4696L15.3399 8.55157C15.3399 6.53184 14.0636 5.19981 12.1602 5.19981C10.2658 5.19981 8.98946 6.53184 8.98946 8.55157L8.98946 10.4696C8.0168 10.4633 7.54512 10.9118 7.54512 11.9751ZM9.56192 10.469L9.56192 8.56221C9.56192 6.89415 10.6141 5.78839 12.1602 5.78839C13.7153 5.78839 14.7591 6.89415 14.7591 8.56221L14.7591 10.469Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}