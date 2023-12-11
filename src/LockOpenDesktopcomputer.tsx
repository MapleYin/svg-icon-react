import React from 'react'

export default function LockOpenDesktopcomputer({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.3282 23.8656' className={className}>
      <path
        d='M1.27032 19.9454L26.6966 19.9454C27.4535 19.9454 27.9669 19.432 27.9669 18.666L27.9669 1.92784C27.9669 1.1709 27.4535 0.657521 26.6966 0.657521L1.27032 0.657521C0.513383 0.657521 0 1.1709 0 1.92784L0 18.666C0 19.432 0.513383 19.9454 1.27032 19.9454ZM1.23302 15.3658C0.760654 15.3658 0.511533 15.1272 0.511533 14.6346L0.511533 1.95782C0.511533 1.4836 0.826084 1.16905 1.31847 1.16905L26.6394 1.16905C27.1317 1.16905 27.4554 1.4836 27.4554 1.95782L27.4554 14.6346C27.4554 15.1272 27.2063 15.3658 26.7339 15.3658ZM10.3996 23.4966L17.5673 23.4966L17.5673 19.7801L10.3996 19.7801ZM10.0547 23.8656L17.9122 23.8656C18.0729 23.8656 18.1819 23.7663 18.1819 23.6148C18.1819 23.4534 18.0729 23.3534 17.9122 23.3534L10.0547 23.3534C9.89405 23.3534 9.78496 23.4534 9.78496 23.6148C9.78496 23.7663 9.89405 23.8656 10.0547 23.8656Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.69698 11.3716C9.69698 12.0572 9.99268 12.3725 10.649 12.3725L14.8894 12.3725C15.545 12.3725 15.8407 12.0572 15.8407 11.3716L15.8407 8.08126C15.8407 7.39561 15.545 7.08038 14.8894 7.08038L10.649 7.08038C9.99268 7.08038 9.69698 7.39561 9.69698 8.08126ZM14.2075 7.22404L14.8681 7.22404L14.8681 6.03477C14.8681 4.88566 15.5135 4.16984 16.5384 4.16984C17.5633 4.16984 18.2087 4.88566 18.2087 6.03477L18.2087 6.59171C18.2087 6.76866 18.3627 6.92267 18.5397 6.92267C18.7243 6.92267 18.8692 6.76866 18.8692 6.59171L18.8692 6.03477C18.8692 4.52608 17.9179 3.49317 16.5384 3.49317C15.1589 3.49317 14.2075 4.52608 14.2075 6.02276Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
