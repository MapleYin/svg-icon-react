import React from 'react'

export default function N4AltCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.34092 14.5325C8.34092 14.7245 8.4752 14.84 8.7083 14.84L13.7666 14.84L13.7666 17.5443C13.7666 17.7481 13.8779 17.8538 14.049 17.8538C14.2215 17.8538 14.3328 17.7488 14.3328 17.5443L14.3328 14.84L15.8913 14.84C16.0617 14.84 16.1919 14.7286 16.1919 14.5512C16.1919 14.3681 16.0617 14.2574 15.8913 14.2574L14.3328 14.2574L14.3328 10.8051C14.3328 10.6006 14.2215 10.4963 14.049 10.4963C13.8779 10.4963 13.7666 10.6013 13.7666 10.8051L13.7666 14.2574L9.08253 14.2574C10.0861 12.2947 12.0745 9.11026 13.2094 6.98907C13.2428 6.94044 13.2469 6.88341 13.2469 6.81729C13.2469 6.68731 13.1739 6.55235 12.9658 6.55235C12.8427 6.55235 12.7802 6.62823 12.7211 6.72549C11.5767 8.646 9.59961 12.0396 8.43564 14.2011C8.34433 14.3726 8.34092 14.4525 8.34092 14.5325Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}