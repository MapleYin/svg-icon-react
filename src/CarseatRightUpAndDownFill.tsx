import React from 'react'

export default function CarseatRightUpAndDownFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8435 32.1283' className={className}>
      <path
        d='M25.3504 20.0752C26.0636 17.0516 23.927 15.7979 18.4962 15.7979C15.2338 15.7979 12.1028 16.0649 9.40389 16.5755L9.57723 16.7947C10.0869 11.308 8.15585 6.04425 4.9828 4.36563L5.06825 4.74786C5.57626 1.4628 3.83348 0 2.09393 0C0.756619 0-0.382641 0.955081 0.122048 3.03038L4.79412 22.1765C5.17976 23.7484 6.32849 24.6906 7.86199 24.6906L20.9669 24.6906C23.0854 24.6906 24.5046 23.6243 25.3504 20.0752Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.9507 26.6145L14.2809 26.6145C13.8837 26.6145 13.7919 26.9679 13.9507 27.2319L16.7409 31.7876C16.9172 32.0865 17.3326 32.1061 17.5277 31.7876L20.2803 27.2507C20.4384 26.9867 20.3402 26.6145 19.9507 26.6145Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.9507 13.8656C20.3402 13.8656 20.4391 13.4934 20.2803 13.2294L17.5277 8.69248C17.3333 8.37402 16.9172 8.39355 16.7409 8.69248L13.9507 13.2482C13.7919 13.5122 13.8837 13.8656 14.2809 13.8656Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}