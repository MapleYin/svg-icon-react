import React from 'react'

export default function ForwardEndFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.9499 19.0635' className={className}>
      <path
        d='M16.8947 19.0446L19.5165 19.0446C20.289 19.0446 20.5886 18.745 20.5886 17.9726L20.5886 1.07207C20.5886 0.306642 20.289 0 19.5165 0L16.8947 0C16.1223 0 15.8227 0.300295 15.8227 1.07207L15.8227 17.9726C15.8227 18.745 16.1223 19.0446 16.8947 19.0446ZM1.1627 18.5541C1.48614 18.5541 1.86973 18.3699 2.11983 18.2236L15.3024 10.4716C15.6478 10.276 15.891 9.96387 15.891 9.50801C15.891 9.04307 15.6575 8.76865 15.3024 8.5542L2.11983 0.802149C1.85088 0.655859 1.48614 0.480761 1.1627 0.480761C0.590529 0.480761 0 0.900978 0 1.89307L0 17.132C0 18.1332 0.590529 18.5541 1.1627 18.5541Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}