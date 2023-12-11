import React from 'react'

export default function AppleTerminalOnRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.3111 25.125' className={className}>
      <path
        d='M25.0198 4.11436L25.0198 4.76221L9.11115 4.76221C6.54962 4.76221 5.04014 6.2794 5.04014 8.83957L5.04014 19.5003L3.71036 19.5003C1.64424 19.5003 0.528423 18.3949 0.528423 16.3218L0.528423 4.11436C0.528423 2.0419 1.64424 0.926763 3.71036 0.926763L21.8386 0.926763C23.9131 0.926763 25.0198 2.06983 25.0198 4.11436Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M30.4213 8.83957L30.4213 21.047C30.4213 23.0915 29.3139 24.2346 27.24 24.2346L9.11115 24.2346C7.03663 24.2346 5.92989 23.1201 5.92989 21.047L5.92989 8.83957C5.92989 6.7671 7.03663 5.66105 9.11115 5.66105L27.24 5.66105C29.3139 5.66105 30.4213 6.80411 30.4213 8.83957ZM14.2855 13.7803C14.1058 13.7803 13.9777 13.9091 13.9777 14.0693C13.9777 14.2224 14.1058 14.3428 14.2855 14.3428L18.301 14.3428C18.4723 14.3428 18.5725 14.2224 18.5725 14.0693C18.5725 13.9091 18.4723 13.7803 18.301 13.7803ZM9.96408 9.49875L13.0429 11.358L9.96408 13.1985C9.59151 13.4408 9.92931 13.9504 10.2969 13.7221L13.5175 11.7111C13.8024 11.523 13.7354 11.1372 13.5175 11.0043L10.2969 8.96671C9.92931 8.74747 9.56358 9.26613 9.96408 9.49875Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}