import React from 'react'

export default function MicSlash({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.8355 28.208' className={className}>
      <path
        d='M2.85117 10.9L2.85117 13.1779C2.85117 17.2813 5.73701 20.253 10.2371 20.253C12.1641 20.253 13.7946 19.7103 15.0267 18.765L15.412 19.1501C14.1441 20.1491 12.4736 20.7417 10.5034 20.7942L10.5034 25.3358L15.8719 25.3358C16.0123 25.3358 16.1284 25.461 16.1284 25.6015C16.1284 25.7419 16.0123 25.8587 15.8719 25.8587L4.61211 25.8587C4.46191 25.8587 4.3458 25.7419 4.3458 25.6015C4.3458 25.461 4.46191 25.3358 4.61211 25.3358L9.98056 25.3358L9.98056 20.7942C5.31347 20.6697 2.32831 17.5158 2.32831 13.173L2.32831 10.9C2.32831 10.7596 2.44443 10.6344 2.58486 10.6344C2.72598 10.6344 2.85117 10.7596 2.85117 10.9ZM18.155 10.9L18.155 13.173C18.155 14.7797 17.7464 16.2236 16.9931 17.4101L16.6004 17.0179C17.2718 15.9364 17.6321 14.6278 17.6321 13.1779L17.6321 10.9C17.6321 10.7596 17.7482 10.6344 17.8894 10.6344C18.0298 10.6344 18.155 10.7596 18.155 10.9ZM7.00821 10.7512L7.00821 12.5855C7.00821 14.589 8.22979 16.2043 10.2371 16.2043C10.9086 16.2043 11.492 16.0251 11.969 15.7091L12.3376 16.0774C11.7652 16.4733 11.0558 16.6979 10.2371 16.6979C7.92734 16.6979 6.48535 14.8964 6.48535 12.5855L6.48535 10.2286ZM13.998 4.10333L13.998 12.5855C13.998 13.1497 13.912 13.6836 13.747 14.1675L13.3251 13.7461C13.4247 13.383 13.4751 12.9922 13.4751 12.5855L13.4751 4.10333C13.4751 2.09981 12.2535 0.484481 10.2371 0.484481C8.22979 0.484481 7.00821 2.09981 7.00821 4.10333L7.00821 7.43598L6.48535 6.91368L6.48535 4.10333C6.48535 1.79238 7.92734 0 10.2371 0C12.556 0 13.998 1.79238 13.998 4.10333Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.4488 21.9053C19.5531 22.0096 19.727 22.0096 19.8306 21.9053C19.953 21.7821 19.9356 21.6278 19.8306 21.5229L1.69258 3.40439C1.60644 3.31825 1.44169 3.28124 1.31855 3.40439C1.20585 3.508 1.20585 3.68252 1.31855 3.78613Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}