import React from 'react'

export default function CarTopDoorSlidingLeftOpenFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.5336 28.5526' className={className}>
      <path
        d='M0.254302 22.2234C0.382723 22.2234 0.498155 22.117 0.498155 21.9691L0.498155 11.7327C0.498155 11.5848 0.382723 11.4882 0.254302 11.4882C0.134279 11.4882 0 11.5848 0 11.7146L0 21.9879C0 22.117 0.134279 22.2234 0.254302 22.2234ZM0.254302 13.8108L3.31622 13.8108L3.31622 13.2653L0.254302 13.2653ZM10.6107 28.533C15.412 28.533 18.1723 27.1917 18.1723 24.8598L18.1723 4.60577C18.1723 1.64209 15.4771 0 10.6107 0C5.7715 0 3.07628 1.64209 3.07628 4.60577L3.07628 24.8598C3.07628 27.1917 5.82745 28.533 10.6107 28.533ZM10.6288 11.9353C9.28801 11.9353 7.42141 12.0511 6.81252 12.0511C5.91906 12.0511 5.47121 11.6982 5.39172 10.7014L5.23273 8.90459C5.09396 7.24121 5.74045 6.39639 10.6288 6.39639C15.5179 6.39639 16.1644 7.24121 16.0256 8.90459L15.8659 10.7014C15.7871 11.6982 15.3393 12.0511 14.4458 12.0511C13.8369 12.0511 11.6254 11.9353 10.6288 11.9353ZM10.6288 25.104C6.42912 25.104 5.23859 24.5321 5.3926 22.8479L5.47551 21.8045C5.59816 20.4361 6.74055 19.9731 10.6288 19.9731C14.5178 19.9731 15.6602 20.4361 15.7828 21.8045L15.8748 22.8479C16.0197 24.5321 14.8292 25.104 10.6288 25.104Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}