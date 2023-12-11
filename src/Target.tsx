import React from 'react'

export default function Target({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8306 5.73516 23.8312 12.1706C23.8228 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1608 20.1589C16.5177 20.1589 20.14 16.5261 20.14 12.1888C20.14 7.82354 16.5072 4.19073 12.1608 4.19073C7.80469 4.19073 4.19073 7.82354 4.19073 12.1888C4.19073 16.5261 7.82422 20.1589 12.1608 20.1589ZM12.1608 19.6474C8.10011 19.6474 4.69386 16.2502 4.69386 12.1888C4.69386 8.10782 8.08966 4.70226 12.1608 4.70226C16.2223 4.70226 19.6285 8.10851 19.6285 12.1888C19.6285 16.2418 16.2229 19.6474 12.1608 19.6474Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1615 15.9478C14.2161 15.9478 15.9394 14.235 15.9394 12.1881C15.9394 10.1153 14.2161 8.41163 12.1615 8.41163C10.0972 8.41163 8.3837 10.1153 8.3837 12.1881C8.3837 14.235 10.116 15.9478 12.1615 15.9478Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
