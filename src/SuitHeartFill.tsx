import React from 'react'

export default function SuitHeartFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.8709 21.6686' className={className}>
      <path
        d='M11.7548 21.6686C11.9081 21.6686 12.0774 21.5941 12.2125 21.5014C18.7227 17.1447 23.5096 12.2582 23.5096 7.25518C23.5096 3.27207 20.7567 0.402737 17.0315 0.402737C14.8841 0.402737 12.7039 1.68682 11.7548 3.68448C10.8064 1.6875 8.62618 0.402737 6.48721 0.402737C2.75283 0.402737 0 3.27207 0 7.25518C0 12.2582 4.78691 17.1447 11.2978 21.5014C11.4329 21.5941 11.6022 21.6686 11.7548 21.6686Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
