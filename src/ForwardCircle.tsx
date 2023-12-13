import React from 'react'

export function ForwardCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.7238 16.8735C13.894 16.8735 14.0893 16.7682 14.2231 16.695L21.0488 12.6815C21.2194 12.5847 21.3491 12.4202 21.3491 12.1622C21.3491 11.9314 21.2194 11.767 21.0488 11.6702L14.2231 7.65665C14.0893 7.57442 13.894 7.47813 13.7238 7.47813C13.4304 7.47813 13.1138 7.70958 13.1138 8.21651L13.1138 16.1352C13.1138 16.6421 13.4304 16.8735 13.7238 16.8735ZM5.52755 16.8735C5.67882 16.8735 5.89298 16.7682 6.02608 16.695L12.8337 12.6815C13.0225 12.5847 13.1528 12.4202 13.1528 12.1622C13.1528 11.9314 13.0225 11.767 12.8337 11.6702L6.02608 7.65665C5.89298 7.57442 5.67882 7.47813 5.52755 7.47813C5.21524 7.47813 4.91749 7.70958 4.91749 8.21651L4.91749 16.1352C4.91749 16.6421 5.21524 16.8735 5.52755 16.8735Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
