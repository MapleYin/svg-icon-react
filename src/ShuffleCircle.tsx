import React from 'react'

export default function ShuffleCircle({
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
        d='M4.76387 15.6878C4.76387 15.8598 4.87451 15.9879 5.03946 15.9879L6.6628 15.9879C7.69434 15.9879 8.30528 15.6831 9.0711 14.7722L12.9717 10.1063C13.6555 9.26055 14.111 8.96261 15.053 8.96261L16.1942 8.96261L16.1942 10.6742C16.1942 10.8707 16.3001 10.9863 16.4407 10.9863C16.525 10.9863 16.6184 10.955 16.7076 10.8839L19.3439 8.90782C19.5453 8.75518 19.546 8.42676 19.3445 8.27413L16.7069 6.30508C16.617 6.22559 16.5243 6.19493 16.4407 6.19493C16.2994 6.19493 16.1942 6.31895 16.1942 6.50635L16.1942 8.37149L15.0594 8.37149C14.0188 8.37149 13.4169 8.66719 12.6511 9.58721L8.75117 14.2531C8.05762 15.0904 7.51895 15.3877 6.65508 15.3877L5.03946 15.3877C4.89405 15.3877 4.76387 15.5347 4.76387 15.6878ZM4.76387 8.66251C4.76387 8.82471 4.89405 8.96261 5.03946 8.96261L6.65508 8.96261C7.51895 8.96261 8.0583 9.26055 8.75117 10.1063L12.6511 14.7722C13.4169 15.6831 14.0188 15.9879 15.0594 15.9879L16.1942 15.9879L16.1942 17.8369C16.1942 18.0334 16.2994 18.1483 16.4407 18.1483C16.5243 18.1483 16.617 18.1177 16.7069 18.0473L19.3439 16.0698C19.546 15.9172 19.546 15.5895 19.3445 15.4368L16.7076 13.4691C16.6184 13.3883 16.525 13.366 16.4407 13.366C16.3001 13.366 16.1942 13.4816 16.1942 13.669L16.1942 15.3877L15.053 15.3877C14.111 15.3877 13.6555 15.0897 12.9717 14.2531L9.0711 9.58721C8.30528 8.66719 7.69434 8.37149 6.6628 8.37149L5.03946 8.37149C4.87451 8.37149 4.76387 8.49961 4.76387 8.66251Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
