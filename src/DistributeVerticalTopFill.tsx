import React from 'react'

export function DistributeVerticalTopFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5492 28.5025' className={className}>
      <path
        d='M7.92814 11.7799L18.2598 11.7799C19.1584 11.7799 19.7871 11.1519 19.7871 10.2553L19.7871 4.66749C19.7871 3.77091 19.1584 3.14288 18.2598 3.14288L7.92814 3.14288C7.0295 3.14288 6.40987 3.77091 6.40987 4.66749L6.40987 10.2553C6.40987 11.1519 7.0295 11.7799 7.92814 11.7799ZM3.95343 28.4921L22.2436 28.4921C23.1331 28.4921 23.7618 27.8641 23.7618 26.9675L23.7618 21.3797C23.7618 20.4831 23.1331 19.8551 22.2436 19.8551L3.95343 19.8551C3.05479 19.8551 2.42608 20.4831 2.42608 21.3797L2.42608 26.9675C2.42608 27.8641 3.05479 28.4921 3.95343 28.4921Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.270609 0.520126L25.9257 0.520126C26.0648 0.520126 26.1879 0.403327 26.1879 0.255864C26.1879 0.116799 26.0648 0 25.9257 0L0.270609 0C0.123146 0 0 0.116799 0 0.255864C0 0.403327 0.123146 0.520126 0.270609 0.520126ZM0.270609 17.2323L25.9257 17.2323C26.0648 17.2323 26.1879 17.1155 26.1879 16.9681C26.1879 16.8199 26.0648 16.7031 25.9257 16.7031L0.270609 16.7031C0.123146 16.7031 0 16.8199 0 16.9681C0 17.1155 0.123146 17.2323 0.270609 17.2323Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
