import React from 'react'

export default function RtCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.6959 17.3058C6.89424 17.3058 7.01534 17.1645 7.01534 16.9745L7.01534 12.7739L9.05391 12.7739L10.9338 17.1063C11.009 17.2621 11.1071 17.3058 11.2469 17.3058C11.4545 17.3058 11.572 17.1531 11.572 16.9968C11.572 16.9425 11.5672 16.882 11.5422 16.8377L9.67823 12.5956C10.712 12.2799 11.4832 11.3796 11.4832 9.8501C11.4832 8.15899 10.5202 7.0003 8.73262 7.0003L6.68614 7.0003C6.47734 7.0003 6.36601 7.12208 6.36601 7.33087L6.36601 16.9745C6.36601 17.1638 6.51436 17.3058 6.6959 17.3058ZM7.01534 12.1624L7.01534 7.59913L8.66719 7.59913C9.96572 7.59913 10.8332 8.35812 10.8332 9.86192C10.8332 11.1988 10.1535 12.1624 8.67696 12.1624ZM15.6334 17.3693C15.8179 17.3693 15.9522 17.2357 15.9522 17.059L15.9522 7.66681L17.9177 7.66681C18.089 7.66681 18.2185 7.53731 18.2185 7.36534C18.2185 7.19405 18.089 7.06456 17.9177 7.06456L13.0503 7.06456C12.8783 7.06456 12.7579 7.19405 12.7579 7.36534C12.7579 7.53731 12.8783 7.66681 13.0503 7.66681L15.3133 7.66681L15.3133 17.059C15.3133 17.2357 15.4566 17.3693 15.6334 17.3693Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}