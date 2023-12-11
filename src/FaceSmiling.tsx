import React from 'react'

export default function FaceSmiling({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1602 18.1384C14.5022 18.1384 16.1685 16.4546 16.1685 15.7628C16.1685 15.6263 16.0319 15.6272 15.9708 15.6989C15.2833 16.4274 13.9221 17.0211 12.1602 17.0211C10.3982 17.0211 9.05586 16.4086 8.3502 15.6989C8.28838 15.6272 8.16094 15.6263 8.16094 15.7628C8.16094 16.4546 9.82793 18.1384 12.1602 18.1384ZM8.34659 10.9002C8.95391 10.9002 9.51944 10.2425 9.51944 9.45733C9.51944 8.68125 8.97276 8.02285 8.34659 8.02285C7.71202 8.02285 7.18487 8.68125 7.18487 9.45733C7.18487 10.2425 7.73086 10.9002 8.34659 10.9002ZM15.9828 10.9002C16.5908 10.9002 17.1466 10.2425 17.1466 9.45733C17.1466 8.68125 16.609 8.02285 15.9828 8.02285C15.3573 8.02285 14.8029 8.68125 14.8029 9.45733C14.8029 10.2425 15.3671 10.9002 15.9828 10.9002Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}