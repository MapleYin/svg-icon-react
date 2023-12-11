import React from 'react'

export default function PlayDisplay({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.3282 23.8656' className={className}>
      <path
        d='M1.27032 19.9454L26.6966 19.9454C27.4535 19.9454 27.9669 19.432 27.9669 18.666L27.9669 1.92784C27.9669 1.1709 27.4535 0.657521 26.6966 0.657521L1.27032 0.657521C0.513383 0.657521 0 1.1709 0 1.92784L0 18.666C0 19.432 0.513383 19.9454 1.27032 19.9454ZM1.31847 19.4339C0.826084 19.4339 0.511533 19.1103 0.511533 18.636L0.511533 1.95782C0.511533 1.4836 0.826084 1.16905 1.31847 1.16905L26.6394 1.16905C27.1317 1.16905 27.4554 1.4836 27.4554 1.95782L27.4554 18.636C27.4554 19.1103 27.1317 19.4339 26.6394 19.4339ZM10.3996 23.4966L17.5673 23.4966L17.5673 19.7801L10.3996 19.7801ZM10.0547 23.8656L17.9122 23.8656C18.0729 23.8656 18.1819 23.7663 18.1819 23.6148C18.1819 23.4534 18.0729 23.3534 17.9122 23.3534L10.0547 23.3534C9.89405 23.3534 9.78496 23.4534 9.78496 23.6148C9.78496 23.7663 9.89405 23.8656 10.0547 23.8656Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.3106 14.9926C10.3106 15.3726 10.7192 15.5588 11.0839 15.3601L18.9103 10.7506C19.2736 10.5428 19.2736 10.0783 18.9096 9.86212L11.0839 5.27081C10.7192 5.06368 10.3106 5.24015 10.3106 5.62921Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}