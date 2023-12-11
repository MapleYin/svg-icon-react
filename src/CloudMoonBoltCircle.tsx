import React from 'react'

export default function CloudMoonBoltCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.23389 15.3181L13.3129 15.3181C15.0945 15.3181 16.5037 13.9368 16.5037 12.2487C16.5037 10.5725 15.1127 9.29522 13.2725 9.22823C12.5064 7.8211 11.2683 6.85548 9.55547 6.85548C7.5129 6.85548 5.81846 8.50606 5.59454 10.6031C4.51807 10.9254 3.66964 11.7562 3.66964 12.9959C3.66964 14.2402 4.6294 15.3181 6.23389 15.3181ZM20.8294 9.11895C20.8294 9.00401 20.7681 8.93086 20.6656 8.93086C20.4746 8.93086 19.7481 9.19092 19.1038 9.19092C17.3247 9.19092 16.1581 8.07315 16.1581 6.39376C16.1581 5.56641 16.4684 4.95391 16.4684 4.76993C16.4684 4.63048 16.3582 4.5503 16.1336 4.58731C14.3437 4.86661 13.4669 6.74219 13.4734 8.37012C13.5277 8.46143 13.5891 8.5541 13.6238 8.63702C15.5261 8.83438 16.9861 10.1743 17.1061 11.9803C19.893 11.5447 20.8294 9.81397 20.8294 9.11895ZM9.06045 18.3597C8.95508 18.5718 9.10654 18.7351 9.3375 18.7351L10.0248 18.7351L9.19473 20.767C9.07119 21.0615 9.47813 21.1962 9.62324 20.9582L11.2094 18.3748C11.3552 18.1452 11.2596 17.9506 10.9909 17.9506L10.1083 17.9506L10.8793 16.4763C10.9944 16.2564 10.8988 16.1113 10.6965 16.1113L10.3518 16.1113C10.111 16.1113 10.0238 16.1979 9.94639 16.3807Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}