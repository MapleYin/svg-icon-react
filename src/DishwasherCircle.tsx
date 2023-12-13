import React from 'react'

export function DishwasherCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.7338 5.07149L7.60059 5.07149C6.83975 5.07149 6.33555 5.63223 6.33555 6.47755L6.33555 8.55938L17.9988 8.55938L17.9988 6.47755C17.9988 5.63223 17.4946 5.07149 16.7338 5.07149ZM8.63653 7.71514C8.25459 7.73711 7.90313 7.44551 7.88048 7.04473C7.85851 6.6628 8.16827 6.3211 8.5502 6.29005C8.94122 6.26671 9.27452 6.57716 9.29649 6.95909C9.32822 7.35987 9.02822 7.6918 8.63653 7.71514ZM10.5021 7.6671C10.133 7.6671 9.86026 7.37549 9.86026 6.99805C9.86026 6.64717 10.133 6.33672 10.5021 6.33672C10.8613 6.33672 11.1523 6.64717 11.1523 6.99805C11.1523 7.37549 10.8613 7.6671 10.5021 7.6671ZM6.33555 17.1198L17.9988 17.1198L17.9988 9.18126L6.33555 9.18126ZM10.6124 10.7936C10.4346 10.7936 10.2881 10.6464 10.2881 10.4776C10.2881 10.2998 10.4346 10.1533 10.6124 10.1533L13.8428 10.1533C14.0213 10.1533 14.1489 10.2998 14.1489 10.4776C14.1489 10.6464 14.0213 10.7936 13.8428 10.7936ZM17.9988 17.7326L6.33555 17.7326L6.33555 17.8603C6.33555 18.7056 6.83975 19.2663 7.60059 19.2663L16.7338 19.2663C17.4946 19.2663 17.9988 18.7056 17.9988 17.8603Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
