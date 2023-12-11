import React from 'react'

export default function MicSlashCircle({
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
        d='M8.21993 11.4439L8.21993 12.66C8.21993 14.951 9.66592 16.3963 12.1602 16.3963C13.0974 16.3963 13.8889 16.1938 14.5124 15.8201L14.8721 16.1805C14.2009 16.6367 13.3751 16.9172 12.4484 16.9647L12.4484 19.3942L15.0972 19.3942C15.256 19.3942 15.3841 19.523 15.3841 19.6818C15.3841 19.8406 15.2553 19.9694 15.0972 19.9694L9.22451 19.9694C9.06572 19.9694 8.93691 19.8413 8.93691 19.6818C8.93691 19.523 9.06572 19.3942 9.22451 19.3942L11.8732 19.3942L11.8732 16.9647C9.38233 16.8288 7.6377 15.0251 7.6377 12.66L7.6377 11.4439C7.6377 11.2768 7.76582 11.1486 7.93301 11.1486C8.0918 11.1486 8.21993 11.2768 8.21993 11.4439ZM16.7015 11.4439L16.7015 12.66C16.7015 13.4629 16.4984 14.202 16.1286 14.8305L15.7518 14.4534C16.0002 13.9415 16.1283 13.3377 16.1283 12.66L16.1283 11.4439C16.1283 11.2768 16.2564 11.1486 16.4152 11.1486C16.5733 11.1486 16.7015 11.2768 16.7015 11.4439ZM13.098 14.4029C12.826 14.5379 12.5108 14.6113 12.1602 14.6113C10.8745 14.6113 10.0522 13.6082 10.0522 12.3107L10.0522 11.3509ZM14.2689 6.68897L14.2689 12.3107C14.2689 12.5181 14.2481 12.718 14.2057 12.9063L10.0522 8.74996L10.0522 6.68897C10.0522 5.39083 10.8745 4.38839 12.1602 4.38839C13.4556 4.38839 14.2689 5.39083 14.2689 6.68897Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.7377 19.1802C18.852 19.2944 19.0478 19.3126 19.1704 19.1802C19.2854 19.038 19.2854 18.8624 19.1704 18.7384L5.58331 5.14151C5.46905 5.01817 5.27325 5.01817 5.14991 5.14151C5.01749 5.27393 5.02725 5.45157 5.14991 5.57423Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
