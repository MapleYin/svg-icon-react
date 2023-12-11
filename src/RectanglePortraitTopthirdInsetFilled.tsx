import React from 'react'

export default function RectanglePortraitTopthirdInsetFilled({
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
        d='M3.12355 9.34249L16.9078 9.34249C18.0306 9.34249 18.6294 8.73526 18.6294 7.61251L18.6294 3.17735C18.6294 2.05529 18.0306 1.45714 16.9078 1.45714L3.12355 1.45714C2.00988 1.45714 1.40197 2.05529 1.40197 3.17735L1.40197 7.61251C1.40197 8.73526 2.00988 9.34249 3.12355 9.34249Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
