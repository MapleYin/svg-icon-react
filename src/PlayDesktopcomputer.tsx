import React from 'react'

export default function PlayDesktopcomputer({
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
        d='M10.3106 12.9476C10.3106 13.3269 10.7192 13.5131 11.0839 13.315L18.9103 8.70489C19.2736 8.49708 19.2736 8.03331 18.9096 7.8171L11.0839 3.22579C10.7192 3.0089 10.3106 3.19445 10.3106 3.57511Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
