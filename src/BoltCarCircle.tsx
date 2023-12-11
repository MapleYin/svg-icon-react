import React from 'react'

export default function BoltCarCircle({
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
        d='M4.99815 16.8287C4.99815 17.2584 5.33995 17.6002 5.76963 17.6002L6.48184 17.6002C6.91153 17.6002 7.25333 17.2584 7.25333 16.8287L7.25333 15.8249C8.66251 15.903 10.6479 15.9707 12.1608 15.9707C13.6927 15.9707 15.6773 15.903 17.0774 15.8249L17.0774 16.8287C17.0774 17.2584 17.4283 17.6002 17.8671 17.6002L18.5514 17.6002C19.009 17.6002 19.3417 17.2584 19.3417 16.8287L19.3417 13.4603C19.3417 12.3084 19.0263 11.7797 18.5897 11.1967L18.019 10.4418C17.7756 9.27608 17.3486 8.06221 17.1442 7.58643C16.8038 6.87696 16.1529 6.57852 15.4911 6.48086C15.0544 6.43203 13.5544 6.40205 12.1608 6.40205C10.7945 6.40205 9.29454 6.43203 8.85782 6.48086C8.18692 6.57784 7.54512 6.87696 7.20469 7.58643C6.99122 8.06221 6.5545 9.27608 6.32149 10.4418L5.75919 11.1967C5.31358 11.7797 4.99815 12.3084 4.99815 13.4603ZM10.2651 11.5256C10.2651 11.4754 10.2763 11.4343 10.3258 11.3841L12.9375 7.97637C13.0706 7.79307 13.2866 7.91436 13.2135 8.12901L12.3128 10.4682L13.913 10.4682C13.9855 10.4682 14.0475 10.5022 14.0475 10.5845C14.0475 10.6256 14.0266 10.6765 13.9777 10.7351L11.3667 14.1246C11.2336 14.3079 11.0357 14.1853 11.1173 13.9797L12.0096 11.6224L10.3996 11.6224C10.3272 11.6224 10.2651 11.5974 10.2651 11.5256Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
