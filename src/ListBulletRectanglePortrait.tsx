import React from 'react'

export default function ListBulletRectanglePortrait({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643ZM0.511533 23.3312L0.511533 3.26641C0.511533 1.48145 1.43399 0.557626 3.2126 0.557626L16.8278 0.557626C18.6064 0.557626 19.5289 1.48145 19.5289 3.26641L19.5289 23.3312C19.5289 25.1161 18.6064 26.0309 16.8278 26.0309L3.2126 26.0309C1.43399 26.0309 0.511533 25.1161 0.511533 23.3312Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.92012 14.5456C4.52764 14.5456 5.01798 14.0553 5.01798 13.4478C5.01798 12.8396 4.52764 12.3401 3.92012 12.3401C3.30352 12.3401 2.81251 12.8402 2.81251 13.4478C2.81251 14.0546 3.30352 14.5456 3.92012 14.5456ZM7.40079 13.7227L16.9439 13.7227C17.1159 13.7227 17.2279 13.6197 17.2279 13.4478C17.2279 13.2758 17.1166 13.1638 16.9439 13.1638L7.40079 13.1638C7.22813 13.1638 7.12588 13.2758 7.12588 13.4478C7.12588 13.6197 7.22881 13.7227 7.40079 13.7227Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.92012 10.393C4.52764 10.393 5.01798 9.89356 5.01798 9.28535C5.01798 8.67715 4.52764 8.17842 3.92012 8.17842C3.31192 8.17842 2.81251 8.67783 2.81251 9.28535C2.81251 9.89356 3.31192 10.393 3.92012 10.393ZM7.40079 9.56026L16.9439 9.56026C17.1166 9.56026 17.2279 9.45801 17.2279 9.28535C17.2279 9.11338 17.1166 9.01113 16.9439 9.01113L7.40079 9.01113C7.22813 9.01113 7.12588 9.11338 7.12588 9.28535C7.12588 9.45801 7.22813 9.56026 7.40079 9.56026Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M3.92012 6.21358C4.52764 6.21358 5.01798 5.71416 5.01798 5.10596C5.01798 4.49844 4.52764 3.99903 3.92012 3.99903C3.30352 3.99903 2.81251 4.49912 2.81251 5.10596C2.81251 5.71348 3.30352 6.21358 3.92012 6.21358ZM7.40079 5.38155L16.9439 5.38155C17.1159 5.38155 17.2279 5.27794 17.2279 5.10596C17.2279 4.93399 17.1159 4.83106 16.9439 4.83106L7.40079 4.83106C7.22881 4.83106 7.12588 4.93399 7.12588 5.10596C7.12588 5.27794 7.22881 5.38155 7.40079 5.38155Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}