import React from 'react'

export function PoweroutletTypeJSquare({
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
        d='M6.49434 6.66299C6.24737 6.66299 6.0166 6.74434 5.85781 6.96378L3.28477 10.6157C3.1253 10.8554 3.10645 11.1305 3.26661 11.3694L5.85781 15.0416C6.0166 15.261 6.23536 15.3333 6.49434 15.3333L15.4649 15.3333C15.7148 15.3333 15.9434 15.261 16.1015 15.0416L18.6934 11.3694C18.8528 11.1305 18.8347 10.8554 18.6745 10.6157L16.1015 6.96378C15.9434 6.74434 15.7119 6.66299 15.4649 6.66299ZM6.64483 10.0596C7.16084 10.0596 7.58829 10.4772 7.58829 11.003C7.58829 11.519 7.16084 11.9465 6.64483 11.9465C6.11973 11.9465 5.70205 11.519 5.70205 11.003C5.70205 10.4772 6.11973 10.0596 6.64483 10.0596ZM10.9751 11.5167C11.5009 11.5167 11.9186 11.9435 11.9186 12.4595C11.9186 12.9846 11.5009 13.4029 10.9751 13.4029C10.4591 13.4029 10.0407 12.9846 10.0407 12.4595C10.0407 11.9435 10.4591 11.5167 10.9751 11.5167ZM15.3151 10.0596C15.8402 10.0596 16.2579 10.4772 16.2579 11.003C16.2579 11.519 15.8402 11.9465 15.3151 11.9465C14.7991 11.9465 14.3717 11.519 14.3717 11.003C14.3717 10.4772 14.7991 10.0596 15.3151 10.0596Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
