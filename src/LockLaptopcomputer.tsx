import React from 'react'

export default function LockLaptopcomputer({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.3657 18.4182' className={className}>
      <path
        d='M0 17.6733C0 18.1145 0.293947 18.4182 0.725297 18.4182L32.27 18.4182C32.7105 18.4182 33.0044 18.1145 33.0044 17.6733C33.0044 17.2413 32.7105 16.9376 32.27 16.9376L29.5245 16.9376L29.5245 2.38174C29.5245 0.826465 28.7344 0.0286132 27.17 0.0286132L5.8253 0.0286132C4.25733 0.0286132 3.47989 0.826465 3.47989 2.38174L3.47989 16.9376L0.725297 16.9376C0.293947 16.9376 0 17.2413 0 17.6733ZM3.99142 16.9376L3.99142 2.35938C3.99142 1.13399 4.60411 0.540146 5.82882 0.540146L27.1756 0.540146C28.4003 0.540146 29.013 1.13399 29.013 2.35938L29.013 16.9376Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.3967 12.8394L18.637 12.8394C19.2927 12.8394 19.5884 12.5241 19.5884 11.8385L19.5884 8.54815C19.5884 7.93634 19.3554 7.62247 18.8524 7.55909L18.8524 6.47901C18.8524 4.97325 17.901 3.94034 16.5165 3.94034C15.132 3.94034 14.1807 4.97325 14.1807 6.47901L14.1807 7.55977C13.6783 7.62247 13.4446 7.93634 13.4446 8.54815L13.4446 11.8385C13.4446 12.5241 13.7403 12.8394 14.3967 12.8394ZM14.8321 7.54727L14.8321 6.49102C14.8321 5.3419 15.4866 4.617 16.5165 4.617C17.5457 4.617 18.1925 5.3419 18.1925 6.49102L18.1925 7.54727Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
