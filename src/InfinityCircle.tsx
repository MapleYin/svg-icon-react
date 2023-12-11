import React from 'react'

export default function InfinityCircle({
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
        d='M3.95039 12.1706C3.95039 14.2126 5.3628 15.6486 7.32393 15.6486C8.53418 15.6486 9.44786 15.0207 10.5507 14.0135L12.1797 12.5262L13.7898 14.0135C15.0323 15.1792 15.8901 15.6486 17.0166 15.6486C18.9868 15.6486 20.4278 14.2126 20.4278 12.1706C20.4278 10.1188 18.9868 8.65488 17.0166 8.65488C15.9083 8.65488 15.0596 9.13408 13.7898 10.3187L12.1797 11.8144L10.5507 10.3187C9.43946 9.31074 8.53487 8.67373 7.32393 8.65488C5.3628 8.65488 3.95039 10.1188 3.95039 12.1706ZM4.5086 12.1706C4.5086 10.4565 5.67315 9.21309 7.32393 9.21309C8.24844 9.23194 8.97539 9.61846 10.1665 10.6867L11.7935 12.1706L10.1665 13.6266C9.09688 14.5733 8.35108 15.0904 7.32393 15.0904C5.67315 15.0904 4.5086 13.875 4.5086 12.1706ZM12.5471 12.1706L14.174 10.6867C15.3651 9.61846 16.0921 9.23194 17.0166 9.21309C18.6674 9.21309 19.8689 10.4565 19.8689 12.1706C19.8689 13.8568 18.6862 15.0904 17.0166 15.0904C15.9895 15.0904 15.2437 14.5733 14.174 13.6266Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}