import React from 'react'

export function OvalPortraitTophalfFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.1892 27.5149' className={className}>
      <path
        d='M10.4143 0C4.26768 0 0 5.65987 0 13.7525C0 21.8355 4.26768 27.496 10.4143 27.496C16.5797 27.496 20.8278 21.8732 20.8278 13.7525C20.8278 5.62286 16.5797 0 10.4143 0ZM0.511533 13.7525L20.3163 13.7525C20.3163 21.5471 16.2166 26.9838 10.4143 26.9838C4.61192 26.9838 0.511533 21.5282 0.511533 13.7525Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
