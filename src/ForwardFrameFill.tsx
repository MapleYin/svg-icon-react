import React from 'react'

export default function ForwardFrameFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5913 19.0635' className={className}>
      <path
        d='M5.42589 19.0446C6.19836 19.0446 6.49797 18.745 6.49797 17.9726L6.49797 1.07207C6.49797 0.300295 6.19836 0 5.42589 0L2.8132 0C2.03165 0 1.74112 0.306642 1.74112 1.07207L1.74112 17.9726C1.74112 18.745 2.03165 19.0446 2.8132 19.0446ZM11.8721 18.5541C12.1962 18.5541 12.57 18.3699 12.8201 18.2236L26.0118 10.4716C26.3481 10.276 26.5913 9.96387 26.5913 9.50801C26.5913 9.04307 26.3669 8.76865 26.0118 8.5542L12.8201 0.802149C12.5603 0.655859 12.1962 0.480761 11.8721 0.480761C11.2999 0.480761 10.7094 0.900978 10.7094 1.89307L10.7094 17.132C10.7094 18.1332 11.2999 18.5541 11.8721 18.5541Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
