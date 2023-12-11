import React from 'react'

export default function PesetasignCircle({
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
        d='M8.35185 10.2797C8.35185 10.456 8.46885 10.573 8.64443 10.573L9.33281 10.573L9.33281 17.4375C9.33281 17.6401 9.43711 17.7333 9.60206 17.7333C9.76768 17.7333 9.87833 17.6401 9.87833 17.4375L9.87833 13.4226L12.1685 13.4226C14.2227 13.4226 15.4514 12.334 15.5754 10.573L16.2899 10.573C16.4668 10.573 16.5824 10.456 16.5824 10.2797C16.5824 10.1021 16.4668 9.98643 16.2899 9.98643L15.574 9.98643C15.4466 8.23086 14.2108 7.14707 12.1685 7.14707L9.60977 7.14707C9.44346 7.14707 9.33281 7.25772 9.33281 7.43448L9.33281 9.98643L8.64443 9.98643C8.46885 9.98643 8.35185 10.1021 8.35185 10.2797ZM9.87901 12.8859L9.87901 10.573L15.0285 10.573C14.9065 12.0103 13.8614 12.8859 12.1988 12.8859ZM9.87901 9.98643L9.87901 7.69278L12.1988 7.69278C13.8489 7.69278 14.8927 8.55459 15.0265 9.98643Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}