import React from 'react'

export default function CameraBadgeClockFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 41.1932 28.8738' className={className}>
      <path
        d='M24.8474 3.67383L25.9824 4.93584C26.6871 5.72705 26.9249 5.73799 27.9853 5.73799L31.8744 5.73799C33.9489 5.73799 35.0557 6.88106 35.0557 8.92559L35.0557 15.2047C34.8201 15.1788 34.5807 15.166 34.3386 15.166C30.586 15.166 27.4847 18.2666 27.4847 22.0199C27.4847 23.2658 27.8244 24.4379 28.4205 25.4448L8.94767 25.4448C6.87316 25.4448 5.76642 24.3025 5.76642 22.2572L5.76642 8.92559C5.76642 6.88106 6.87316 5.73799 8.94767 5.73799L12.4179 5.73799C13.4685 5.73799 13.7537 5.68936 14.4207 4.93584L15.5649 3.67383C16.2548 2.90713 16.7059 2.74766 17.8664 2.74766L22.5367 2.74766C23.6973 2.74766 24.1484 2.90713 24.8474 3.67383ZM13.3845 15.3925C13.3845 19.3037 16.5242 22.4337 20.4069 22.4337C24.2895 22.4337 27.4383 19.3037 27.4383 15.3925C27.4383 11.4715 24.3265 8.3506 20.4069 8.3506C16.5242 8.3506 13.3845 11.4715 13.3845 15.3925ZM26.8414 15.3925C26.8414 18.9663 23.9702 21.855 20.4069 21.855C16.8435 21.855 13.9807 18.9663 13.9807 15.3925C13.9807 11.8089 16.8519 8.92023 20.4069 8.92023C23.9702 8.92023 26.8414 11.8089 26.8414 15.3925ZM28.2132 10.8453C28.2132 11.6613 28.8639 12.2087 29.6422 12.245C30.364 12.282 31.014 11.6062 31.014 10.8453C31.014 10.1145 30.364 9.44561 29.6422 9.44561C28.8639 9.44561 28.2132 10.1145 28.2132 10.8453Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M40.2937 22.0199C40.2937 25.2953 37.5945 27.9841 34.3386 27.9841C31.0723 27.9841 28.3751 25.2967 28.3751 22.0199C28.3751 18.7627 31.0723 16.0558 34.3386 16.0558C37.6147 16.0558 40.2937 18.7439 40.2937 22.0199ZM33.9114 18.0045L33.9114 21.9508L31.1666 21.9508C30.9122 21.9508 30.7164 22.1459 30.7164 22.3905C30.7164 22.6638 30.9115 22.8582 31.1666 22.8582L34.3427 22.8582C34.6069 22.8582 34.8195 22.6456 34.8195 22.3905L34.8195 18.0045C34.8195 17.7683 34.625 17.5654 34.3427 17.5654C34.1065 17.5654 33.9114 17.7683 33.9114 18.0045Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
