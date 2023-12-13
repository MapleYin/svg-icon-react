import React from 'react'

export function PawprintCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.81016 10.9733C5.81016 12.2792 6.38203 13.1357 7.26934 13.1357C8.15664 13.1357 8.72012 12.2792 8.72012 10.9733C8.72012 9.64932 8.15664 8.79219 7.26934 8.79219C6.38203 8.79219 5.81016 9.64932 5.81016 10.9733ZM8.7585 7.46631C8.7585 8.79034 9.32266 9.64747 10.2093 9.64747C11.0966 9.64747 11.6685 8.79034 11.6685 7.46631C11.6685 6.16045 11.0966 5.30401 10.2093 5.30401C9.32266 5.30401 8.7585 6.14229 8.7585 7.46631ZM12.6896 7.46631C12.6896 8.79034 13.2614 9.64747 14.1481 9.64747C15.0354 9.64747 15.6079 8.79034 15.6079 7.46631C15.6079 6.14229 15.0354 5.30401 14.1481 5.30401C13.2614 5.30401 12.6896 6.16045 12.6896 7.46631ZM15.6379 10.9733C15.6379 12.2792 16.2105 13.1357 17.0978 13.1357C17.9844 13.1357 18.5479 12.2792 18.5479 10.9733C18.5479 9.64932 17.9844 8.79219 17.0978 8.79219C16.2105 8.79219 15.6379 9.64932 15.6379 10.9733ZM7.43926 16.0517C7.43926 17.194 8.34473 18.0471 9.55977 18.0471C10.1757 18.0471 10.6438 17.8538 11.056 17.6696C11.4445 17.5057 11.7591 17.3612 12.179 17.3612C12.5801 17.3612 12.9037 17.5057 13.2923 17.6696C13.7045 17.8538 14.1726 18.0471 14.7976 18.0471C16.0035 18.0471 16.8999 17.194 16.8999 16.0517C16.8999 14.8853 16.1353 14.2546 15.4914 13.7273C15.1587 13.4357 14.8539 13.1901 14.6838 12.9112C14.5625 12.693 14.4335 12.4259 14.3247 12.1148C13.9307 11.2024 13.4129 10.0547 12.179 10.0547C10.9172 10.0547 10.4176 11.2206 10.0424 12.1148C9.91475 12.407 9.80459 12.656 9.69239 12.8554C9.5041 13.1804 9.20772 13.4357 8.84776 13.7273C8.20391 14.2546 7.43926 14.8853 7.43926 16.0517Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
