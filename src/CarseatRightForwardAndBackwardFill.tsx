import React from 'react'

export function CarseatRightForwardAndBackwardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8435 33.5805' className={className}>
      <path
        d='M25.3504 20.0759C26.0636 17.0522 23.927 15.8076 18.4962 15.8076C15.2338 15.8076 12.1028 16.0747 9.40389 16.5846L9.57723 16.8045C10.0869 11.3178 8.15585 6.04493 4.9828 4.36631L5.06825 4.74855C5.57626 1.46348 3.83348 0 2.09393 0C0.756619 0-0.382641 0.955765 0.122048 3.04015L4.79412 22.1862C5.17976 23.749 6.32849 24.6906 7.86199 24.6906L20.9669 24.6906C23.0854 24.6906 24.5046 23.6341 25.3504 20.0759Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.1189 33.0733C18.1189 33.4621 18.4912 33.5616 18.7461 33.4028L23.2921 30.6503C23.6015 30.4552 23.591 30.0398 23.2921 29.8635L18.7272 27.0733C18.4723 26.9145 18.1189 27.0147 18.1189 27.4028Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1618 33.0733L11.1618 27.4028C11.1618 27.0147 10.8084 26.9145 10.5535 27.0733L5.98866 29.8635C5.68973 30.0398 5.67996 30.4552 5.98866 30.6503L10.5353 33.4028C10.7902 33.5616 11.1618 33.4621 11.1618 33.0733Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
