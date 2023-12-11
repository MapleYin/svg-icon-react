import React from 'react'

export default function BackwardEndFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.9499 19.0635' className={className}>
      <path
        d='M1.07207 19.0446L3.68477 19.0446C4.46632 19.0446 4.76593 18.745 4.76593 17.9726L4.76593 1.07207C4.76593 0.306642 4.46632 0 3.68477 0L1.07207 0C0.299611 0 0 0.300295 0 1.07207L0 17.9726C0 18.745 0.299611 19.0446 1.07207 19.0446ZM19.4168 18.5541C19.9981 18.5541 20.5886 18.1332 20.5886 17.132L20.5886 1.89307C20.5886 0.900978 19.9981 0.480761 19.4168 0.480761C19.1025 0.480761 18.7377 0.655859 18.4688 0.802149L5.27706 8.5542C4.92198 8.76865 4.69757 9.04307 4.69757 9.50801C4.69757 9.96387 4.94083 10.276 5.27706 10.4716L18.4688 18.2236C18.7189 18.3699 19.1025 18.5541 19.4168 18.5541Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
