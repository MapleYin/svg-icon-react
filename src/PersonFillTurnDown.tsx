import React from 'react'

export default function PersonFillTurnDown({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2035 22.3164' className={className}>
      <path
        d='M1.80137 0.286621C0.694043 0.286621 0 0.623244 0 1.68975C0 4.88653 3.99824 9.30469 10.4211 9.30469C16.8439 9.30469 20.8422 4.88653 20.8422 1.68975C20.8422 0.623244 20.1572 0.286621 19.0408 0.286621ZM10.4581 11.5787C7.68877 11.5787 5.60342 13.9363 5.60342 16.9971C5.56641 19.8616 7.73555 22.3164 10.4581 22.3164C13.1813 22.3164 15.3135 19.8553 15.3135 16.9984C15.3135 13.9363 13.2281 11.5787 10.4581 11.5787Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}