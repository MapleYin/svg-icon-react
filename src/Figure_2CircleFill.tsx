import React from 'react'

export default function Figure_2CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM20.1702 8.39493C19.1657 8.54209 17.1072 8.71582 15.6235 8.79532C14.4042 8.81485 13.0481 8.86299 12.2083 8.86299C11.3398 8.86299 9.94473 8.81485 8.68633 8.79532C7.24102 8.71719 5.15459 8.57139 4.14034 8.39493C4.04336 8.36563 3.98272 8.33633 3.87461 8.33633C3.65498 8.33633 3.46534 8.53575 3.46534 8.81397C3.46534 9.07198 3.60547 9.28956 3.81397 9.30069C4.16553 9.40674 6.47999 9.67178 6.80928 9.74014C7.1002 9.80713 7.31231 10.0967 7.33047 10.5111C7.34932 11.028 7.33047 12.7273 7.20352 13.5357C7.07657 14.3072 6.18789 18.0629 6.13907 18.2087C6.05889 18.5553 6.23106 18.8537 6.57764 18.8537C6.84542 18.8537 6.98555 18.7149 7.07549 18.3795C7.28897 17.6185 7.91329 15.0319 8.12881 14.4181C8.29278 13.9682 8.4086 13.7497 8.68633 13.7497C9.00245 13.7497 9.16573 13.913 9.31153 14.4167C9.48731 15.0124 10.1605 17.6269 10.3446 18.3795C10.4046 18.7143 10.5552 18.8537 10.8418 18.8537C11.1605 18.8537 11.3606 18.556 11.2511 18.2094C11.2029 18.0447 10.3149 14.3072 10.188 13.5357C10.0715 12.7273 10.0715 11.028 10.0903 10.5404C10.1092 10.1051 10.3018 9.83711 10.7273 9.76876C11.0866 9.70948 11.681 9.66202 12.179 9.67178C12.7495 9.67178 13.2923 9.71016 13.6118 9.76876C14.0374 9.83711 14.2397 10.1051 14.2579 10.5404C14.2509 11.028 14.2579 12.7273 14.1226 13.5357C13.9956 14.3072 13.1083 18.0629 13.0595 18.2087C12.95 18.556 13.1501 18.8537 13.4869 18.8537C13.7547 18.8537 13.906 18.7143 13.9848 18.3795C14.1982 17.6185 14.8232 15.0319 15.0367 14.4181C15.1755 13.9675 15.3095 13.7497 15.6235 13.7497C15.8845 13.7497 16.0373 13.913 16.2201 14.4181C16.407 15.0124 17.0697 17.6269 17.2455 18.3795C17.3062 18.7149 17.4651 18.8537 17.7329 18.8537C18.0606 18.8537 18.2691 18.5553 18.1708 18.2094C18.1401 18.0447 17.2431 14.3072 17.107 13.5357C16.9989 12.7273 17.0178 11.028 17.0178 10.5111C17.0178 10.1155 17.1915 9.80713 17.5201 9.74014C17.8313 9.66202 20.1827 9.41856 20.4973 9.30069C20.7162 9.24073 20.8641 9.05176 20.8641 8.81397C20.8641 8.55459 20.6737 8.33633 20.4548 8.33633C20.3467 8.33633 20.286 8.36563 20.1702 8.39493ZM7.45743 6.66553C7.45743 7.36368 8.0168 7.9042 8.68633 7.9042C9.36563 7.9042 9.94385 7.36368 9.94385 6.66553C9.94385 5.99668 9.38448 5.41914 8.68633 5.41914C8.0168 5.41914 7.45743 5.99668 7.45743 6.66553ZM14.3772 6.66553C14.3772 7.36368 14.9449 7.9042 15.6235 7.9042C16.2931 7.9042 16.8636 7.36299 16.8636 6.66553C16.8636 5.99668 16.3119 5.41914 15.6235 5.41914C14.9268 5.41914 14.3772 5.99668 14.3772 6.66553Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}