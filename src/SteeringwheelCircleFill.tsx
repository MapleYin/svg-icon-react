import React from 'react'

export function SteeringwheelCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.1208 12.1706C5.1208 16.0345 8.28858 19.2023 12.1615 19.2023C16.0352 19.2023 19.2029 16.0345 19.2029 12.1706C19.2029 8.29697 16.0352 5.1292 12.1608 5.1292C8.28789 5.1292 5.1208 8.29697 5.1208 12.1706ZM10.3633 18.0482C10.3444 18.2545 10.217 18.3597 10.0017 18.2852C7.93301 17.55 6.32335 15.7723 5.82667 13.5619C5.78282 13.3977 5.81534 13.2568 6.02022 13.2505C8.62686 13.2272 10.7075 15.5227 10.3633 18.0482ZM18.4957 13.5619C17.999 15.7723 16.3894 17.55 14.3207 18.2852C14.1054 18.3597 13.9779 18.2545 13.9598 18.0482C13.6337 15.5604 15.6773 13.2272 18.3015 13.2505C18.5161 13.2568 18.5402 13.3977 18.4957 13.5619ZM13.5892 12.9091C13.5892 13.7063 12.958 14.3186 12.1427 14.3186C11.3644 14.3186 10.7339 13.7063 10.7339 12.9091C10.7339 12.1112 11.3644 11.4724 12.1427 11.4724C12.958 11.4724 13.5892 12.1112 13.5892 12.9091ZM18.2258 9.83799C18.2694 9.98975 18.2158 10.0904 18.1054 10.0904L6.217 10.0904C6.10655 10.0904 6.05294 9.98975 6.09591 9.83799C7.03321 7.42354 9.40479 5.6754 12.1608 5.6754C14.9169 5.6754 17.2982 7.42354 18.2258 9.83799Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
