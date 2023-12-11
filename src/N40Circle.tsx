import React from 'react'

export default function N40Circle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.63057 17.3693C9.80459 17.3693 9.93751 17.1867 9.93751 17.0415L9.93751 14.76L10.8288 14.76C11.0126 14.76 11.1366 14.65 11.1366 14.4599C11.1366 14.2893 10.977 14.1793 10.8288 14.1793L9.93751 14.1793L9.93751 7.42696C9.93751 6.99991 9.65606 6.90762 9.46152 6.90762C9.13505 6.90762 8.98261 7.10821 8.82382 7.42013L5.54619 13.8317C5.46055 14.0071 5.41943 14.1541 5.41943 14.3149C5.41943 14.5705 5.59072 14.76 5.90215 14.76L9.31387 14.76L9.31387 17.0415C9.31387 17.2181 9.42363 17.3693 9.63057 17.3693ZM9.30683 14.1723L6.0419 14.1723L6.0419 14.1493L9.25801 7.76261L9.30683 7.76261ZM15.3648 17.4488C17.6259 17.4488 18.102 14.2857 18.102 12.1706C18.102 10.0464 17.6259 6.8833 15.3648 6.8833C13.1036 6.8833 12.6282 10.0464 12.6282 12.1706C12.6282 14.2857 13.1036 17.4488 15.3648 17.4488ZM15.3648 16.857C13.5655 16.857 13.2853 13.8972 13.2853 12.1706C13.2853 10.4343 13.5655 7.47511 15.3648 7.47511C17.1737 7.47511 17.4533 10.4343 17.4533 12.1706C17.4533 13.8972 17.1737 16.857 15.3648 16.857Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
