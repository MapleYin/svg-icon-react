import React from 'react'

export default function N26CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.6101 12.417C12.6101 14.7397 13.2628 17.4396 15.4211 17.4396C17.1179 17.4396 17.993 15.7976 17.993 13.9682C17.993 12.2481 17.1804 10.5963 15.5077 10.5963C14.2693 10.5963 13.5049 11.5669 13.2853 12.7626L13.2364 12.7626C13.2364 12.6774 13.2364 12.6188 13.2364 12.5337C13.2364 10.7119 13.5135 7.50528 15.4386 7.50528C16.3744 7.50528 16.9124 8.21085 17.1733 9.10762C17.2304 9.29571 17.2811 9.47149 17.4984 9.47149C17.6577 9.47149 17.7811 9.38741 17.7811 9.19727C17.7811 9.10596 17.7427 8.93086 17.6848 8.71035C17.375 7.6418 16.546 6.91211 15.4588 6.91211C13.1518 6.91211 12.6101 10.2224 12.6101 12.417ZM6.22607 9.59834C6.22607 9.70879 6.30605 9.88438 6.51914 9.88438C6.67227 9.88438 6.78858 9.78194 6.7961 9.64698C6.94874 8.39092 7.48194 7.49415 8.57471 7.49415C9.80644 7.49415 10.3102 8.69385 10.3102 9.72149C10.3102 10.6379 10.0296 11.4258 9.18955 12.6078L6.30723 16.6494C6.21953 16.7769 6.20654 16.8693 6.20654 16.9673C6.20654 17.1574 6.36055 17.2499 6.53233 17.2499L10.8233 17.2499C10.9876 17.2499 11.1234 17.1218 11.1234 16.9575C11.1234 16.7912 10.996 16.6554 10.8233 16.6554L7.0837 16.6554L7.0837 16.6129L9.63194 12.9681C10.5445 11.6417 10.8814 10.7308 10.8814 9.68946C10.8814 8.17119 10.1139 6.90166 8.55654 6.90166C7.12617 6.90166 6.22607 8.25069 6.22607 9.59834ZM17.3736 13.9736C17.3736 15.3169 16.733 16.8464 15.4197 16.8464C14.0926 16.8464 13.4079 15.2849 13.4079 13.8787C13.4079 12.5899 14.1596 11.1749 15.41 11.1749C16.7267 11.1749 17.375 12.6206 17.3736 13.9736Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
