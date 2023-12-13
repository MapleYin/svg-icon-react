import React from 'react'

export function OvalBottomhalfFilled({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.289 22.0701' className={className}>
      <path
        d='M0 11.0399C0 17.3405 6.01963 22.0701 14.4642 22.0701C22.908 22.0701 28.9277 17.3405 28.9277 11.0399C28.9277 4.74844 22.908 0 14.4642 0C6.01963 0 0 4.74844 0 11.0399ZM0.511533 11.0399C0.511533 5.07384 6.32687 0.530381 14.4642 0.530381C22.6008 0.530381 28.4161 5.07384 28.4161 11.0399Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
