import React from 'react'

export default function LightMin({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.2107 13.9502' className={className}>
      <path
        d='M0.994633 13.9502C1.54249 13.9502 1.9795 13.5132 1.9795 12.9647C1.9795 12.4168 1.54249 11.9707 0.994633 11.9707C0.446095 11.9707 0 12.4168 0 12.9647C0 13.5132 0.446095 13.9502 0.994633 13.9502ZM3.88809 5.75597C4.43663 5.75597 4.88273 5.30987 4.88273 4.76134C4.88273 4.21348 4.43663 3.77647 3.88809 3.77647C3.34024 3.77647 2.89414 4.21348 2.89414 4.76134C2.89414 5.30987 3.34024 5.75597 3.88809 5.75597ZM12.9201 2.02696C13.4777 2.02696 13.9148 1.58995 13.9148 1.04209C13.9148 0.493556 13.4777 0.0474608 12.9201 0.0474608C12.3723 0.0474608 11.9353 0.493556 11.9353 1.04209C11.9353 1.58995 12.3723 2.02696 12.9201 2.02696ZM21.9612 5.75597C22.5091 5.75597 22.9552 5.30987 22.9552 4.76134C22.9552 4.21348 22.5091 3.77647 21.9612 3.77647C21.4127 3.77647 20.9666 4.21348 20.9666 4.76134C20.9666 5.30987 21.4127 5.75597 21.9612 5.75597ZM24.8554 13.9502C25.4032 13.9502 25.8493 13.5132 25.8493 12.9647C25.8493 12.4168 25.4032 11.9707 24.8554 11.9707C24.3069 11.9707 23.8698 12.4168 23.8698 12.9647C23.8698 13.5132 24.3069 13.9502 24.8554 13.9502Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.78888 13.7803L18.0605 13.7803C18.1784 13.7803 18.3091 13.6496 18.3091 13.5323C18.3091 13.4144 18.1784 13.2851 18.0605 13.2851L7.78888 13.2851C7.67023 13.2851 7.53956 13.415 7.53956 13.5323C7.53956 13.6496 7.67091 13.7803 7.78888 13.7803Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}