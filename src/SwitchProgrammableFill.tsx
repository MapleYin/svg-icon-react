import React from 'react'

export default function SwitchProgrammableFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.4249 26.4617' className={className}>
      <path
        d='M16.0636 3.23643L16.0636 23.2805C16.0636 25.3557 14.9575 26.4617 12.8851 26.4617L3.1876 26.4617C1.10537 26.4617 0 25.3557 0 23.2805L0 3.23643C0 1.16192 1.10537 0.0551754 3.1876 0.0551754L12.8851 0.0551754C14.9575 0.0551754 16.0636 1.16192 16.0636 3.23643ZM3.14259 16.5259C2.02755 16.5259 1.41896 17.1247 1.41896 18.2481L1.41896 23.3092C1.41896 24.4242 2.02755 25.0314 3.14259 25.0314L12.9267 25.0314C14.0515 25.0314 14.651 24.4242 14.651 23.3092L14.651 18.2481C14.651 17.1247 14.0515 16.5259 12.9267 16.5259ZM3.14259 1.48546C2.02755 1.48546 1.41896 2.09269 1.41896 3.20772L1.41896 8.26876C1.41896 9.38312 2.02755 9.99103 3.14259 9.99103L12.9267 9.99103C14.0515 9.99103 14.651 9.38312 14.651 8.26876L14.651 3.20772C14.651 2.09269 14.0515 1.48546 12.9267 1.48546Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
