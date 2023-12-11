import React from 'react'

export default function ArrowtriangleRightAndLineVerticalAndArrowtriangleLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.5425 24.8852' className={className}>
      <path
        d='M11.4082 13.3794C12.0862 12.9676 12.1525 12.0111 11.4082 11.5532L1.6919 5.5374C1.05156 5.1542 0 5.18633 0 6.41436L0 18.5183C0 19.7477 1.05293 19.7868 1.6919 19.3945ZM11.1836 12.9228L1.31788 19.0231C1.05128 19.1948 0.491512 19.2779 0.491512 18.5324L0.491512 6.4002C0.491512 5.65333 1.04356 5.73849 1.31788 5.90948L11.1647 11.9813C11.6155 12.2597 11.5172 12.7231 11.1836 12.9228ZM15.586 24.8852C15.7342 24.8852 15.851 24.762 15.851 24.6139L15.851 0.318754C15.851 0.170607 15.7342 0.0565428 15.586 0.0565428C15.4386 0.0565428 15.3218 0.170607 15.3218 0.318754L15.3218 24.6139C15.3218 24.762 15.4386 24.8852 15.586 24.8852ZM29.4802 19.3945C30.1289 19.7868 31.1812 19.7477 31.1812 18.5183L31.1812 6.41436C31.1812 5.18633 30.1212 5.1542 29.4802 5.5374L19.773 11.5532C19.0286 12.0111 19.0949 12.9676 19.773 13.3794ZM29.8633 19.0231L19.9885 12.9228C19.6549 12.7231 19.5663 12.2597 20.0073 11.9813L29.8633 5.90948C30.1285 5.73849 30.6813 5.65333 30.6813 6.4002L30.6813 18.5324C30.6813 19.2779 30.1299 19.1948 29.8633 19.0231Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
