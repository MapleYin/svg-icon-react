import React from 'react'

export default function MoonriseCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM4.50772 17.2234C4.35733 17.2234 4.22784 17.3509 4.22784 17.5104C4.22784 17.6705 4.34893 17.7784 4.50772 17.7784L19.814 17.7784C19.9916 17.7784 20.0945 17.6705 20.0945 17.5104C20.0945 17.3327 19.9832 17.2234 19.814 17.2234ZM9.70089 6.65948C7.79952 7.71026 6.50567 9.66251 6.50567 12.1591C6.50567 13.937 7.13653 15.486 8.27129 16.5339L16.4794 16.5339C17.0001 16.0754 17.4343 15.4843 17.7386 14.8178C17.8376 14.6735 17.8174 14.5209 17.7442 14.4464C17.6725 14.3669 17.5316 14.3369 17.3602 14.4164C16.779 14.6215 16.1463 14.7743 15.2588 14.7743C11.8157 14.7743 9.76886 12.7022 9.76886 9.21788C9.76886 8.39259 9.92374 7.67491 10.2119 7.06153C10.2935 6.89913 10.2733 6.74718 10.184 6.63565C10.0745 6.5255 9.88419 6.53253 9.70089 6.65948ZM15.0112 4.50782L12.8731 6.65733C12.7434 6.78565 12.6945 6.87696 12.6945 6.96963C12.6945 7.14522 12.829 7.27901 13.0144 7.27901C13.1154 7.27901 13.1899 7.21905 13.2526 7.15704L14.4172 5.99386L14.9367 5.4464L14.9067 6.30977L14.9067 9.69629C14.9067 9.85645 15.0335 9.97686 15.2125 9.97686C15.3817 9.97686 15.5176 9.85645 15.5176 9.69629L15.5176 6.30977L15.4883 5.45343L16.0133 5.98751L17.1905 7.19473C17.2519 7.25606 17.3375 7.27901 17.41 7.27901C17.5953 7.27901 17.7298 7.14522 17.7298 6.96963C17.7298 6.87696 17.6907 6.8045 17.552 6.65733L15.4131 4.50782C15.3763 4.47237 15.2856 4.44034 15.2125 4.44034C15.1387 4.44034 15.0481 4.47237 15.0112 4.50782Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
