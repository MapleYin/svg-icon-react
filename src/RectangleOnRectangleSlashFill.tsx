import React from 'react'

export function RectangleOnRectangleSlashFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.3111 28.9974' className={className}>
      <path
        d='M6.68373 7.32313C5.62453 7.99363 5.04014 9.18281 5.04014 10.7758L5.04014 21.4365L3.71036 21.4365C1.64424 21.4365 0.528423 20.3311 0.528423 18.258L0.528423 6.05056C0.528423 4.4674 1.17956 3.44289 2.41005 3.04955ZM25.0198 6.05056L25.0198 6.69841L9.37466 6.69841L5.538 2.86296L21.8386 2.86296C23.9131 2.86296 25.0198 4.00603 25.0198 6.05056Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.5319 26.1708L9.11115 26.1708C7.03663 26.1708 5.92989 25.0563 5.92989 22.9832L5.92989 10.7758C5.92989 9.40799 6.41196 8.46115 7.33907 7.97844ZM30.4213 10.7758L30.4213 22.9832C30.4213 24.5069 29.8062 25.5299 28.6337 25.9513L10.2738 7.59725L27.24 7.59725C29.3139 7.59725 30.4213 8.74031 30.4213 10.7758Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M28.6378 27.9983C28.7421 28.1026 28.9159 28.1026 29.0202 27.9983C29.1609 27.8654 29.1245 27.73 29.0202 27.625L2.46066 1.0654C2.37452 0.979269 2.21954 0.942257 2.08663 1.0654C1.97393 1.16902 1.97393 1.33445 2.08663 1.44715Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
