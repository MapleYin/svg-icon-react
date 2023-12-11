import React from 'react'

export default function HouseCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.78057 16.8425C6.78057 17.5118 7.171 17.9016 7.8417 17.9016L16.517 17.9016C17.1689 17.9016 17.5593 17.5118 17.5593 16.8425L17.5593 10.4006L12.5794 6.2256C12.2885 5.98282 12.0325 5.98351 11.7416 6.2256L6.78057 10.3818ZM13.7595 17.3877L10.5622 17.3877L10.5622 13.0865C10.5622 12.8662 10.7212 12.7442 10.9227 12.7442L13.4081 12.7442C13.6012 12.7442 13.7595 12.8662 13.7595 13.0865ZM5.13144 10.7674C5.13144 10.9312 5.27363 11.0488 5.43379 11.0488C5.4999 11.0488 5.55488 11.0238 5.6085 10.9618L11.5543 5.98829C12.008 5.60088 12.3507 5.60225 12.8037 5.98829L18.6937 10.9618C18.7857 11.0238 18.8218 11.0488 18.8788 11.0488C19.0446 11.0488 19.1707 10.9255 19.1707 10.7688C19.1707 10.6461 19.1303 10.573 19.0299 10.4921L13.2066 5.57891C12.5864 5.06406 11.773 5.06406 11.1339 5.57891L5.27295 10.4921C5.18164 10.573 5.13144 10.6384 5.13144 10.7674ZM16.7274 8.97549L17.5593 9.67286L17.5593 6.75381C17.5593 6.62705 17.475 6.53301 17.3573 6.53301L16.9301 6.53301C16.8215 6.53301 16.7274 6.62705 16.7274 6.75381Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
