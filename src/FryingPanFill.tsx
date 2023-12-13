import React from 'react'

export function FryingPanFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.1562 22.4854' className={className}>
      <path
        d='M0 12.3611C0 18.436 5.61856 22.4672 14.443 22.4854C23.2772 22.4672 28.9048 18.436 28.9048 12.3611C28.9048 9.90694 22.2054 8.10997 14.443 8.10997C6.7085 8.10997 0 9.90694 0 12.3611ZM0.511533 12.3611C0.511533 9.75988 10.1337 8.63283 14.443 8.63283C18.7062 8.63283 28.3933 9.74172 28.3933 12.3611C28.3933 14.5993 20.7932 15.9219 14.443 15.9219C8.09346 15.9219 0.511533 14.5993 0.511533 12.3611ZM27.1697 10.5973L34.6429 5.56456C37.4462 3.66681 34.6475-0.0319308 31.5148 2.4709L23.2625 9.04962ZM6.79679 15.8309L21.1253 16.0725C21.2 13.6124 19.1989 11.7281 16.4782 11.7281C14.6358 11.7281 12.9977 12.617 12.1669 14.0906C11.4781 13.787 11.0135 13.6732 10.2947 13.6732C8.66134 13.6544 7.27618 14.5672 6.79679 15.8309Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
