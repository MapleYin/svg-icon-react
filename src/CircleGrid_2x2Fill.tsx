import React from 'react'

export default function CircleGrid_2x2Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.0305 23.8797' className={className}>
      <path
        d='M19.2458 23.8797C22.1984 23.8797 24.6691 21.3811 24.6691 18.4096C24.6691 15.4395 22.1984 12.9492 19.2458 12.9492C16.2178 12.9492 13.7568 15.4395 13.7568 18.4096C13.7568 21.3811 16.2178 23.8797 19.2458 23.8797Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.47988 23.8797C8.4416 23.8797 10.9123 21.3811 10.9123 18.4096C10.9123 15.4395 8.4416 12.9492 5.47988 12.9492C2.46094 12.9492 0 15.4395 0 18.4096C0 21.3811 2.46094 23.8797 5.47988 23.8797Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M19.2458 10.985C22.1984 10.985 24.6691 8.49541 24.6691 5.52393C24.6691 2.54473 22.1984 0.0544918 19.2458 0.0544918C16.2178 0.0544918 13.7568 2.54473 13.7568 5.52393C13.7568 8.49541 16.2178 10.985 19.2458 10.985Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M5.47988 10.985C8.4416 10.985 10.9123 8.49541 10.9123 5.52393C10.9123 2.54473 8.4416 0.0544918 5.47988 0.0544918C2.46094 0.0544918 0 2.54473 0 5.52393C0 8.49541 2.46094 10.985 5.47988 10.985Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}