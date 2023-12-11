import React from 'react'

export default function LightswitchOnFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.4249 26.4617' className={className}>
      <path
        d='M16.0636 3.23643L16.0636 23.2805C16.0636 25.355 14.9575 26.4617 12.8851 26.4617L3.1876 26.4617C1.10537 26.4617 0 25.355 0 23.2805L0 3.23643C0 1.16123 1.10537 0.0551754 3.1876 0.0551754L12.8851 0.0551754C14.9575 0.0551754 16.0636 1.16123 16.0636 3.23643ZM3.16456 1.49044C2.04747 1.49044 1.44796 2.09835 1.44796 3.21475L1.44796 8.23839C1.44796 9.3548 2.04747 9.96271 3.16456 9.96271L12.9054 9.96271C14.0218 9.96271 14.622 9.3548 14.622 8.23839L14.622 3.21475C14.622 2.09835 14.0218 1.49044 12.9054 1.49044Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
