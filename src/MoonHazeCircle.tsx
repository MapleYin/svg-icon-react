import React from 'react'

export default function MoonHazeCircle({
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
        d='M8.25156 14.2505L16.4894 14.2505C17.0101 13.7822 17.4526 13.2016 17.7569 12.5267C17.8469 12.3727 17.8357 12.2214 17.7626 12.1476C17.6817 12.0765 17.5416 12.0381 17.3792 12.1169C16.7903 12.3311 16.1583 12.4832 15.2722 12.4832C11.8157 12.4832 9.77159 10.4055 9.77159 6.91544C9.77159 6.08311 9.91671 5.36612 10.214 4.75411C10.2864 4.58263 10.2753 4.43136 10.177 4.32052C10.0682 4.21036 9.87784 4.21739 9.69522 4.34434C7.78819 5.39376 6.48731 7.35167 6.48731 9.86163C6.48731 11.6382 7.11749 13.1852 8.25156 14.2505ZM5.87793 15.5229L20.094 15.5229C20.2837 15.5229 20.405 15.4106 20.405 15.2301C20.405 15.0404 20.2837 14.938 20.094 14.938L5.87793 14.938C5.70713 14.938 5.567 15.0593 5.567 15.2301C5.567 15.4106 5.70713 15.5229 5.87793 15.5229ZM4.23604 17.0852L18.4424 17.0852C18.632 17.0852 18.7533 16.9736 18.7533 16.7931C18.7533 16.6034 18.632 16.5003 18.4424 16.5003L4.23604 16.5003C4.06456 16.5003 3.9251 16.6223 3.9251 16.7931C3.9251 16.9736 4.06456 17.0852 4.23604 17.0852ZM5.87793 18.6391L20.094 18.6391C20.2837 18.6391 20.405 18.5359 20.405 18.3463C20.405 18.1657 20.2837 18.0542 20.094 18.0542L5.87793 18.0542C5.70713 18.0542 5.567 18.1846 5.567 18.3463C5.567 18.5359 5.70713 18.6391 5.87793 18.6391Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}