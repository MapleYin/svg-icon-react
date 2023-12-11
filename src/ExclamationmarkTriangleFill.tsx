import React from 'react'

export default function ExclamationmarkTriangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.1327 24.0723' className={className}>
      <path
        d='M15.0377 1.20332L25.3104 19.4044C25.6326 19.9701 25.7714 20.5393 25.7714 21.0889C25.7714 22.4323 24.8225 23.5947 23.1992 23.5947L2.58057 23.5947C0.948928 23.5947 0 22.4323 0 21.0889C0 20.5393 0.147168 19.9617 0.461035 19.4044L10.7337 1.20332C11.2218 0.346388 12.0599 0 12.8902 0C13.7108 0 14.5587 0.346388 15.0377 1.20332ZM12.1377 18.168C12.1377 18.5603 12.4603 18.9171 12.8902 18.9171C13.3105 18.9171 13.6337 18.5519 13.6337 18.168C13.6337 17.7652 13.3021 17.4182 12.8902 17.4182C12.4687 17.4182 12.1377 17.7659 12.1377 18.168ZM12.4901 8.11445L12.5646 15.0167C12.5562 15.2757 12.7053 15.4442 12.8902 15.4442C13.0731 15.4442 13.2138 15.2673 13.2145 15.0167L13.2799 8.11513C13.2806 7.85615 13.1408 7.69892 12.8896 7.69892C12.6376 7.69892 12.4894 7.86454 12.4901 8.11445Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
