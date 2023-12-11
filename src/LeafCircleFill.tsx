import React from 'react'

export default function LeafCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.22871 6.98057C6.16738 7.68663 6.08926 8.45879 6.08926 8.9128C6.08926 13.3437 8.60518 16.2908 12.3689 16.2908C13.8694 16.2908 15.329 15.6438 15.9688 14.4706C16.5415 15.1905 16.7507 15.7938 17.1735 17.2326C17.2523 17.5061 17.4477 17.5765 17.643 17.5765C18.0545 17.5765 18.3236 17.2326 18.3236 16.7332C18.3236 15.8214 17.318 14.3872 16.7488 13.8299C14.3362 11.4666 10.863 12.8449 9.40596 10.4387C9.29082 10.2434 9.54199 10.0683 9.71074 10.244C11.6448 12.1994 13.9793 10.6508 16.7488 13.0197C16.852 13.1047 17.0039 13.0804 17.0157 12.9214C17.0353 12.7093 17.0646 12.417 17.0646 12.0891C17.0646 9.31924 15.2002 8.05332 12.3611 8.05332C11.5054 8.05332 10.6058 8.15918 9.76455 8.15918C8.44922 8.15918 7.2835 7.88624 6.59034 6.93399C6.45586 6.74434 6.24258 6.80997 6.22871 6.98057Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}