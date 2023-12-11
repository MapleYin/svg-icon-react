import React from 'react'

export default function CarTopDoorSlidingLeftOpen({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.5336 28.5526' className={className}>
      <path
        d='M0.254302 22.2234C0.382723 22.2234 0.498155 22.117 0.498155 21.9691L0.498155 11.7327C0.498155 11.5848 0.382723 11.4882 0.254302 11.4882C0.134279 11.4882 0 11.5848 0 11.7146L0 21.9879C0 22.117 0.134279 22.2234 0.254302 22.2234ZM0.254302 13.8108L3.31622 13.8108L3.31622 13.2653L0.254302 13.2653ZM10.6107 28.533C15.412 28.533 18.1723 27.1917 18.1723 24.8598L18.1723 4.60577C18.1723 1.64209 15.4771 0 10.6107 0C5.7715 0 3.07628 1.64209 3.07628 4.60577L3.07628 24.8598C3.07628 27.1917 5.82745 28.533 10.6107 28.533ZM10.6107 28.0362C6.14269 28.0362 3.58283 26.8751 3.58283 24.8634L3.58283 4.60577C3.58283 1.97569 6.09602 0.506553 10.6107 0.506553C15.1435 0.506553 17.6657 1.97569 17.6657 4.60577L17.6657 24.8634C17.6657 26.8751 15.0968 28.0362 10.6107 28.0362ZM10.6288 11.9239C11.6324 11.9239 13.8503 12.0391 14.4578 12.0391C15.3499 12.0391 15.8062 11.6868 15.8843 10.6823L16.044 8.88965C16.1814 7.21153 15.5285 6.35899 10.6288 6.35899C5.72913 6.35899 5.07629 7.21153 5.22346 8.88965L5.37404 10.6823C5.45217 11.6868 5.90842 12.0391 6.80959 12.0391C7.41711 12.0391 9.28098 11.9239 10.6288 11.9239ZM10.6288 25.1407C14.8399 25.1407 16.0367 24.5618 15.8932 22.8719L15.8012 21.8208C15.6792 20.4461 14.5298 19.9844 10.6288 19.9844C6.72854 19.9844 5.5882 20.4461 5.46623 21.8208L5.37424 22.8719C5.22092 24.5618 6.41848 25.1407 10.6288 25.1407Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
