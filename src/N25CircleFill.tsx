import React from 'react'

export function N25CircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM13.6179 7.08223C13.2744 7.08223 13.1463 7.30166 13.1163 7.60675L12.8002 11.8151C12.7807 12.0293 12.7716 12.2889 12.7716 12.3822C12.7716 12.5946 12.9061 12.7303 13.1065 12.7303C13.3379 12.7303 13.4229 12.5656 13.5217 12.3705C13.8614 11.7104 14.4135 11.2421 15.1615 11.2421C16.4405 11.2421 17.0603 12.7353 17.0603 14.0233C17.0603 15.4118 16.421 16.8464 15.105 16.8464C14.0974 16.8464 13.3827 15.9601 13.2126 14.9713C13.1765 14.6897 13.0581 14.6229 12.9189 14.6229C12.7351 14.6229 12.6258 14.751 12.6258 14.9348C12.6258 15.0252 12.6669 15.2169 12.6919 15.3144C12.9665 16.5346 13.8423 17.4396 15.1064 17.4396C16.815 17.4396 17.6978 15.7313 17.6978 14.0024C17.6978 12.3257 16.8754 10.6571 15.2607 10.6571C14.5911 10.6571 13.7958 10.9724 13.3995 11.8724L13.3773 11.8724L13.6927 7.69561L16.9609 7.69561C17.1441 7.69561 17.2604 7.5668 17.2604 7.3837C17.2604 7.21172 17.1245 7.08223 16.9609 7.08223ZM6.20928 9.59834C6.20928 9.70879 6.28086 9.88438 6.50234 9.88438C6.65547 9.88438 6.77246 9.78194 6.77022 9.64698C6.92286 8.39092 7.45743 7.49415 8.54883 7.49415C9.78125 7.49415 10.285 8.69385 10.285 9.72149C10.285 10.6379 10.0044 11.4258 9.17275 12.6078L6.28203 16.6494C6.20342 16.7769 6.18974 16.8693 6.18974 16.9673C6.18974 17.1574 6.33535 17.2499 6.50713 17.2499L10.7975 17.2499C10.9708 17.2499 11.0976 17.1218 11.0976 16.9575C11.0976 16.7912 10.9701 16.6554 10.7975 16.6554L7.0585 16.6554L7.0585 16.6129L9.61514 12.9681C10.5284 11.6417 10.8568 10.7308 10.8568 9.68946C10.8568 8.17119 10.0887 6.90166 8.53067 6.90166C7.11006 6.90166 6.20928 8.25069 6.20928 9.59834Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
