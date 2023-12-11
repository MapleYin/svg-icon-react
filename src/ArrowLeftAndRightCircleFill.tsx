import React from 'react'

export default function ArrowLeftAndRightCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM14.6149 8.28663C14.6149 8.38546 14.6574 8.43546 14.7326 8.50157L16.4188 10.1947L18.0644 11.9L16.4803 11.8568L7.83166 11.8568L6.24688 11.9L7.89317 10.1947L9.5793 8.50157C9.64473 8.43546 9.68721 8.38546 9.68721 8.28663C9.68721 8.16367 9.60879 8.06641 9.45928 8.06641C9.36953 8.06641 9.31953 8.10889 9.26386 8.15547L5.44961 11.9613C5.39824 12.0036 5.37324 12.0899 5.37324 12.1336C5.37324 12.1773 5.39824 12.2629 5.44961 12.3059L9.26386 16.1033C9.31953 16.159 9.36953 16.2008 9.45928 16.2008C9.60879 16.2008 9.68721 16.1042 9.68721 15.9722C9.68721 15.8817 9.65313 15.8324 9.5793 15.7572L7.89317 14.0725L6.24757 12.3679L7.83166 12.411L16.4803 12.411L18.0637 12.3679L16.4188 14.0725L14.7326 15.7572C14.6581 15.8324 14.6149 15.8817 14.6149 15.9722C14.6149 16.1042 14.7024 16.2008 14.8436 16.2008C14.9417 16.2008 14.9924 16.159 15.0481 16.1033L18.8623 12.3059C18.9046 12.2629 18.9296 12.1773 18.9296 12.1336C18.9296 12.0899 18.9046 12.0036 18.8623 11.9613L15.0481 8.15547C14.9924 8.10889 14.9417 8.06641 14.8436 8.06641C14.7024 8.06641 14.6149 8.16367 14.6149 8.28663Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}