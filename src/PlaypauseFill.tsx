import React from 'react'

export default function PlaypauseFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.25 19.0635' className={className}>
      <path
        d='M20.7572 19.0446L23.3699 19.0446C24.1424 19.0446 24.442 18.745 24.442 17.9726L24.442 1.07207C24.442 0.306642 24.1424 0 23.3699 0L20.7572 0C19.9757 0 19.6852 0.300295 19.6852 1.07207L19.6852 17.9726C19.6852 18.745 19.9757 19.0446 20.7572 19.0446ZM29.2039 19.0446L31.8166 19.0446C32.5891 19.0446 32.8887 18.745 32.8887 17.9726L32.8887 1.07207C32.8887 0.306642 32.5891 0 31.8166 0L29.2039 0C28.4224 0 28.1319 0.300295 28.1319 1.07207L28.1319 17.9726C28.1319 18.745 28.4224 19.0446 29.2039 19.0446ZM1.1627 18.5541C1.48614 18.5541 1.86973 18.3699 2.11983 18.2236L15.3024 10.4716C15.6478 10.276 15.891 9.96387 15.891 9.50801C15.891 9.04307 15.6575 8.76865 15.3024 8.5542L2.11983 0.802149C1.85088 0.655859 1.48614 0.480761 1.1627 0.480761C0.590529 0.480761 0 0.900978 0 1.89307L0 17.132C0 18.1332 0.590529 18.5541 1.1627 18.5541Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
