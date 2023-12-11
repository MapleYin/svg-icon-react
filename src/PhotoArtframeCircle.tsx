import React from 'react'

export default function PhotoArtframeCircle({
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
        d='M4.68389 6.14229C4.41544 6.14229 4.246 6.31241 4.246 6.58087L4.246 17.752C4.246 18.0204 4.41544 18.1912 4.68389 18.1912L19.6462 18.1912C19.9056 18.1912 20.0841 18.0204 20.0841 17.752L20.0841 6.58087C20.0841 6.31241 19.9056 6.14229 19.6462 6.14229ZM4.83839 17.4244L4.83839 6.90841C4.83839 6.81983 4.90401 6.74513 5.00235 6.74513L19.3277 6.74513C19.4261 6.74513 19.491 6.81983 19.491 6.90841L19.491 17.4244C19.491 17.5137 19.4261 17.5877 19.3277 17.5877L5.00235 17.5877C4.90401 17.5877 4.83839 17.5137 4.83839 17.4244ZM5.37872 16.6994C5.37872 16.9002 5.51749 17.039 5.73644 17.039L18.5839 17.039C18.8035 17.039 18.9507 16.9002 18.9507 16.6994L18.9507 7.63341C18.9507 7.43331 18.8035 7.29454 18.5839 7.29454L5.73644 7.29454C5.51749 7.29454 5.37872 7.43331 5.37872 7.63341ZM6.00489 15.1235L6.00489 7.83126C6.00489 7.81876 5.96857 7.90187 5.93292 7.90187L18.3965 7.90187C18.3531 7.90187 18.3154 7.81876 18.3154 7.83126L18.3154 15.0236L15.1778 12.1617C14.852 11.8645 14.5227 11.7207 14.1109 11.7207C13.716 11.7207 13.4069 11.8722 13.0895 12.1513L10.5101 14.4704L9.4586 13.4978C9.21651 13.2564 8.92559 13.0847 8.5795 13.0847C8.21593 13.0847 7.99132 13.2564 7.73106 13.4873ZM8.09259 10.6027C8.09259 11.4603 8.78682 12.1273 9.61778 12.1273C10.4481 12.1273 11.1339 11.4603 11.1339 10.6027C11.1339 9.77179 10.4481 9.08663 9.61778 9.08663C8.78682 9.08663 8.09259 9.77179 8.09259 10.6027Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
