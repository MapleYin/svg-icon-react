import React from 'react'

export default function ArrowDownRightAndArrowUpLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.1342 25.3363' className={className}>
      <path
        d='M1.17891 10.909L9.8291 10.909C10.0957 10.909 10.2855 10.7186 10.2855 10.4519L10.2855 1.79336C10.2855 1.64541 10.2113 1.52383 10.0438 1.52383C9.87773 1.52383 9.78544 1.63565 9.78544 1.79336L9.78544 6.20946L9.86474 10.1619L4.96954 5.27597L0.420713 0.697166C0.371396 0.647849 0.309578 0.622848 0.254791 0.622848C0.0859404 0.622848 0 0.714452 0 0.874905C0 0.939457 0.0250006 0.994244 0.0750017 1.04356L4.68945 5.65801L9.54813 10.5064L5.58592 10.3908L1.17891 10.3908C1.04844 10.3908 0.918458 10.4817 0.899611 10.6492C0.899611 10.8167 1.01143 10.909 1.17891 10.909ZM14.3094 24.7153C14.4762 24.7153 14.5678 24.6035 14.5678 24.4367L14.5678 19.3399L14.4885 15.3881L19.3928 20.274L24.3521 25.262C24.4008 25.312 24.4633 25.3363 24.5174 25.3363C24.6778 25.3363 24.7729 25.2454 24.7729 25.085C24.7729 25.0295 24.7472 24.9656 24.6972 24.9156L19.6645 19.8829L14.8051 15.0429L18.7673 15.1592L23.8732 15.1592C24.003 15.1592 24.1337 15.0585 24.1435 14.9001C24.1435 14.7333 24.0407 14.641 23.8732 14.641L14.5241 14.641C14.2666 14.641 14.0678 14.8308 14.0678 15.0974L14.0678 24.4367C14.0678 24.5847 14.151 24.7153 14.3094 24.7153Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}