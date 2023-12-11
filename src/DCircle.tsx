import React from 'react'

export default function DCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.52764 17.7223L11.8886 17.7223C14.9837 17.7223 16.9221 15.7176 16.9221 12.1436C16.9221 8.79365 14.9578 6.67022 11.8886 6.67022L8.52764 6.67022C8.38037 6.67022 8.28721 6.7793 8.28721 6.96495L8.28721 17.4269C8.28721 17.6125 8.38037 17.7223 8.52764 17.7223ZM8.84073 17.1725L8.84073 7.22003L11.8197 7.22003C14.4923 7.22003 16.282 9.0711 16.282 12.1638C16.282 15.4715 14.5118 17.1725 11.8197 17.1725Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}