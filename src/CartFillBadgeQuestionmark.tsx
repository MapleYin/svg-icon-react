import React from 'react'

export function CartFillBadgeQuestionmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.8441 27.7557' className={className}>
      <path
        d='M18.3406 24.8646C18.3406 25.8689 17.5435 26.6569 16.5392 26.6569C15.5439 26.6569 14.7461 25.8689 14.7461 24.8646C14.7461 23.8603 15.5439 23.0722 16.5392 23.0722C17.5435 23.0722 18.3406 23.8603 18.3406 24.8646ZM29.4377 24.8646C29.4377 25.8689 28.6489 26.6569 27.6446 26.6569C26.6403 26.6569 25.8327 25.8689 25.8327 24.8646C25.8327 23.8603 26.6403 23.0722 27.6446 23.0722C28.6489 23.0722 29.4377 23.8603 29.4377 24.8646ZM10.6783 3.19904L11.1152 6.04376L25.1887 6.04376C25.1525 6.30589 25.1362 6.57367 25.1362 6.84483C25.1362 10.5492 28.1334 13.5867 31.7886 13.6884L31.6962 14.2812C31.4877 15.6094 30.9644 16.328 29.5517 16.328L12.6902 16.328L13.0518 18.687C13.2234 19.7246 13.7928 20.2415 14.7452 20.2415L29.9281 20.2415C30.0567 20.2415 30.1554 20.3381 30.1554 20.4799C30.1554 20.621 30.0567 20.7274 29.9281 20.7274L14.5576 20.7274C13.3398 20.7274 12.7235 20.0282 12.5521 18.8578L10.2456 3.29767L5.18673 3.29767C5.04698 3.29767 4.96787 3.18087 4.96787 3.05021C4.96787 2.92862 5.04698 2.81182 5.18673 2.81182L10.1448 2.81182C10.5309 2.81182 10.6429 2.95929 10.6783 3.19904Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M37.9543 6.84483C37.9543 10.1293 35.2544 12.809 31.9901 12.809C28.7329 12.809 26.0351 10.1216 26.0351 6.84483C26.0351 3.5876 28.7329 0.889751 31.9901 0.889751C35.2662 0.889751 37.9543 3.56876 37.9543 6.84483ZM31.138 9.79522C31.138 10.2213 31.4755 10.5679 31.9009 10.5679C32.2997 10.5679 32.6547 10.2213 32.6645 9.79522C32.6833 9.39776 32.3186 9.03233 31.9009 9.03233C31.4846 9.03233 31.138 9.37891 31.138 9.79522ZM29.7597 4.42725C29.7597 4.68868 29.913 4.842 30.1381 4.842C30.4247 4.842 30.5272 4.63556 30.6791 4.42774C30.9155 4.12569 31.4703 3.76144 32.1478 3.76144C32.9857 3.76144 33.5446 4.16817 33.5446 4.80587C33.5446 5.53848 32.9976 5.86641 32.3237 6.33516C31.6567 6.80821 31.4296 7.15411 31.4296 7.71397C31.4296 7.75098 31.4296 7.77052 31.4296 7.79913C31.4296 8.08145 31.6186 8.24317 31.9009 8.24317C32.1664 8.24317 32.3442 8.07374 32.3561 7.83116C32.4049 7.29542 32.5945 7.0338 33.2874 6.51397C34.0101 5.97755 34.4214 5.63165 34.4214 4.77452C34.4214 3.82061 33.5713 2.89561 32.138 2.89561C30.8001 2.89561 29.7597 3.76426 29.7597 4.42725Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
