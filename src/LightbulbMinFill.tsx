import React from 'react'

export default function LightbulbMinFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.5522 37.3246' className={className}>
      <path
        d='M0.756156 11.8914C1.17501 11.8914 1.51231 11.5639 1.51231 11.1353C1.51231 10.7164 1.17501 10.3791 0.756156 10.3791C0.327541 10.3791 0 10.7164 0 11.1353C0 11.5639 0.327541 11.8914 0.756156 11.8914ZM3.62432 4.38819C4.05225 4.38819 4.38048 4.05157 4.38048 3.63204C4.38048 3.2041 4.05225 2.87656 3.62432 2.87656C3.20479 2.87656 2.86816 3.2041 2.86816 3.63204C2.86816 4.05157 3.20479 4.38819 3.62432 4.38819ZM11.0996 1.51163C11.5192 1.51163 11.8558 1.18409 11.8558 0.755472C11.8558 0.336623 11.5192 0 11.0996 0C10.6717 0 10.3435 0.336623 10.3435 0.755472C10.3435 1.18409 10.6717 1.51163 11.0996 1.51163ZM18.5665 4.38819C18.9945 4.38819 19.3227 4.05157 19.3227 3.63204C19.3227 3.2041 18.9945 2.87656 18.5665 2.87656C18.147 2.87656 17.8104 3.2041 17.8104 3.63204C17.8104 4.05157 18.147 4.38819 18.5665 4.38819ZM21.4347 11.8914C21.8626 11.8914 22.1908 11.5639 22.1908 11.1353C22.1908 10.7164 21.8626 10.3791 21.4347 10.3791C21.0152 10.3791 20.6785 10.7164 20.6785 11.1353C20.6785 11.5639 21.0152 11.8914 21.4347 11.8914Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.0996 4.09678C7.09835 4.09678 3.92354 7.2377 3.92354 10.7044C3.92354 14.4555 6.4463 15.8453 7.07882 24.0663C7.11788 24.3961 7.26983 24.541 7.68341 24.541L14.5074 24.541C14.921 24.541 15.0814 24.3961 15.112 24.0663C15.7445 15.8453 18.2485 14.4555 18.2485 10.7044C18.2485 7.2377 15.0925 4.09678 11.0996 4.09678ZM7.8378 26.4096L14.381 26.4096C14.6438 26.4096 14.8459 26.2074 14.8459 25.9537C14.8459 25.6909 14.6438 25.4895 14.381 25.4895L7.8378 25.4895C7.58409 25.4895 7.38263 25.6909 7.38263 25.9537C7.38263 26.2074 7.58409 26.4096 7.8378 26.4096ZM11.1094 29.3966C12.8545 29.3966 14.0853 28.5695 14.1459 27.358L8.08194 27.358C8.15099 28.5695 9.37267 29.3966 11.1094 29.3966Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
