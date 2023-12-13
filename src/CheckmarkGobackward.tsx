import React from 'react'

export function CheckmarkGobackward({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 29.0395' className={className}>
      <path
        d='M0 14.5428C0 21.2423 5.4711 26.7127 12.1608 26.7127C18.8604 26.7127 24.3315 21.2423 24.3315 14.5428C24.3315 8.56232 19.9476 3.55705 14.2426 2.55207L14.2426 0.386442C14.2426 0.0222788 13.9773-0.128991 13.6254 0.128823L9.92393 2.71154C9.62431 2.91847 9.62363 3.18312 9.92393 3.38234L13.6247 5.97414C13.9773 6.22356 14.2426 6.0716 14.2426 5.71652L14.2426 3.0634C19.6898 4.0552 23.8306 8.82776 23.8306 14.5428C23.8306 20.9776 18.5872 26.2132 12.1608 26.2132C5.73516 26.2132 0.498838 20.9776 0.499522 14.5428C0.500206 10.185 2.90196 6.37698 6.47168 4.36097C6.60235 4.29299 6.63916 4.13938 6.57461 4.00803C6.52051 3.90529 6.37959 3.84191 6.2371 3.93078C2.50674 6.0259 0 10 0 14.5428Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1379 20.4914C11.2442 20.4914 11.3192 20.4435 11.3979 20.3748L18.3203 9.68225C18.3376 9.63225 18.3563 9.55159 18.3563 9.50793C18.3563 9.39269 18.2354 9.25207 18.104 9.25207C18.0115 9.25207 17.9204 9.31887 17.8516 9.38615L11.1254 19.773L7.28165 15.3812C7.21915 15.3125 7.13848 15.2693 7.03555 15.2693C6.9126 15.2693 6.77764 15.3687 6.77764 15.5293C6.77764 15.6002 6.81172 15.6802 6.86807 15.7672L10.892 20.3748C10.9656 20.463 11.0218 20.4914 11.1379 20.4914Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
