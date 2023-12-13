import React from 'react'

export function LockOpenDisplay({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.3282 23.8656' className={className}>
      <path
        d='M1.27032 19.9454L26.6966 19.9454C27.4535 19.9454 27.9669 19.432 27.9669 18.666L27.9669 1.92784C27.9669 1.1709 27.4535 0.657521 26.6966 0.657521L1.27032 0.657521C0.513383 0.657521 0 1.1709 0 1.92784L0 18.666C0 19.432 0.513383 19.9454 1.27032 19.9454ZM1.31847 19.4339C0.826084 19.4339 0.511533 19.1103 0.511533 18.636L0.511533 1.95782C0.511533 1.4836 0.826084 1.16905 1.31847 1.16905L26.6394 1.16905C27.1317 1.16905 27.4554 1.4836 27.4554 1.95782L27.4554 18.636C27.4554 19.1103 27.1317 19.4339 26.6394 19.4339ZM10.3996 23.4966L17.5673 23.4966L17.5673 19.7801L10.3996 19.7801ZM10.0547 23.8656L17.9122 23.8656C18.0729 23.8656 18.1819 23.7663 18.1819 23.6148C18.1819 23.4534 18.0729 23.3534 17.9122 23.3534L10.0547 23.3534C9.89405 23.3534 9.78496 23.4534 9.78496 23.6148C9.78496 23.7663 9.89405 23.8656 10.0547 23.8656Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.69698 13.4166C9.69698 14.1113 9.99268 14.4266 10.649 14.4266L14.8894 14.4266C15.545 14.4266 15.8407 14.1113 15.8407 13.4166L15.8407 10.127C15.8407 9.44132 15.545 9.12608 14.8894 9.12608L10.649 9.12608C9.99268 9.12608 9.69698 9.44132 9.69698 10.127ZM14.2075 9.26905L14.8681 9.26905L14.8681 8.08048C14.8681 6.93067 15.5135 6.21554 16.5384 6.21554C17.5633 6.21554 18.2087 6.93067 18.2087 8.08048L18.2087 8.63741C18.2087 8.82276 18.3627 8.96837 18.5397 8.96837C18.7243 8.96837 18.8692 8.82276 18.8692 8.63741L18.8692 8.08048C18.8692 6.5711 17.9179 5.53887 16.5384 5.53887C15.1589 5.53887 14.2075 6.5711 14.2075 8.07755Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
