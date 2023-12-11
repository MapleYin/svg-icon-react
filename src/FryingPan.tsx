import React from 'react'

export default function FryingPan({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.1335 22.4854' className={className}>
      <path
        d='M0 12.3611C0 18.436 5.61856 22.4672 14.443 22.4854C23.2772 22.4672 28.9048 18.436 28.9048 12.3611C28.9048 9.90694 22.2054 8.10997 14.443 8.10997C6.7085 8.10997 0 9.90694 0 12.3611ZM0.511533 12.3611C0.511533 9.75988 10.1337 8.63283 14.443 8.63283C18.7062 8.63283 28.3933 9.74172 28.3933 12.3611C28.3933 14.5993 20.7932 15.9332 14.443 15.9332C8.09346 15.9332 0.511533 14.5993 0.511533 12.3611ZM0.598351 13.6564C2.47121 15.3614 7.86115 16.4447 14.443 16.4447C21.0255 16.4447 26.4336 15.3614 28.3071 13.6564C27.5102 18.7386 22.2969 21.9557 14.443 21.9738C6.58976 21.9557 1.39464 18.7386 0.598351 13.6564ZM27.1711 10.5669L34.6316 5.54054C37.4066 3.66886 34.6368 0.000683665 31.5247 2.49629L23.3155 9.04327L23.7417 9.39737L31.8281 2.9087C34.4191 0.838102 36.5666 3.64747 34.3579 5.11651L26.7752 10.1934ZM6.79679 15.8309L21.1253 16.0725C21.2 13.6124 19.1989 11.7281 16.4782 11.7281C14.6358 11.7281 12.9977 12.617 12.1669 14.0906C11.4781 13.787 11.0135 13.6732 10.2947 13.6732C8.66134 13.6544 7.27618 14.5672 6.79679 15.8309Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}