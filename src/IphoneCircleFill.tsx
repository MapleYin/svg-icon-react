import React from 'react'

export function IphoneCircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM9.65147 3.89415C8.25274 3.89415 7.54141 4.62227 7.54141 6.03711L7.54141 18.3606C7.54141 19.7755 8.25274 20.4939 9.65147 20.4939L14.6534 20.4939C16.0522 20.4939 16.7816 19.7755 16.7816 18.3606L16.7816 6.03711C16.7816 4.62227 16.0522 3.89415 14.6534 3.89415ZM16.1944 6.02012L16.1944 18.3776C16.1944 19.4622 15.7318 19.906 14.6355 19.906L9.66944 19.906C8.57305 19.906 8.12862 19.4622 8.12862 18.3776L8.12862 6.02012C8.12862 4.93556 8.57305 4.47364 9.66944 4.47364L14.6355 4.47364C15.7318 4.47364 16.1944 4.93556 16.1944 6.02012ZM10.5495 18.7992C10.3808 18.7992 10.2518 18.9645 10.2518 19.1347C10.2518 19.3125 10.3808 19.4317 10.5495 19.4317L13.7463 19.4317C13.9241 19.4317 14.0622 19.3125 14.0622 19.1347C14.0622 18.9645 13.9241 18.7992 13.7463 18.7992ZM11.2143 5.20968C10.9751 5.20968 10.8231 5.36163 10.8231 5.60011C10.8231 5.83019 10.9751 5.98146 11.2143 5.98146L13.1263 5.98146C13.3654 5.98146 13.5174 5.83019 13.5174 5.60011C13.5174 5.36163 13.3654 5.20968 13.1263 5.20968Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
