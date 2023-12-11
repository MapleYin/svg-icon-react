import React from 'react'

export default function Person_2SlashFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.4147 30.479' className={className}>
      <path
        d='M15.7907 19.2541C13.8599 20.9087 12.7825 23.0121 12.7825 24.8467C12.7825 25.4276 12.9306 25.8981 13.2043 26.2582L2.11944 26.2582C1.12549 26.2582 0.528423 25.8539 0.528423 24.7491C0.528423 21.1524 4.00001 17.1648 9.59141 17.1648C12.1454 17.1648 14.2576 17.9993 15.7907 19.2541ZM12.8085 13.6854C12.0477 14.6518 10.9204 15.241 9.62003 15.241C7.20225 15.241 5.40918 13.2042 5.40918 10.5173C5.40918 9.33184 5.82757 8.22757 6.52394 7.39884ZM13.8574 10.516C13.8574 10.8033 13.8366 11.0833 13.7924 11.3521L8.50306 6.06262C8.85618 5.94985 9.23115 5.89203 9.62003 5.89203C11.991 5.89203 13.8574 8.03158 13.8574 10.516Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.3772 26.2582L15.4743 26.2582C14.367 26.2582 13.673 25.9223 13.673 24.8467C13.673 22.8572 15.2215 20.3947 17.9408 18.8195ZM34.5151 24.8467C34.5151 25.9223 33.8302 26.2582 32.7138 26.2582L28.6981 26.2582L20.2553 17.8152C21.4028 17.4427 22.6905 17.2318 24.094 17.2318C30.5169 17.2318 34.5151 21.6499 34.5151 24.8467ZM28.9864 9.53802C28.9864 12.6085 26.9011 14.9668 24.1311 14.9668C21.3617 14.9668 19.2764 12.6085 19.2764 9.53939C19.2764 6.67484 21.4085 4.22913 24.1311 4.22913C26.8543 4.22913 28.9864 6.68118 28.9864 9.53802Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.8845 29.4878C29.9888 29.5921 30.1626 29.5921 30.2669 29.4878C30.3894 29.3647 30.3719 29.2111 30.2669 29.1054L4.63196 3.47112C4.54514 3.3843 4.38176 3.34798 4.25861 3.47112C4.14523 3.57474 4.14523 3.74017 4.25861 3.85355Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
