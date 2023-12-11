import React from 'react'

export default function XmarkOctagonFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3161 23.5684' className={className}>
      <path
        d='M18.9203 1.86718L23.1033 6.23536C23.786 6.9417 23.9548 7.40889 23.9548 8.59464L23.9548 14.9549C23.9548 16.1406 23.786 16.6085 23.1033 17.3142L18.9203 21.6823C17.8877 22.7561 17.3467 23.5495 15.0272 23.5495L8.92764 23.5495C6.60811 23.5495 6.06709 22.7561 5.03516 21.6823L0.851466 17.3142C0.16875 16.6085 0 16.1406 0 14.9549L0 8.59464C0 7.40889 0.16875 6.9417 0.851466 6.23536L5.03516 1.86718C6.06709 0.794139 6.60811 0 8.92764 0L15.0272 0C17.3467 0 17.8877 0.794139 18.9203 1.86718ZM7.41807 7.50538C7.41807 7.60421 7.44238 7.66466 7.52735 7.7587L11.5668 11.7891L7.52735 15.8285C7.44238 15.9135 7.41807 15.9746 7.41807 16.0728C7.41807 16.2355 7.546 16.3452 7.71641 16.3452C7.83477 16.3452 7.87706 16.3202 7.98087 16.2171L11.9826 12.214L15.9851 16.2171C16.0875 16.3202 16.1584 16.3452 16.2482 16.3452C16.4199 16.3452 16.5569 16.2355 16.5569 16.0728C16.5569 15.983 16.5326 15.9128 16.447 15.8278L12.4075 11.7891L16.4386 7.75802C16.5249 7.67169 16.5576 7.60352 16.5576 7.51309C16.5576 7.35176 16.4206 7.24268 16.2495 7.24268C16.1514 7.24268 16.0825 7.26631 15.9787 7.3708L11.9826 11.3655L7.9879 7.37149C7.88409 7.25928 7.83477 7.23496 7.71641 7.23496C7.546 7.23496 7.41807 7.35244 7.41807 7.50538Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}