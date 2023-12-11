import React from 'react'

export default function N21CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM15.3998 7.20469L13.5599 8.74121C13.4729 8.81573 13.4438 8.87618 13.4438 8.97842C13.4438 9.13995 13.5426 9.26671 13.7125 9.26671C13.7982 9.26671 13.842 9.23536 13.8963 9.19288L15.5654 7.83985L15.5654 17.0281C15.5654 17.2056 15.7192 17.3587 15.8974 17.3587C16.0553 17.3587 16.2084 17.2056 16.2084 17.0281L16.2084 7.33604C16.2084 7.15039 16.056 6.98955 15.8696 6.98955C15.6824 6.98955 15.5279 7.08975 15.3998 7.20469ZM7.18789 9.59834C7.18789 9.70879 7.26787 9.88506 7.48096 9.88506C7.63408 9.88506 7.75039 9.78194 7.74883 9.64698C7.90079 8.39092 8.43467 7.49415 9.52676 7.49415C10.7599 7.49415 11.2636 8.69385 11.2636 9.72149C11.2636 10.6379 10.983 11.4258 10.1514 12.6085L7.25996 16.6494C7.18135 16.7775 7.16836 16.87 7.16836 16.9673C7.16836 17.1574 7.32168 17.2499 7.48506 17.2499L11.7852 17.2499C11.9494 17.2499 12.0762 17.1218 12.0762 16.9575C12.0762 16.7912 11.9487 16.6561 11.7852 16.6561L8.03643 16.6561L8.03643 16.6129L10.5938 12.9681C11.5064 11.6417 11.8348 10.7308 11.8348 9.68946C11.8348 8.17119 11.0659 6.90166 9.50928 6.90166C8.08799 6.90166 7.18789 8.25069 7.18789 9.59834Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}