import React from 'react'

export default function Waterbottle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13.3045 28.3854' className={className}>
      <path
        d='M3.07627 2.97471L9.8669 2.97471C10.3829 2.97471 10.7141 2.64492 10.7141 2.12822L10.7141 0.846486C10.7141 0.329786 10.3829 0 9.8669 0L3.07627 0C2.55957 0 2.22979 0.329786 2.22979 0.846486L2.22979 2.12822C2.22979 2.64492 2.55957 2.97471 3.07627 2.97471ZM3.57667 2.55323L3.08399 2.41846L1.0043 5.32598C0.188282 6.45723 0 7.42862 0 9.08311L0 24.8142C0 27.1923 1.1751 28.3665 3.55635 28.3665L9.36798 28.3665C11.7765 28.3665 12.9432 27.1923 12.9432 24.8142L12.9432 9.08311C12.9432 7.44747 12.736 6.45723 11.9291 5.32598L9.84942 2.41846L9.35605 2.55323L11.4438 5.50626C12.3054 6.72647 12.4316 7.54561 12.4316 9.08311L12.4316 24.8142C12.4316 26.8523 11.4184 27.8543 9.36798 27.8543L3.55635 27.8543C1.52413 27.8543 0.511533 26.8523 0.511533 24.8142L0.511533 9.08311C0.511533 7.56446 0.628037 6.72647 1.48966 5.50626ZM0.283405 9.14073L0.283405 10.0509L12.6409 10.0509L12.6409 9.14073ZM6.46182 20.6645C8.23008 20.6645 9.39151 19.5226 9.39151 17.8331C9.39151 16.9444 9.02041 16.2413 8.79581 15.7914C8.34659 14.7765 7.5751 13.4874 6.91104 12.5102C6.78409 12.296 6.6376 12.1983 6.46182 12.1983C6.30557 12.1983 6.13956 12.296 6.0126 12.5102C5.35831 13.4874 4.59659 14.7765 4.12852 15.7914C3.92276 16.2413 3.53282 16.9444 3.53282 17.8331C3.53282 19.5226 4.69424 20.6645 6.46182 20.6645ZM0.283405 23.1042L0.283405 24.015L12.6409 24.015L12.6409 23.1042Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
