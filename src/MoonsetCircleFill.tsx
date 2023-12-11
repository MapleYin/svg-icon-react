import React from 'react'

export default function MoonsetCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM4.50772 17.2234C4.35733 17.2234 4.22784 17.3509 4.22784 17.5104C4.22784 17.6705 4.34893 17.7784 4.50772 17.7784L19.814 17.7784C19.9916 17.7784 20.0945 17.6705 20.0945 17.5104C20.0945 17.3327 19.9832 17.2234 19.814 17.2234ZM9.70089 6.65948C7.79952 7.71026 6.50567 9.66251 6.50567 12.1591C6.50567 13.937 7.13653 15.486 8.27129 16.5339L16.4794 16.5339C17.0001 16.0754 17.4343 15.4843 17.7386 14.8178C17.8376 14.6735 17.8174 14.5209 17.7442 14.4464C17.6725 14.3669 17.5316 14.3369 17.3602 14.4164C16.779 14.6215 16.1463 14.7743 15.2588 14.7743C11.8157 14.7743 9.76886 12.7022 9.76886 9.21788C9.76886 8.39259 9.92374 7.67491 10.2119 7.06153C10.2935 6.89913 10.2733 6.74718 10.184 6.63565C10.0745 6.5255 9.88419 6.53253 9.70089 6.65948ZM14.9067 4.72091L14.9067 8.11719L14.9367 8.9708L14.4172 8.43311L13.2526 7.26016C13.1899 7.20723 13.1154 7.13887 13.0144 7.13887C12.829 7.13887 12.6945 7.27266 12.6945 7.45733C12.6945 7.54932 12.7434 7.64063 12.8731 7.76056L15.0112 9.91007C15.0481 9.9546 15.1387 9.97686 15.2125 9.97686C15.2856 9.97686 15.3763 9.9546 15.4131 9.91007L17.552 7.76056C17.6907 7.62247 17.7298 7.54932 17.7298 7.45733C17.7298 7.27266 17.5953 7.13887 17.41 7.13887C17.3375 7.13887 17.2519 7.17022 17.1905 7.23223L16.0133 8.43946L15.4883 8.96377L15.5176 8.11719L15.5176 4.72091C15.5176 4.56983 15.3817 4.44034 15.2125 4.44034C15.0335 4.44034 14.9067 4.56983 14.9067 4.72091Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}