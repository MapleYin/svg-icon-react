import React from 'react'

export default function TheatermaskAndPaintbrushFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.1015 32.2835' className={className}>
      <path
        d='M17.5697 2.05523L19.7342 10.0569C19.8213 10.3845 19.8953 10.7078 19.9559 11.0261C18.7951 12.3436 17.6103 13.7219 16.5571 15.0081C16.9207 14.3059 17.1348 13.477 17.122 12.516C17.115 12.0613 16.7929 11.8855 16.4631 12.1337C15.1478 13.1952 13.369 13.888 11.7878 14.3205C10.2248 14.7327 8.32045 15.0167 6.67084 14.7697C6.2518 14.7208 6.06713 15.0193 6.28744 15.4322C7.79242 18.1382 10.6818 18.4615 12.7673 17.9132C13.6305 17.6789 14.5428 17.2394 15.3062 16.5753C14.9888 16.984 14.6969 17.3725 14.4345 17.7364C13.9544 18.3467 13.1882 19.5175 12.8796 21.0317C7.60077 22.1811 4.12926 19.5883 2.80159 14.592L0.655207 6.58902C0.25296 5.12016 0.964972 3.92348 2.43451 3.5394L14.5089 0.295457C15.9694-0.0872594 17.1856 0.585691 17.5697 2.05523ZM6.2973 8.39546C5.3055 8.66958 4.72728 9.56782 5.0014 10.5653C5.1095 10.9775 5.43743 11.1378 5.60755 11.0883C5.91302 11.0088 6.05882 10.4788 6.80716 10.2723C7.5471 10.0666 7.93773 10.4683 8.25365 10.3895C8.4056 10.34 8.62337 10.0352 8.51527 9.623C8.24183 8.62485 7.29818 8.12065 6.2973 8.39546ZM13.5792 6.44507C12.5972 6.71919 12.019 7.61743 12.2924 8.61489C12.4012 9.0271 12.7284 9.17905 12.8992 9.13862C13.2047 9.05913 13.3505 8.52905 14.0905 8.32261C14.8388 8.11616 15.2392 8.5186 15.5453 8.43911C15.6973 8.3896 15.9151 8.0855 15.7979 7.67329C15.5328 6.67514 14.5899 6.17094 13.5792 6.44507Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.3831 5.31977C25.6067 6.06284 18.8857 13.3274 15.5542 17.726C18.2548 17.831 20.6674 19.3883 21.6952 22.0368C24.6855 17.4488 28.6789 8.13267 29.0571 7.17837C29.7564 5.40561 27.8027 3.9809 26.3831 5.31977ZM17.1453 21.9812C18.209 22.7234 18.9133 23.66 19.2649 24.6904C20.0019 24.3025 20.6156 23.5846 21.0667 22.9523C21.1468 22.8505 21.227 22.739 21.2974 22.6372C20.3615 19.829 17.8459 18.2957 15.1587 18.2944C15.0311 18.4234 14.8853 18.6096 14.7395 18.8594C14.354 19.4736 13.9487 20.3929 13.8753 21.0021C14.9455 20.9176 16.0808 21.2202 17.1453 21.9812ZM7.95717 29.4985C10.3523 31.8664 14.7122 32.0812 17.0696 29.7342C19.1202 27.7032 19.1801 25.1198 17.2649 23.1864C15.5282 21.4294 12.9448 21.3395 11.5017 22.793C9.84311 24.4809 10.9423 26.1897 9.92123 27.2303C9.0766 28.0945 8.21859 27.8079 7.83021 28.2319C7.53383 28.5737 7.56879 29.1003 7.95717 29.4985Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
