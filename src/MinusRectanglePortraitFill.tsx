import React from 'react'

export function MinusRectanglePortraitFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M20.0314 3.23643L20.0314 23.3611C20.0314 25.4356 18.926 26.5424 16.8528 26.5424L3.1876 26.5424C1.10537 26.5424 0 25.4356 0 23.3611L0 3.23643C0 1.16192 1.10537 0.0551754 3.1876 0.0551754L16.8528 0.0551754C18.926 0.0551754 20.0314 1.16192 20.0314 3.23643ZM3.97062 13.0483C3.83536 13.0483 3.72491 13.1819 3.72491 13.3326C3.72491 13.4365 3.84581 13.5785 3.97062 13.5785L16.0712 13.5785C16.196 13.5785 16.326 13.4365 16.326 13.3326C16.326 13.1819 16.2162 13.0483 16.0712 13.0483Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
