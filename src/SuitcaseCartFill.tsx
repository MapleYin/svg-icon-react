import React from 'react'

export default function SuitcaseCartFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.902 28.0461' className={className}>
      <path
        d='M29.4128 21.5506C29.5364 21.5506 29.6825 21.4883 29.6825 21.2906C29.6825 21.1014 29.5364 21.0391 29.4128 21.0391L6.48887 21.0391C5.08497 21.0391 4.43751 20.4007 4.43751 18.9682L4.43751 6.01563C4.43751 4.23409 3.621 3.41826 1.83741 3.41826L0.260649 3.41826C0.137014 3.41826 0 3.5462 0 3.66915C0 3.79278 0.137014 3.9298 0.260649 3.9298L1.85645 3.9298C3.25127 3.9298 3.92598 4.55909 3.92598 5.99161L3.92598 18.9441C3.92598 20.7355 4.73408 21.5506 6.517 21.5506ZM24.8856 28.0266C25.769 28.0266 26.5296 27.2659 26.5296 26.3833C26.5296 25.4812 25.769 24.7205 24.8856 24.7205C24.003 24.7205 23.2424 25.4812 23.2424 26.3833C23.2424 27.2659 24.003 28.0266 24.8856 28.0266ZM11.3707 28.0266C12.2533 28.0266 13.014 27.2659 13.014 26.3833C13.014 25.4812 12.2533 24.7205 11.3707 24.7205C10.4881 24.7205 9.72744 25.4812 9.72744 26.3833C9.72744 27.2659 10.4881 28.0266 11.3707 28.0266Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M29.6644 16.1854L29.6644 6.00615C29.6644 4.50469 28.8806 3.70615 27.3639 3.70615L9.27267 3.70615C7.76436 3.70615 6.98126 4.50469 6.98126 6.00615L6.98126 16.1854C6.98126 17.6861 7.76436 18.4763 9.27267 18.4763L27.3639 18.4763C28.8806 18.4763 29.6644 17.6861 29.6644 16.1854ZM25.5275 18.4763L24.977 18.4763L24.977 3.70615L25.5275 3.70615ZM11.668 18.4763L11.1182 18.4763L11.1182 3.70615L11.668 3.70615ZM23.5038 3.6085L23.5038 2.07002C23.5038 0.711818 22.718 0 21.2285 0L15.4359 0C13.934 0 13.1418 0.718166 13.1418 2.07002L13.1418 3.61622L13.6753 3.61622L13.6753 2.08204C13.6753 1.07579 14.2782 0.547566 15.406 0.547566L21.2578 0.547566C22.3862 0.547566 22.9605 1.07579 22.9605 2.08204L22.9605 3.6085Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}