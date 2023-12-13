import React from 'react'

export function LightBeaconMin({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5522 21.2733' className={className}>
      <path
        d='M0.756156 11.8914C1.17501 11.8914 1.51231 11.5548 1.51231 11.1353C1.51231 10.7073 1.17501 10.3798 0.756156 10.3798C0.327541 10.3798 0 10.7073 0 11.1353C0 11.5548 0.327541 11.8914 0.756156 11.8914ZM3.62432 4.38819C4.05225 4.38819 4.38048 4.05157 4.38048 3.63272C4.38048 3.2041 4.05225 2.87656 3.62432 2.87656C3.20479 2.87656 2.86816 3.2041 2.86816 3.63272C2.86816 4.05157 3.20479 4.38819 3.62432 4.38819ZM11.0996 1.51231C11.5192 1.51231 11.8558 1.18409 11.8558 0.756156C11.8558 0.336623 11.5192 0 11.0996 0C10.6717 0 10.3435 0.336623 10.3435 0.756156C10.3435 1.18409 10.6717 1.51231 11.0996 1.51231ZM18.5665 4.38819C18.9945 4.38819 19.3227 4.05157 19.3227 3.63272C19.3227 3.2041 18.9945 2.87656 18.5665 2.87656C18.147 2.87656 17.8104 3.2041 17.8104 3.63272C17.8104 4.05157 18.147 4.38819 18.5665 4.38819ZM21.4347 11.8914C21.8626 11.8914 22.1908 11.5548 22.1908 11.1353C22.1908 10.7073 21.8626 10.3798 21.4347 10.3798C21.0152 10.3798 20.6785 10.7073 20.6785 11.1353C20.6785 11.5548 21.0152 11.8914 21.4347 11.8914Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.803 20.4381L18.3146 20.4381L18.3146 11.3117C18.3146 7.04386 15.3584 4.0877 11.0996 4.0877C6.86944 4.0877 3.90489 7.04386 3.90489 11.3117L3.90489 20.4381L4.41642 20.4381L4.41642 11.3117C4.41642 7.36515 7.16349 4.59924 11.0996 4.59924C15.0462 4.59924 17.803 7.36515 17.803 11.3117ZM20.1425 20.7169C20.3031 20.7169 20.4129 20.6176 20.4129 20.4751C20.4129 20.3145 20.3031 20.2047 20.1425 20.2047L2.04835 20.2047C1.90587 20.2047 1.78838 20.3145 1.78838 20.4751C1.78838 20.6176 1.90587 20.7169 2.04835 20.7169ZM11.3519 10.9866C11.3519 10.8448 11.233 10.7344 11.0996 10.7344C10.9578 10.7344 10.8585 10.8448 10.8585 10.9866L10.8585 20.4381L11.3519 20.4381Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
