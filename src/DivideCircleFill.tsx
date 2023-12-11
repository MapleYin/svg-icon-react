import React from 'react'

export default function DivideCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.537 16.7825C11.537 17.1419 11.8246 17.3995 12.1595 17.3995C12.5173 17.3995 12.8035 17.1231 12.8035 16.7644C12.8035 16.4261 12.5089 16.1405 12.1595 16.1405C11.8246 16.1405 11.537 16.4442 11.537 16.7825ZM6.33819 11.9345C6.19385 11.9345 6.0834 12.0395 6.0834 12.1811C6.0834 12.3317 6.19522 12.427 6.33819 12.427L17.9842 12.427C18.1272 12.427 18.2376 12.3317 18.2376 12.1811C18.2376 12.0395 18.1194 11.9345 17.9842 11.9345ZM11.537 7.60459C11.537 7.97237 11.8246 8.22931 12.1595 8.22931C12.5173 8.22931 12.8035 7.95421 12.8035 7.59483C12.8035 7.25654 12.5089 6.97099 12.1595 6.97099C11.8246 6.97099 11.537 7.27539 11.537 7.60459Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
