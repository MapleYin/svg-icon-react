import React from 'react'

export default function PopcornCircle({
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
        d='M10.1855 9.41153C10.6158 8.71182 11.388 8.29532 12.1595 8.29532C12.9316 8.29532 13.7038 8.71182 14.1433 9.41153C14.4892 8.75635 15.1623 8.3628 15.9283 8.3628C16.4677 8.3628 16.9596 8.54356 17.3293 8.87715C17.5058 8.63936 17.623 8.32481 17.623 7.95372C17.623 7.02754 16.8569 6.29444 15.9446 6.29375C15.8472 5.66036 15.2946 5.19571 14.6403 5.19571C14.2197 5.19571 13.848 5.3876 13.5913 5.67989C13.3156 5.5668 12.9625 5.56612 12.6212 5.65127C12.4218 4.99971 11.8456 4.56368 11.1815 4.56368C10.5143 4.56368 9.92969 4.93458 9.80342 5.44444C9.14122 5.2755 8.47335 5.72471 8.47335 6.54971C7.66504 6.54834 6.99483 7.2919 6.99483 8.0918C6.99483 8.34776 7.04434 8.56602 7.11749 8.77589C7.48721 8.50655 7.92461 8.3628 8.40039 8.3628C9.15733 8.3628 9.83955 8.75635 10.1855 9.41153ZM9.60909 19.8177L10.6948 19.8177L9.83252 10.38C9.7544 9.50518 9.16573 8.9756 8.40039 8.9756C7.45225 8.9756 6.69825 9.74727 6.9417 11.0113L8.42989 18.9107C8.54004 19.5124 8.90479 19.8177 9.60909 19.8177ZM11.3342 19.8177L12.9855 19.8177L13.8198 10.7381C13.9175 9.64298 13.054 8.90811 12.1595 8.90811C11.2747 8.90811 10.4112 9.64298 10.5089 10.7381ZM14.7196 19.8177C15.4239 19.8177 15.7887 19.5124 15.8988 18.9107L17.387 11.0113C17.6305 9.74727 16.8765 8.9756 15.9283 8.9756C15.163 8.9756 14.5743 9.50518 14.4871 10.38L13.6248 19.8177Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}