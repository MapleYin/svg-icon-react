import React from 'react'

export default function LeafArrowTriangleCirclepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 29.0073' className={className}>
      <path
        d='M0 14.5267C0 21.2262 5.4711 26.6966 12.1608 26.6966C18.8604 26.6966 24.3315 21.2262 24.3315 14.5267C24.3315 9.98391 21.815 6.00979 18.0944 3.91467C17.9519 3.8258 17.8109 3.88918 17.7471 3.99191C17.6923 4.12326 17.7291 4.27688 17.8507 4.34485C21.4197 6.36087 23.8306 10.1689 23.8312 14.5267C23.8228 20.9614 18.5872 26.1971 12.1608 26.1971C5.73516 26.1971 0.500206 20.9614 0.500206 14.5267C0.500206 8.80188 4.66046 4.02024 10.107 3.04729L10.107 5.71926C10.107 6.07434 10.3633 6.22561 10.7249 5.96779L14.4257 3.38508C14.7253 3.17814 14.7169 2.92257 14.4257 2.71496L10.7165 0.123158C10.3633-0.126258 10.107 0.0250119 10.107 0.380777L10.107 2.53595C4.37481 3.52208 0 8.53713 0 14.5267Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.21172 10.2995C6.15039 11.0049 6.07227 11.7757 6.07227 12.2367C6.07227 16.6789 8.59317 19.6304 12.3682 19.6304C14.0112 19.6304 15.6252 18.8751 16.1473 17.4195L15.8667 17.6675C16.5355 18.4571 16.7293 19.0288 17.1926 20.5708C17.2707 20.8436 17.466 20.9231 17.6522 20.9231C18.0722 20.9231 18.3406 20.5708 18.3406 20.0728C18.3406 19.1623 17.337 17.7211 16.7595 17.1652C14.3419 14.7871 10.8573 16.1809 9.40166 13.7612C9.28721 13.5666 9.52862 13.3908 9.70576 13.5673C11.6455 15.529 13.985 13.9734 16.7595 16.348C16.8626 16.4413 17.023 16.4079 17.0341 16.2496C17.0452 16.0368 17.0829 15.7459 17.0829 15.4187C17.0829 12.6355 15.2045 11.3716 12.3605 11.3716C11.4977 11.3716 10.5994 11.4761 9.75957 11.4761C8.43653 11.4761 7.26378 11.2031 6.57198 10.2432C6.43819 10.0542 6.22559 10.1205 6.21172 10.2995Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}