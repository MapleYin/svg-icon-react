import React from 'react'

export default function CameraAperture({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 18.2061C15.4369 18.2061 18.197 15.4467 18.197 12.1706C18.197 8.89453 15.4369 6.13447 12.1608 6.13447C8.8666 6.13447 6.12539 8.89453 6.12539 12.1706C6.12539 15.4467 8.88477 18.2061 12.1608 18.2061ZM12.1608 17.6571C9.18673 17.6571 6.66524 15.1447 6.66524 12.1706C6.66524 9.18741 9.18673 6.67433 12.1608 6.67433C15.144 6.67433 17.6571 9.18741 17.6571 12.1706C17.6571 15.1447 15.144 17.6571 12.1608 17.6571ZM8.91408 17.2189L9.18401 16.7472L0.442094 11.7044L0.163087 12.1761ZM14.9913 17.4927L14.7214 17.0392L5.92363 22.1189L6.19356 22.5816ZM18.1781 12.3718L17.6571 12.3529L17.6578 22.4657L18.1781 22.4657ZM15.4167 7.07558L15.1384 7.54795L23.8894 12.5991L24.1586 12.1274ZM9.34989 6.82062L9.61913 7.2923L18.4169 2.21319L18.147 1.74082ZM6.12539 11.9136L6.66524 11.9318L6.66524 1.83779L6.14424 1.83779ZM12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}