import React from 'react'

export default function Square_2Layers_3dTopFilled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.0139 25.6779' className={className}>
      <path
        d='M9.03393 12.7863L0.84591 17.5026C0.695813 17.5878 0.573646 17.6904 0.573646 17.8601C0.573646 18.029 0.695813 18.1323 0.84591 18.2168L11.4764 24.3406C11.6172 24.4117 11.7008 24.4612 11.8305 24.4612C11.9518 24.4612 12.0347 24.4117 12.1755 24.3406L22.806 18.2168C22.9567 18.1323 23.0782 18.029 23.0782 17.8601C23.0782 17.6904 22.9567 17.5878 22.806 17.5026L14.618 12.7864L15.1218 12.496L23.0104 17.0423C23.4086 17.2602 23.6526 17.4887 23.6526 17.8601C23.6526 18.2308 23.4086 18.4593 23.0104 18.6778L12.5206 24.7232C12.2378 24.8813 12.0624 24.9914 11.8305 24.9914C11.5901 24.9914 11.4147 24.8813 11.1313 24.7232L0.642192 18.6778C0.243263 18.4593 0 18.2308 0 17.8601C0 17.4887 0.243263 17.2602 0.642192 17.0423L8.53024 12.496Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.8305 14.2641C12.0624 14.2641 12.2378 14.1532 12.5206 13.9951L23.0104 7.94982C23.4086 7.72218 23.6526 7.50274 23.6526 7.13204C23.6526 6.75157 23.4086 6.53281 23.0104 6.30518L12.5206 0.268947C12.2378 0.101758 12.0624 0 11.8305 0C11.5901 0 11.4147 0.101758 11.1313 0.268947L0.642192 6.30518C0.243263 6.53281 0 6.75157 0 7.13204C0 7.50274 0.243263 7.72218 0.642192 7.94982L11.1313 13.9951C11.4147 14.1532 11.5901 14.2641 11.8305 14.2641Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
