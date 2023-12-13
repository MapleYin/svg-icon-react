import React from 'react'

export function DocOnDoc({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.2298 30.6055' className={className}>
      <path
        d='M16.1464 0.605375L24.2631 8.71005C24.7403 9.17959 24.8685 9.53945 24.8685 9.97823L24.8685 21.7037C24.8685 23.7782 23.7631 24.885 21.6809 24.885L18.774 24.885L18.774 24.3734L21.6565 24.3734C23.4345 24.3734 24.3569 23.4496 24.3569 21.6744L24.3569 9.80645L16.8836 9.80645C15.8622 9.80645 15.3609 9.40782 15.3609 8.28379L15.3609 0.511533L9.30704 0.511533C7.52843 0.511533 6.60597 1.50098 6.60597 3.21124L6.60597 5.7087L6.09443 5.7087L6.09443 3.18125C6.09443 1.10674 7.2375 0 9.28272 0L14.8626 0C15.317 0 15.6712 0.129493 16.1464 0.605375ZM15.8979 8.33096C15.8979 9.01064 16.1574 9.26953 16.8364 9.26953L24.0412 9.26953L15.8979 1.13888Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 27.4124C0 29.4876 1.10537 30.5937 3.1876 30.5937L15.5864 30.5937C17.6687 30.5937 18.774 29.4869 18.774 27.4124L18.774 16.3534C18.774 15.5704 18.6164 15.199 18.1441 14.7352L9.73624 6.3295C9.26739 5.85928 8.9003 5.7087 8.10098 5.7087L3.1876 5.7087C1.14307 5.7087 0 6.81612 0 8.88995ZM0.511533 27.374L0.511533 8.91993C0.511533 7.20968 1.43399 6.22023 3.2126 6.22023L8.84433 6.22023L8.84433 14.4007C8.84433 15.5134 9.39648 15.972 10.4156 15.972L18.2625 15.972L18.2625 27.374C18.2625 29.1583 17.34 30.0821 15.5614 30.0821L3.21192 30.0821C1.43399 30.0821 0.511533 29.1583 0.511533 27.374ZM10.4293 15.4491C9.66377 15.4491 9.36719 15.1525 9.36719 14.387L9.36719 6.71622L18.1023 15.4491Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
