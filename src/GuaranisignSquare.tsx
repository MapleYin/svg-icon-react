import React from 'react'

export default function GuaranisignSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1613 17.8695C11.3383 17.8695 11.4546 17.7721 11.4546 17.5665L11.4546 16.4501C13.5277 16.3638 15.0639 14.8603 15.0639 12.3391L15.0639 11.5108C15.0639 11.2321 14.9169 11.1396 14.685 11.1396L11.4546 11.1396L11.4546 6.3292C13.1105 6.40372 14.2939 7.54327 14.4759 9.01777C14.4938 9.22041 14.6165 9.31309 14.7522 9.31309C14.8982 9.31309 15.0173 9.19473 15.0173 9.01162C15.0173 8.82402 14.9775 8.73906 14.9364 8.56191C14.5655 6.99307 13.241 5.86435 11.4546 5.78984L11.4546 4.92344C11.4546 4.70879 11.3383 4.61133 11.1613 4.61133C10.9844 4.61133 10.8681 4.70879 10.8681 4.92344L10.8681 5.80869C8.35781 6.00312 6.91494 7.97403 6.91494 11.0316C6.91494 14.1758 8.35645 16.2284 10.8681 16.4313L10.8681 17.5665C10.8681 17.7721 11.0032 17.8695 11.1613 17.8695ZM10.8681 15.8912C8.71836 15.6591 7.46251 13.8139 7.46251 11.0316C7.46251 8.32413 8.68204 6.5627 10.8681 6.34942ZM11.4546 15.9023L11.4546 11.6854L14.5386 11.6854L14.5386 12.3087C14.5386 14.4591 13.2078 15.8251 11.4546 15.9023Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
