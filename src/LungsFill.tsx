import React from 'react'

export default function LungsFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.5519 22.5774' className={className}>
      <path
        d='M8.56241 21.2433L3.72159 22.1731C1.44395 22.6137-0.609076 21.3081 0.167194 18.3075L4.08663 3.39356C4.62921 1.36201 6.23946 0 8.14337 0C10.3757 0 11.7941 1.37725 11.7941 3.47354L11.7941 14.5976L10.0513 14.9841L6.34123 11.673C6.27326 11.5799 6.07784 11.5806 5.99171 11.6862C5.91602 11.7653 5.91876 11.9503 6.01534 12.0357L9.45225 15.0966L4.96779 16.049C4.83712 16.0733 4.75167 16.2158 4.77667 16.3381C4.8003 16.4429 4.93507 16.5542 5.06574 16.5299L11.7941 15.1021L11.7941 17.1942C11.7941 19.6582 10.8604 20.7997 8.56241 21.2433ZM22.0472 0C23.9427 0 25.5614 1.36201 26.0948 3.39356L30.0143 18.3075C30.8003 21.3081 28.7473 22.6137 26.4696 22.1731L21.6191 21.2433C19.3211 20.7997 18.3972 19.6582 18.3972 17.1942L18.3972 15.1021L25.1248 16.5299C25.2471 16.5542 25.3903 16.4429 25.4146 16.3381C25.4389 16.2158 25.3534 16.0733 25.2228 16.049L20.739 15.0966L24.1661 12.0357C24.2718 11.9503 24.2661 11.7653 24.1989 11.6862C24.1134 11.5806 23.9089 11.5799 23.8402 11.673L20.14 14.9841L18.3972 14.5976L18.3972 3.47354C18.3972 1.37725 19.8149 0 22.0472 0Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.0907 14.4094L18.3972 15.1021L18.3972 14.5976L15.3507 13.9347L15.3507 0.836821C15.3507 0.695022 15.2332 0.585254 15.0907 0.585254C14.9489 0.585254 14.8405 0.695022 14.8405 0.836821L14.8405 13.9347L11.7941 14.5976L11.7941 15.1021Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
