import React from 'react'

export function Macstudio({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.0146 14.4742' className={className}>
      <path
        d='M3.18125 14.4742L26.472 14.4742C28.5465 14.4742 29.6532 13.3312 29.6532 11.2859L29.6532 3.18916C29.6532 1.14395 28.5465 0.00156164 26.472 0.00156164L3.18125 0.00156164C1.10606 0.00156164 0 1.10693 0 3.18916L0 11.2859C0 13.3591 1.10606 14.4742 3.18125 14.4742ZM3.21124 13.962C1.42628 13.962 0.511533 13.0396 0.511533 11.2616L0.511533 3.21348C0.511533 1.43555 1.42628 0.513095 3.21124 0.513095L26.4329 0.513095C28.1522 0.513095 29.1417 1.43555 29.1417 3.21348L29.1417 11.2616C29.1417 13.0396 28.1522 13.962 26.4329 13.962ZM3.7668 11.2308C3.91358 11.2301 4.03536 11.1076 4.03536 10.9538L4.03536 8.15851C4.03536 8.00265 3.9129 7.88087 3.7668 7.88155C3.61231 7.88087 3.48985 8.00265 3.48985 8.15851L3.48985 10.9622C3.48985 11.1083 3.61163 11.2301 3.7668 11.2308ZM6.11388 11.2308C6.26906 11.2301 6.39084 11.1076 6.39084 10.9538L6.39084 8.15851C6.39084 8.00265 6.26837 7.88087 6.11388 7.88155C5.96778 7.88087 5.84532 8.00265 5.84532 8.15851L5.84532 10.9622C5.84532 11.1083 5.9671 11.2301 6.11388 11.2308ZM9.06202 9.82892L14.2155 9.82892C14.37 9.82892 14.4925 9.70646 14.4925 9.56036C14.4925 9.40587 14.37 9.2834 14.2155 9.2834L9.06202 9.2834C8.91593 9.2834 8.79347 9.40587 8.79347 9.56036C8.79347 9.70646 8.91593 9.82892 9.06202 9.82892ZM24.8171 10.861C25.525 10.8415 26.1066 10.2696 26.1066 9.57081C26.1066 8.86153 25.525 8.27012 24.8171 8.27012C24.1183 8.27012 23.5171 8.86153 23.5171 9.57081C23.5171 10.2696 24.1183 10.8799 24.8171 10.861Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
