import React from 'react'

export default function ShekelsignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.57246 5.9958C7.42656 5.9958 7.32089 6.10215 7.32089 6.2669L7.32089 16.2543C7.32089 16.4563 7.43222 16.5487 7.59648 16.5487C7.76074 16.5487 7.8791 16.4556 7.8791 16.2536L7.8791 6.5252L10.0218 6.5252C11.1898 6.5252 11.6207 7.02754 11.6207 8.47559L11.6207 13.4308C11.6207 13.6334 11.7314 13.7252 11.8956 13.7252C12.069 13.7252 12.1789 13.6334 12.1789 13.4308L12.1789 8.42559C12.1789 6.67129 11.5942 5.9958 10.0157 5.9958ZM13.7992 6.30156L13.7992 13.8101C13.7992 15.406 12.9987 15.9476 11.6358 15.9476L10.0304 15.9476L10.0304 8.96729C10.0304 8.76465 9.92041 8.67285 9.75684 8.67285C9.5835 8.67285 9.47285 8.76465 9.47285 8.96729L9.47285 16.2156C9.47285 16.3895 9.57715 16.4672 9.73145 16.4672L11.6075 16.4672C13.4556 16.4672 14.3567 15.7086 14.3567 13.7919L14.3567 6.30156C14.3567 6.09961 14.2384 6.01552 14.0741 6.01552C13.9092 6.01552 13.7992 6.10801 13.7992 6.30156Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}