import React from 'react'

export default function N01Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.58897 17.4488C11.8501 17.4488 12.3262 14.2857 12.3262 12.1706C12.3262 10.0464 11.8501 6.8833 9.58897 6.8833C7.32783 6.8833 6.85244 10.0464 6.85244 12.1706C6.85244 14.2857 7.32783 17.4488 9.58897 17.4488ZM9.58897 16.857C7.78067 16.857 7.5004 13.8972 7.5004 12.1706C7.5004 10.4343 7.78067 7.47511 9.58897 7.47511C11.3882 7.47511 11.6685 10.4343 11.6685 12.1706C11.6685 13.8972 11.3882 16.857 9.58897 16.857ZM16.1726 17.3771C16.3389 17.3771 16.4913 17.2246 16.4913 17.0388L16.4913 7.31563C16.4913 7.14043 16.3396 6.98096 16.1546 6.98096C15.959 6.98096 15.8059 7.07071 15.6784 7.19473L13.8308 8.7292C13.7535 8.80371 13.716 8.86348 13.716 8.97413C13.716 9.13497 13.8142 9.26104 13.9834 9.26104C14.0774 9.26104 14.1122 9.2297 14.1749 9.18721L15.8434 7.83624L15.8434 17.0388C15.8434 17.2246 15.9958 17.3771 16.1726 17.3771Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}