import React from 'react'

export default function MoonHazeCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM5.89493 18.0567C5.73252 18.0567 5.59239 18.178 5.59239 18.3495C5.59239 18.5308 5.73252 18.643 5.89493 18.643L20.07 18.643C20.2604 18.643 20.3816 18.5308 20.3816 18.3495C20.3816 18.1592 20.2604 18.0567 20.07 18.0567ZM4.2503 16.4994C4.0879 16.4994 3.94776 16.6214 3.94776 16.7922C3.94776 16.9734 4.0879 17.0772 4.2503 17.0772L18.4261 17.0772C18.6157 17.0772 18.7377 16.9734 18.7377 16.7922C18.7377 16.6032 18.6157 16.4994 18.4261 16.4994ZM5.89493 14.9428C5.73252 14.9428 5.59239 15.0647 5.59239 15.2362C5.59239 15.4175 5.73252 15.529 5.89493 15.529L20.07 15.529C20.2604 15.529 20.3816 15.4175 20.3816 15.2362C20.3816 15.0459 20.2604 14.9428 20.07 14.9428ZM9.70089 4.37881C7.79952 5.43028 6.50567 7.38252 6.50567 9.87842C6.50567 11.6563 7.13653 13.2054 8.27129 14.263L16.4794 14.263C17.0001 13.7947 17.4343 13.2127 17.7386 12.5378C17.8376 12.3929 17.8174 12.2409 17.7442 12.1664C17.6725 12.0862 17.5316 12.0569 17.3602 12.1357C16.779 12.3499 16.1463 12.4937 15.2588 12.4937C11.8164 12.4937 9.76886 10.4307 9.76886 6.9463C9.76886 6.11192 9.92374 5.40333 10.2119 4.78995C10.2935 4.61846 10.2733 4.46651 10.184 4.35567C10.0745 4.25391 9.88419 4.25186 9.70089 4.37881Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}