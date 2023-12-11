import React from 'react'

export default function ACircleFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.8016 6.87764L7.79932 17.373C7.775 17.4537 7.76387 17.4737 7.76387 17.5217C7.76387 17.681 7.86816 17.7664 8.05879 17.7664C8.20489 17.7664 8.26104 17.7171 8.32784 17.5349L9.65225 14.0623L14.6499 14.0623L15.975 17.5349C16.0418 17.708 16.0973 17.7664 16.2811 17.7664C16.4151 17.7664 16.539 17.6628 16.539 17.5405C16.539 17.4737 16.5278 17.4537 16.5035 17.373L12.4922 6.87764C12.4317 6.69131 12.3199 6.62539 12.1602 6.62539C11.9815 6.62539 11.8711 6.69131 11.8016 6.87764ZM14.4361 13.5034L9.86602 13.5034L12.1288 7.55362L12.1733 7.55362Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
