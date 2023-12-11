import React from 'react'

export default function DotScopeDisplay({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.3282 23.8656' className={className}>
      <path
        d='M1.27032 19.9454L26.6966 19.9454C27.4535 19.9454 27.9669 19.432 27.9669 18.666L27.9669 1.92784C27.9669 1.1709 27.4535 0.657521 26.6966 0.657521L1.27032 0.657521C0.513383 0.657521 0 1.1709 0 1.92784L0 18.666C0 19.432 0.513383 19.9454 1.27032 19.9454ZM1.31847 19.4339C0.826084 19.4339 0.511533 19.1103 0.511533 18.636L0.511533 1.95782C0.511533 1.4836 0.826084 1.16905 1.31847 1.16905L26.6394 1.16905C27.1317 1.16905 27.4554 1.4836 27.4554 1.95782L27.4554 18.636C27.4554 19.1103 27.1317 19.4339 26.6394 19.4339ZM10.3996 23.4966L17.5673 23.4966L17.5673 19.7801L10.3996 19.7801ZM10.0547 23.8656L17.9122 23.8656C18.0729 23.8656 18.1819 23.7663 18.1819 23.6148C18.1819 23.4534 18.0729 23.3534 17.9122 23.3534L10.0547 23.3534C9.89405 23.3534 9.78496 23.4534 9.78496 23.6148C9.78496 23.7663 9.89405 23.8656 10.0547 23.8656Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.9789 15.4619C16.8305 15.4619 19.1624 13.1293 19.1624 10.2973C19.1624 7.45479 16.8305 5.12149 13.9789 5.12149C11.156 5.12149 8.82266 7.45479 8.82266 10.2973C8.82266 13.1293 11.156 15.4619 13.9789 15.4619ZM13.9789 14.9074C11.4485 14.9074 9.38898 12.8472 9.38898 10.2973C9.38898 7.72852 11.4485 5.69483 13.9789 5.69483C16.5365 5.69483 18.5786 7.72852 18.5786 10.2973C18.5786 12.8472 16.5372 14.9074 13.9789 14.9074ZM13.9691 3.88692C13.7781 3.88692 13.6625 4.00255 13.6625 4.18448L13.6625 7.767C13.6625 7.93282 13.7781 8.07501 13.9691 8.07501C14.1434 8.07501 14.2674 7.93213 14.2674 7.767L14.2674 4.18448C14.2674 4.00255 14.1441 3.88692 13.9691 3.88692ZM16.5078 10.6039L20.0994 10.6039C20.282 10.6039 20.3977 10.4792 20.3977 10.2973C20.3977 10.114 20.282 9.99903 20.0994 9.99903L16.5078 9.99903C16.3441 9.99903 16.2103 10.1224 16.2103 10.2973C16.2103 10.4792 16.3441 10.6039 16.5078 10.6039ZM13.9978 16.7153C14.1811 16.7153 14.3044 16.5906 14.3044 16.4171L14.3044 12.8255C14.3044 12.6429 14.1817 12.5279 13.9978 12.5279C13.8151 12.5279 13.7002 12.6429 13.7002 12.8255L13.7002 16.4171C13.7002 16.5913 13.8151 16.7153 13.9978 16.7153ZM7.86817 10.6039L11.4507 10.6039C11.6333 10.6039 11.7573 10.4792 11.7573 10.2973C11.7573 10.1224 11.6333 9.99903 11.4507 9.99903L7.86817 9.99903C7.68487 9.99903 7.56993 10.114 7.56993 10.2973C7.56993 10.4792 7.68419 10.6039 7.86817 10.6039ZM13.9796 10.8878C14.3101 10.8878 14.5708 10.6271 14.5708 10.2966C14.5708 9.9752 14.3101 9.71446 13.9796 9.71446C13.6575 9.71446 13.3968 9.9752 13.3968 10.2966C13.3968 10.6271 13.6575 10.8878 13.9796 10.8878Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
