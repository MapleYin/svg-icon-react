import React from 'react'

export function N22CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.43799 9.59903C6.43799 9.70879 6.51865 9.88506 6.74014 9.88506C6.89326 9.88506 7.00049 9.78194 7.0087 9.64698C7.16065 8.39092 7.69454 7.49415 8.78662 7.49415C10.019 7.49415 10.5228 8.69385 10.5228 9.71309C10.5228 10.6379 10.2422 11.4258 9.41054 12.6085L6.51982 16.6494C6.44189 16.7775 6.42754 16.87 6.42754 16.9673C6.42754 17.1574 6.57314 17.2499 6.74561 17.2499L11.0353 17.2499C11.2093 17.2499 11.3354 17.1218 11.3354 16.9575C11.3354 16.7919 11.2086 16.6561 11.0353 16.6561L7.29561 16.6561L7.29561 16.6129L9.84453 12.9688C10.7662 11.6417 11.094 10.7308 11.094 9.68946C11.094 8.17119 10.3265 6.90166 8.76846 6.90166C7.34785 6.90166 6.43799 8.25069 6.43799 9.59903ZM12.8856 9.59903C12.8856 9.70879 12.9655 9.88506 13.1786 9.88506C13.3324 9.88506 13.4487 9.78194 13.4472 9.64698C13.5991 8.39092 14.1421 7.49415 15.2251 7.49415C16.4575 7.49415 16.9612 8.69385 16.9612 9.71309C16.9612 10.6379 16.68 11.4258 15.8497 12.6085L12.9583 16.6494C12.8797 16.7775 12.8667 16.87 12.8667 16.9673C12.8667 17.1574 13.02 17.2499 13.1834 17.2499L17.4835 17.2499C17.6478 17.2499 17.7745 17.1218 17.7745 16.9575C17.7745 16.7919 17.6471 16.6561 17.4835 16.6561L13.7348 16.6561L13.7348 16.6129L16.2921 12.9688C17.204 11.6417 17.5324 10.7308 17.5324 9.68946C17.5324 8.17119 16.7643 6.90166 15.2076 6.90166C13.7863 6.90166 12.8856 8.25069 12.8856 9.59903Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
