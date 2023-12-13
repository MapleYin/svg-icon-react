import React from 'react'

export function OvalPortraitLefthalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.1892 27.5149' className={className}>
      <path
        d='M10.4143 0C4.26768 0 0 5.65987 0 13.7525C0 21.8355 4.26768 27.496 10.4143 27.496C16.5797 27.496 20.8278 21.8732 20.8278 13.7525C20.8278 5.62286 16.5797 0 10.4143 0ZM10.4143 0.511533C16.2166 0.511533 20.3163 5.94894 20.3163 13.7525C20.3163 21.5471 16.2166 26.9838 10.4143 26.9838Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
