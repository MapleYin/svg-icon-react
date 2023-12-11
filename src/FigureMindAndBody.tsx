import React from 'react'

export default function FigureMindAndBody({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.7612 21.6371' className={className}>
      <path
        d='M0.383167 9.95381L4.24293 13.8136C4.77301 14.3443 5.62809 14.3639 6.13932 13.725L8.56579 10.7203C8.70456 10.5334 8.97868 10.6408 8.97868 10.8675L8.97868 15.9743L4.64538 15.4742C3.14303 15.2978 2.66178 17.4976 4.09577 17.9788L9.02751 19.6095C8.79108 20.6306 9.68454 21.524 10.6868 21.19L12.2003 20.6794L13.7131 21.19C14.7244 21.524 15.6178 20.6306 15.373 19.6095L20.3229 17.9788C21.7569 17.4976 21.2659 15.2978 19.7635 15.4742L15.4218 15.9743L15.4218 10.8675C15.4218 10.6408 15.696 10.5334 15.8431 10.7203L18.2605 13.725C18.7718 14.3639 19.6541 14.3632 20.1758 13.8136L24.0258 9.95381C24.5363 9.45166 24.5279 8.64678 24.0258 8.13692C23.5257 7.64522 22.6915 7.62637 22.1998 8.13692L19.3611 10.9944L16.4632 7.43877C15.9812 6.84942 15.2642 6.47627 14.4789 6.47627L9.92097 6.47627C9.13561 6.47627 8.41862 6.84942 7.94577 7.43877L5.03874 10.9944L2.20006 8.13692C1.70836 7.62637 0.874183 7.64522 0.383167 8.13692C-0.128064 8.64678-0.12738 9.45166 0.383167 9.95381ZM12.2003 5.01963C13.575 5.01963 14.7042 3.89043 14.7042 2.50459C14.7042 1.1292 13.575 0 12.2003 0C10.8137 0 9.68454 1.1292 9.68454 2.50459C9.68454 3.89043 10.8137 5.01963 12.2003 5.01963Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
