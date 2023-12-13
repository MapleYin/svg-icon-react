import React from 'react'

export function BahtsignCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.0524 19.0498C12.1923 19.0498 12.3261 18.9342 12.3261 18.7384L12.3261 17.4655L12.7044 17.4655C14.9287 17.4655 16.2839 16.3699 16.2839 14.697C16.2839 13.4283 15.407 12.484 14.2179 12.1206C15.1826 11.6896 15.7538 10.7759 15.7538 9.72959C15.7538 8.2127 14.4906 7.14639 12.6122 7.14639L12.3261 7.14639L12.3261 6.079C12.3261 5.8832 12.1923 5.76758 12.0524 5.76758C11.9124 5.76758 11.7598 5.8832 11.7598 6.079L11.7598 7.14639L9.63477 7.14639C9.43643 7.14639 9.30215 7.2709 9.30215 7.46084L9.30215 17.1511C9.30215 17.3417 9.44483 17.4655 9.63477 17.4655L11.7598 17.4655L11.7598 18.7384C11.7598 18.9342 11.9124 19.0498 12.0524 19.0498ZM9.83653 16.9212L9.83653 12.4205L11.7598 12.4205L11.7598 16.9205ZM12.3261 16.9198L12.3261 12.4212C14.5353 12.4078 15.7313 13.2458 15.7313 14.7026C15.7313 16.1238 14.6274 16.9255 12.3261 16.9198ZM9.81837 11.8769L9.83653 7.66212L11.7598 7.66212L11.7598 11.8769ZM12.3261 11.8825L12.3261 7.6544C14.1523 7.65079 15.1733 8.40225 15.1733 9.68194C15.1733 11.0182 14.19 11.8911 12.3261 11.8825Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
