import React from 'react'

export default function N20CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.8537 12.1706C12.8537 14.2815 13.3221 17.4396 15.5782 17.4396C17.8351 17.4396 18.3027 14.2815 18.3027 12.1706C18.3027 10.0598 17.8351 6.90166 15.5782 6.90166C13.3221 6.90166 12.8537 10.0598 12.8537 12.1706ZM6.45088 9.59834C6.45088 9.70879 6.53154 9.88438 6.74394 9.88438C6.89776 9.88438 7.01406 9.78194 7.0125 9.64698C7.17354 8.39092 7.69834 7.49415 8.79111 7.49415C10.0228 7.49415 10.5266 8.69385 10.5266 9.72149C10.5266 10.6379 10.246 11.4258 9.41503 12.6078L6.52432 16.6494C6.4457 16.7769 6.43134 16.8693 6.43134 16.9673C6.43134 17.1574 6.57695 17.2499 6.74941 17.2499L11.0397 17.2499C11.2131 17.2499 11.3398 17.1218 11.3398 16.9575C11.3398 16.7912 11.2124 16.6554 11.0397 16.6554L7.30079 16.6554L7.30079 16.6129L9.85742 12.9681C10.77 11.6417 11.0984 10.7308 11.0984 9.68946C11.0984 8.17119 10.3303 6.90166 8.77295 6.90166C7.35234 6.90166 6.45088 8.25069 6.45088 9.59834ZM17.6598 12.1706C17.6598 13.8922 17.3788 16.845 15.5782 16.845C13.777 16.845 13.4967 13.8922 13.4967 12.1706C13.4967 10.4483 13.777 7.48712 15.5782 7.48712C17.3788 7.48712 17.6598 10.4483 17.6598 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}