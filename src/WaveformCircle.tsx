import React from 'react'

export default function WaveformCircle({
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
        d='M18.5287 15.0584C18.7007 15.0584 18.8113 14.9478 18.8113 14.7849L18.8113 9.49913C18.8113 9.33624 18.7007 9.22628 18.5287 9.22628C18.3567 9.22628 18.2552 9.32784 18.2552 9.49913L18.2552 14.7849C18.2552 14.9562 18.3567 15.0584 18.5287 15.0584Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.9701 17.2744C16.1421 17.2744 16.2527 17.1631 16.2527 16.9918L16.2527 7.29219C16.2527 7.1209 16.1421 7.01026 15.9701 7.01026C15.7988 7.01026 15.6966 7.1209 15.6966 7.29219L15.6966 16.9918C15.6966 17.1631 15.7988 17.2744 15.9701 17.2744Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.4297 15.6298C13.6017 15.6298 13.713 15.5191 13.713 15.3478L13.713 8.93614C13.713 8.76485 13.6017 8.65421 13.4297 8.65421C13.2584 8.65421 13.1568 8.76485 13.1568 8.93614L13.1568 15.3478C13.1568 15.5191 13.2584 15.6298 13.4297 15.6298Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.8718 19.732C11.0431 19.732 11.1544 19.6214 11.1544 19.4494L11.1544 4.8171C11.1544 4.64513 11.0431 4.5338 10.8718 4.5338C10.7089 4.5338 10.5982 4.64513 10.5982 4.8171L10.5982 19.4494C10.5982 19.6221 10.7082 19.732 10.8718 19.732Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.33204 16.8101C8.50333 16.8101 8.61466 16.6987 8.61466 16.5268L8.61466 7.75655C8.61466 7.58526 8.50333 7.47462 8.33204 7.47462C8.16914 7.47462 8.0585 7.58526 8.0585 7.75655L8.0585 16.5268C8.0585 16.6987 8.16914 16.8101 8.33204 16.8101Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.78184 13.943C5.94473 13.943 6.05606 13.8407 6.05606 13.6694L6.05606 10.6146C6.05606 10.4433 5.94473 10.3417 5.78184 10.3417C5.61055 10.3417 5.4999 10.4433 5.4999 10.6146L5.4999 13.6694C5.4999 13.8407 5.60215 13.943 5.78184 13.943Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
