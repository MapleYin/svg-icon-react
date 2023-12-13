import React from 'react'

export function EnvelopeCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.2153 13.1105C12.4288 13.1105 12.6241 13.0604 12.8655 12.8294L19.0765 7.20489C18.8262 7.03614 18.4732 6.93848 18.0479 6.93848L6.36465 6.93848C5.93926 6.93848 5.6045 7.01729 5.35557 7.18604L11.5651 12.8294C11.8156 13.0604 12.0025 13.1105 12.2153 13.1105ZM4.9917 16.7733L9.83858 11.9628L4.97217 7.55176C4.82071 7.80723 4.7251 8.18467 4.7251 8.56758L4.7251 15.7646C4.7251 16.1733 4.82002 16.502 4.9917 16.7733ZM6.38165 17.4027L18.0309 17.4027C18.5164 17.4027 18.8212 17.2856 19.0374 17.1475L14.2103 12.3028L13.2301 13.186C12.8772 13.4901 12.5689 13.6275 12.2153 13.6275C11.8708 13.6275 11.5535 13.4901 11.202 13.186L10.2295 12.3028L5.39327 17.1475C5.61856 17.3044 5.8961 17.4027 6.38165 17.4027ZM19.4397 16.7545C19.6106 16.502 19.6965 16.1545 19.6965 15.7646L19.6965 8.56758C19.6965 8.18467 19.61 7.86309 19.4403 7.56993L14.5921 11.9628Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
