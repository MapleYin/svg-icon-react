import React from 'react'

export function SquareAndArrowUpCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM0.500206 12.1706C0.500206 18.5963 5.73516 23.8319 12.1608 23.8319C18.5872 23.8319 23.8312 18.5963 23.8312 12.1706C23.8312 5.73516 18.5956 0.500206 12.1602 0.500206C5.73448 0.500206 0.500206 5.73516 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.7411 9.66251L17.7411 16.6473C17.7411 17.8022 17.0464 18.4319 15.909 18.4319L8.40225 18.4319C7.24668 18.4319 6.60713 17.8015 6.60713 16.6473L6.60713 9.66251C6.60713 8.49922 7.24668 7.85059 8.40225 7.85059L10.9189 7.85059L10.9189 8.43009L8.41202 8.43009C7.56973 8.43009 7.18663 8.84181 7.18663 9.67501L7.18663 16.6264C7.18663 17.4596 7.56973 17.8538 8.41202 17.8538L15.8985 17.8538C16.7408 17.8538 17.1525 17.4226 17.1525 16.6264L17.1525 9.67501C17.1525 8.87882 16.7408 8.43009 15.8985 8.43009L13.4202 8.43009L13.4202 7.85059L15.909 7.85059C17.0652 7.85059 17.7411 8.48877 17.7411 9.66251Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1602 13.3062C12.3455 13.3062 12.4534 13.171 12.4534 13.0129L12.4534 5.39278L12.443 4.79708L13.0269 5.39278L14.4132 6.79864C14.4745 6.86065 14.5295 6.88292 14.6319 6.88292C14.8355 6.88292 14.9315 6.74981 14.9315 6.60284C14.9315 6.51084 14.8646 6.45655 14.8291 6.4127L12.3328 3.9296C12.2785 3.85713 12.2151 3.80762 12.142 3.80762C12.0772 3.80762 11.9769 3.87598 11.9596 3.9296L9.48213 6.40362C9.40967 6.47539 9.39786 6.54786 9.39786 6.60284C9.39786 6.74981 9.5128 6.86475 9.64161 6.86475C9.70772 6.86475 9.79903 6.86065 9.87921 6.78047L11.2558 5.39278L11.8871 4.79708L11.8857 5.39278L11.8857 13.0129C11.8857 13.171 11.9839 13.3062 12.1602 13.3062Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
