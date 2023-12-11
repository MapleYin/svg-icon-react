import React from 'react'

export default function ChartLineDowntrendXyaxisCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM5.88662 6.56856L5.88662 17.4605C5.88662 17.809 6.1124 18.0348 6.44199 18.0348L18.9352 18.0348C19.0772 18.0348 19.1976 17.9241 19.1976 17.7633C19.1976 17.6122 19.0862 17.4827 18.9352 17.4827L6.62012 17.4827C6.48682 17.4827 6.45684 17.4534 6.45684 17.3187L6.45684 10.3078L8.46621 12.2264C8.68584 12.446 8.89707 12.538 9.16758 12.538C9.42833 12.538 9.64024 12.4467 9.85987 12.2264L12.6423 9.53272C12.8119 9.38125 12.9731 9.37286 13.1142 9.53272L16.2394 12.7243L15.0722 13.9188C14.9154 14.047 14.9815 14.3048 15.2017 14.3486L18.5822 14.9635C18.8094 15.0066 18.9598 14.8479 18.9257 14.6214L18.3102 11.222C18.2663 11.0277 18.0448 10.9721 17.8888 11.1288L16.63 12.3247L13.5712 9.23525C13.3704 9.01562 13.139 8.91386 12.8782 8.91386C12.6266 8.91386 12.3965 9.02402 12.1755 9.23525L9.40352 11.9191C9.25206 12.0706 9.09288 12.0706 8.92256 11.9191L6.45684 9.54423L6.45684 6.56856C6.45684 6.40772 6.32735 6.27822 6.17627 6.27822C6.01611 6.27822 5.88662 6.40772 5.88662 6.56856Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
