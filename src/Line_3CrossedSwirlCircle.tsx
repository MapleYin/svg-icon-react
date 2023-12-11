import React from 'react'

export default function Line_3CrossedSwirlCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M7.4251 11.1571C9.05957 11.1571 10.4031 11.5562 12.1757 12.6276C13.4982 13.4196 15.2065 14.2731 17.5318 14.2731C19.9994 14.2731 22.2194 13.2765 24.005 11.3746L23.9363 10.7183C22.1917 12.6927 20.0246 13.7706 17.5318 13.7706C15.329 13.7706 13.762 12.9806 12.4363 12.1975C11.1326 11.4236 9.60098 10.6456 7.4251 10.6456C4.60176 10.6456 2.19082 12.0663 0.373735 14.6327L0.634478 15.1714C2.4043 12.5427 4.73575 11.1571 7.4251 11.1571ZM10.7787 7.26583C11.6054 8.67706 11.8886 10.0199 11.8781 12.1141C11.867 13.6492 11.9692 15.544 13.1225 17.5679C14.3927 19.7672 16.4609 21.2139 19.1138 21.7851L19.6923 21.3842C16.9881 20.9173 14.8683 19.5485 13.5729 17.3079C12.476 15.403 12.3694 13.6594 12.3897 12.1154C12.4001 10.5984 12.3167 8.89014 11.2284 7.01494C9.87237 4.66348 7.55772 3.28945 4.6006 2.93467L4.07188 3.40391C7.15322 3.63966 9.42881 4.99024 10.7787 7.26583ZM15.8275 8.22344C15.0197 9.61514 14.0166 10.5401 12.1764 11.5914C10.8504 12.3443 9.2457 13.3856 8.07363 15.4012C6.71963 17.7388 6.56699 20.4252 7.58711 23.1891L8.21475 23.3634C7.10782 20.6463 7.18184 18.0107 8.52403 15.6605C9.62999 13.7479 11.0981 12.7949 12.4356 12.0418C13.7435 11.298 15.189 10.3593 16.2779 8.48341C17.56 6.25206 17.6638 3.72569 16.6557 1.14073L16.0287 0.938284C17.1516 3.56026 17.0859 6.04844 15.8275 8.22344ZM12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}