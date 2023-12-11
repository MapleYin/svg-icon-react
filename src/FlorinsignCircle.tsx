import React from 'react'

export default function FlorinsignCircle({
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
        d='M9.40166 17.4892C10.8185 17.4892 11.5973 16.7047 11.9384 14.9277L12.4966 11.9704L15.5027 11.9704C15.674 11.9704 15.7903 11.8541 15.7903 11.6842C15.7903 11.5129 15.674 11.3966 15.5027 11.3966L12.6011 11.3966L12.959 9.48252C13.2011 8.03067 13.8018 7.37549 14.9325 7.37549C15.2673 7.37549 15.5339 7.46065 15.711 7.52696C15.8555 7.57442 15.935 7.59395 16.0263 7.59395C16.1717 7.59395 16.2698 7.49444 16.2698 7.34405C16.2698 7.20342 16.166 7.08711 16.0129 7.01396C15.7283 6.87861 15.3091 6.82978 14.9375 6.82978C13.5207 6.82978 12.7419 7.61426 12.4001 9.39121L12.0317 11.3966L9.11553 11.3966C8.94424 11.3966 8.82793 11.5129 8.82793 11.6842C8.82793 11.8541 8.92539 11.9704 9.11553 11.9704L11.9279 11.9704L11.3809 14.8428C11.1388 16.296 10.529 16.9435 9.40664 16.9435C9.07188 16.9435 8.80528 16.8583 8.62813 16.7913C8.48369 16.7439 8.4042 16.725 8.31289 16.725C8.1584 16.725 8.06025 16.8238 8.06025 16.984C8.06025 17.1239 8.16406 17.2409 8.31719 17.3141C8.61084 17.4403 9.03008 17.4892 9.40166 17.4892Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
