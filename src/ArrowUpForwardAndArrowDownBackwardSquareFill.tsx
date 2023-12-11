import React from 'react'

export default function ArrowUpForwardAndArrowDownBackwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.08984 11.5644C5.95009 11.5644 5.82558 11.6889 5.82558 11.8286C5.82558 11.9774 5.95009 12.0929 6.08984 12.0929L7.36923 12.074L9.53603 12.0944L5.31289 16.264C5.20791 16.369 5.20654 16.533 5.3122 16.638C5.4165 16.7611 5.58965 16.7611 5.7128 16.6464L9.87461 12.4121L9.87617 14.7946L9.87617 15.8617C9.87617 16.0022 9.9916 16.1267 10.1404 16.1267C10.2802 16.1267 10.4047 16.0022 10.4047 15.8617L10.4047 11.8187C10.4047 11.6827 10.2809 11.5644 10.1504 11.5644ZM16.266 5.30381L12.0951 9.529L12.1026 7.15488L12.1026 6.08779C12.1026 5.94804 11.9781 5.82353 11.8384 5.82353C11.6896 5.82353 11.5741 5.94804 11.5741 6.08779L11.5741 10.1309C11.5741 10.2668 11.6889 10.3768 11.8193 10.3768L15.8799 10.3768C16.0287 10.3768 16.1442 10.2613 16.1442 10.1209C16.1442 9.97275 16.0287 9.84824 15.8799 9.84824L14.6005 9.8664L12.433 9.85576L16.6659 5.68555C16.7709 5.58125 16.7632 5.40742 16.6575 5.30312C16.5532 5.18906 16.3892 5.18906 16.266 5.30381Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
