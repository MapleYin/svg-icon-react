import React from 'react'

export default function FlorinsignCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.4001 9.40391L12.0311 11.4043L9.11983 11.4043C8.95693 11.4043 8.83994 11.5115 8.83994 11.6842C8.83994 11.8548 8.93809 11.9711 9.11983 11.9711L11.9272 11.9711L11.3795 14.8385C11.1367 16.2756 10.5354 16.9328 9.41094 16.9328C9.08457 16.9328 8.81797 16.8477 8.64014 16.7807C8.49571 16.7332 8.41621 16.7144 8.32422 16.7144C8.17744 16.7144 8.0793 16.8146 8.0793 16.9656C8.0793 17.1069 8.1831 17.2239 8.32852 17.2971C8.62217 17.424 9.03369 17.4729 9.40596 17.4729C10.8171 17.4729 11.598 16.6863 11.9314 14.9241L12.4896 11.9711L15.4907 11.9711C15.6634 11.9711 15.7706 11.8548 15.7706 11.6842C15.7706 11.5115 15.6634 11.4043 15.4907 11.4043L12.5947 11.4043L12.9526 9.4959C13.1954 8.042 13.7968 7.39522 14.9205 7.39522C15.256 7.39522 15.5226 7.47129 15.6913 7.5376C15.8448 7.59414 15.9243 7.60459 16.0072 7.60459C16.1631 7.60459 16.2612 7.51348 16.2612 7.35332C16.2612 7.22109 16.1574 7.1041 16.0029 7.03095C15.7184 6.90332 15.2978 6.85449 14.9255 6.85449C13.5144 6.85449 12.7335 7.63262 12.4001 9.40391Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}