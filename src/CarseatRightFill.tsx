import React from 'react'

export default function CarseatRightFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8435 24.7004' className={className}>
      <path
        d='M25.3504 20.0752C26.0636 17.0516 23.927 15.7979 18.4962 15.7979C15.2338 15.7979 12.1028 16.0649 9.40389 16.5755L9.57723 16.7947C10.0869 11.308 8.15585 6.04425 4.9828 4.36563L5.06825 4.74786C5.57626 1.4628 3.83348 0 2.09393 0C0.756619 0-0.382641 0.955081 0.122048 3.03038L4.79412 22.1856C5.17976 23.7484 6.32849 24.6906 7.86199 24.6906L20.9669 24.6906C23.0854 24.6906 24.5046 23.6243 25.3504 20.0752Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
