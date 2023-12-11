import React from 'react'

export default function SpeakerWave_1Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3822 20.725' className={className}>
      <path
        d='M18.9858 15.4801C19.1208 15.5796 19.2563 15.5462 19.3487 15.4357C20.3155 14.2025 21.0209 12.4749 21.0209 10.3576C21.0209 8.23057 20.3155 6.50362 19.3487 5.26973C19.2563 5.15928 19.1208 5.13565 18.9858 5.22608C18.874 5.31993 18.8511 5.46583 18.9561 5.61534C20.0111 7.06329 20.4953 8.45069 20.4953 10.3576C20.4953 12.2548 20.0104 13.6415 18.9561 15.0908C18.8518 15.2403 18.874 15.3946 18.9858 15.4801Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.9945 20.7075C13.4565 20.7075 13.6653 20.3598 13.6653 19.9264L13.6653 0.766411C13.6653 0.342092 13.4565 0 12.9932 0C12.6831 0 12.4028 0.170801 12.2186 0.353031L6.40537 6.01924C6.27207 6.15254 6.10947 6.20976 5.87217 6.20976L1.78956 6.20976C0.826465 6.20976 0 7.03623 0 7.98799L0 12.8962C0 13.8291 0.826465 14.6556 1.78956 14.6556L5.87217 14.6556C6.10947 14.6556 6.27207 14.7226 6.40537 14.8559L12.2186 20.3488C12.4085 20.5367 12.6754 20.7075 12.9945 20.7075Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}