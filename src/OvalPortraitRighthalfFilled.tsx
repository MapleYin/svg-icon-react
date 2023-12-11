import React from 'react'

export default function OvalPortraitRighthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.1892 27.5149' className={className}>
      <path
        d='M10.4136 0C4.24815 0 0 5.62286 0 13.7525C0 21.8732 4.24815 27.496 10.4136 27.496C16.5609 27.496 20.8278 21.8355 20.8278 13.7525C20.8278 5.65987 16.5609 0 10.4136 0ZM10.4136 0.511533L10.4136 26.9838C4.61124 26.9838 0.511533 21.5471 0.511533 13.7525C0.511533 5.94894 4.61124 0.511533 10.4136 0.511533Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
