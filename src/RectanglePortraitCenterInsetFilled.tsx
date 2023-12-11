import React from 'react'

export default function RectanglePortraitCenterInsetFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643ZM0.511533 23.3312L0.511533 3.26641C0.511533 1.48145 1.43399 0.557626 3.2126 0.557626L16.8278 0.557626C18.6064 0.557626 19.5289 1.48145 19.5289 3.26641L19.5289 23.3312C19.5289 25.1161 18.6064 26.0309 16.8278 26.0309L3.2126 26.0309C1.43399 26.0309 0.511533 25.1161 0.511533 23.3312Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.6709 6.30401L4.6709 20.2845C4.6709 21.4029 5.18028 21.9123 6.29102 21.9123L13.7403 21.9123C14.8511 21.9123 15.3605 21.4029 15.3605 20.2845L15.3605 6.30401C15.3605 5.19464 14.8511 4.68526 13.7403 4.68526L6.29102 4.68526C5.18028 4.68526 4.6709 5.19464 4.6709 6.30401Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
