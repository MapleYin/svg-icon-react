import React from 'react'

export default function ButtonHorizontalTopPress({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8132 29.607' className={className}>
      <path
        d='M26.4519 15.5148L26.4519 18.6965C26.4519 21.8683 24.4137 24.1236 21.5274 24.1236L4.92452 24.1236C2.03819 24.1236 0 21.8683 0 18.6965L0 15.5148C0 12.6315 2.0212 10.5888 4.92452 10.5888L12.2044 10.5888L12.6024 11.0912L4.92452 11.0912C2.32208 11.0912 0.511533 12.9323 0.511533 15.5148C0.511533 18.0979 2.32208 19.911 4.92452 19.911L21.5274 19.911C24.1298 19.911 25.9403 18.0979 25.9403 15.5148C25.9403 12.9323 24.1298 11.0912 21.5274 11.0912L13.8488 11.0912L14.2468 10.5888L21.5274 10.5888C24.4307 10.5888 26.4519 12.6315 26.4519 15.5148ZM0.511533 18.6965C0.511533 21.5849 2.33907 23.612 4.92452 23.612L21.5274 23.612C24.1037 23.612 25.9403 21.5849 25.9403 18.6965L25.9403 17.8219C25.1694 19.416 23.5658 20.4226 21.5274 20.4226L4.92452 20.4226C2.88608 20.4226 1.28249 19.416 0.511533 17.8219Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.4948 12.1903L17.183 8.80499C17.9734 7.80733 17.3475 6.32481 16.0786 6.32481L14.5335 6.32481L14.5335 1.30723C14.5335 0.565723 13.9489 0 13.2263 0C12.4855 0 11.9191 0.565723 11.9191 1.30723L11.9191 6.32481L10.3726 6.32481C9.09669 6.32481 8.47716 7.81436 9.26818 8.80499L11.9564 12.1722C12.5947 12.9718 13.8194 13.0465 14.4948 12.1903Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}