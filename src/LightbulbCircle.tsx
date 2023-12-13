import React from 'react'

export function LightbulbCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.82149 8.5001C7.82149 10.7801 9.51866 11.6167 9.73623 16.4688C9.75577 16.6759 9.91202 16.786 10.0905 16.786L14.2382 16.786C14.409 16.786 14.5736 16.6759 14.5932 16.4688C14.8101 11.6167 16.4988 10.7744 16.4988 8.49444C16.4988 6.38594 14.5925 4.48848 12.1686 4.48848C9.73623 4.48848 7.82149 6.39161 7.82149 8.5001ZM10.0526 18.0879L14.2677 18.0879C14.4398 18.0879 14.573 17.9548 14.573 17.7826C14.573 17.6188 14.4398 17.4773 14.2677 17.4773L10.0526 17.4773C9.88956 17.4773 9.75645 17.6188 9.75645 17.7826C9.75645 17.9548 9.88956 18.0879 10.0526 18.0879ZM12.1602 19.8248C13.0677 19.8248 13.8616 19.4049 13.9307 18.7792L10.3994 18.7792C10.4489 19.4049 11.261 19.8248 12.1602 19.8248Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
