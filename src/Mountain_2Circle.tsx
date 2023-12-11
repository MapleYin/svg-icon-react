import React from 'react'

export default function Mountain_2Circle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.4633 10.3935C10.7266 10.6419 11.2562 10.9724 11.7299 10.9724C12.3649 10.9724 12.8036 10.1023 13.7754 10.1023C14.7472 10.1023 15.1859 10.9724 15.8209 10.9724C16.2758 10.9724 16.8054 10.6607 17.0693 10.3935L14.3714 6.85411C14.0745 6.44639 13.4776 6.42686 13.1619 6.85411ZM6.97941 16.6271L20.5525 16.6271C21.1506 16.6271 21.4038 16.1226 21.0259 15.617L17.4402 10.8954C17.1481 11.1772 16.4868 11.5847 15.8209 11.5847C14.801 11.5847 14.4857 10.7237 13.7754 10.7237C13.065 10.7237 12.7498 11.5847 11.7299 11.5847C11.0549 11.5847 10.3838 11.1583 10.0917 10.8954L6.48722 15.617C6.12813 16.1037 6.39044 16.6271 6.97941 16.6271ZM3.75099 16.6271L5.85284 16.6271C5.62208 16.2423 5.64161 15.7146 5.99298 15.244L9.90909 10.1216L9.37794 9.44034C9.05245 9.04375 8.56026 9.04375 8.24385 9.44034L3.28946 15.6206C2.91651 16.0849 3.21583 16.6271 3.75099 16.6271Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
