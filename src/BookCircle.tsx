import React from 'react'

export default function BookCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.91543 6.6962C7.52373 6.6962 5.99942 7.25489 5.33946 8.28165C5.28926 8.38975 5.25225 8.42178 5.25225 8.54444L5.25225 17.3829C5.25225 17.4804 5.32676 17.564 5.44376 17.564C5.53507 17.564 5.57052 17.534 5.63253 17.4727C6.35518 16.7464 7.46026 16.3494 8.82579 16.3494C9.81504 16.3494 10.738 16.7157 11.4858 17.3834C11.5633 17.4238 11.6128 17.4629 11.7 17.4629C11.7906 17.4629 11.8513 17.3827 11.8513 17.2739L11.8513 8.22784C11.8513 8.1002 11.8331 8.01573 11.7711 7.94122C10.9638 7.08389 10.0167 6.6962 8.91543 6.6962ZM15.4063 6.6962C14.3322 6.6962 13.3761 7.08389 12.5499 7.94122C12.4886 8.01573 12.4788 8.1002 12.4788 8.22784L12.4788 17.2739C12.4788 17.3827 12.5401 17.4629 12.6308 17.4629C12.7271 17.4629 12.7766 17.4238 12.854 17.3834C13.6025 16.7157 14.5073 16.3494 15.5043 16.3494C16.8984 16.3494 18.0035 16.7464 18.6976 17.4727C18.7505 17.534 18.795 17.564 18.8863 17.564C19.0033 17.564 19.0694 17.4804 19.0694 17.3829L19.0694 8.54444C19.0694 8.42178 19.0317 8.38907 18.9906 8.28165C18.3216 7.25489 16.7973 6.6962 15.4063 6.6962Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
