import React from 'react'

export default function PolishzlotysignCircle({
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
        d='M7.90274 17.2419L12.4728 17.2419C12.6315 17.2419 12.7583 17.1067 12.7583 16.9486C12.7583 16.7898 12.6315 16.6638 12.4728 16.6638L8.21817 16.6638L8.21817 16.6304L12.6106 10.0271C12.7208 9.87374 12.7354 9.742 12.7354 9.64385C12.7354 9.38809 12.5688 9.20479 12.2461 9.20479L7.7876 9.20479C7.62813 9.20479 7.50205 9.33086 7.50205 9.49805C7.50205 9.65684 7.62813 9.78292 7.7876 9.78292L12.0315 9.78292L12.0315 9.80997L7.61699 16.476C7.525 16.6098 7.50205 16.6934 7.50205 16.8467C7.50205 17.1074 7.67627 17.2419 7.90274 17.2419ZM15.2091 17.2689C15.3579 17.2689 15.4783 17.1381 15.4783 16.9977L15.4783 11.4782L16.7467 10.7184C17.0732 10.5353 16.7903 10.0457 16.4659 10.2358L15.4783 10.8138L15.4783 6.24796C15.4783 6.09844 15.3579 5.97735 15.2091 5.97735C15.0616 5.97735 14.9321 6.09844 14.9321 6.24796L14.9321 11.1493L13.6468 11.8953C13.2847 12.1141 13.6024 12.5861 13.9023 12.403L14.9321 11.804L14.9321 16.9977C14.9321 17.1381 15.0616 17.2689 15.2091 17.2689Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
