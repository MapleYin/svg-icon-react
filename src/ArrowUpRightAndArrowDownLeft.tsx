import React from 'react'

export default function ArrowUpRightAndArrowDownLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.1342 25.3363' className={className}>
      <path
        d='M23.5939 10.909C23.7607 10.909 23.8732 10.8167 23.8732 10.6492C23.8544 10.4817 23.7237 10.3908 23.5939 10.3908L19.1869 10.3908L15.215 10.5064L20.0834 5.65801L24.6972 1.04356C24.7472 0.994244 24.7729 0.939457 24.7729 0.874905C24.7729 0.714452 24.6778 0.622848 24.5174 0.622848C24.4633 0.622848 24.4008 0.647849 24.3521 0.697166L19.8033 5.27597L14.9074 10.1619L14.9867 6.20946L14.9867 1.79336C14.9867 1.63565 14.8951 1.52383 14.7283 1.52383C14.5608 1.52383 14.4867 1.64541 14.4867 1.79336L14.4867 10.4519C14.4867 10.7186 14.6771 10.909 14.9438 10.909ZM10.4635 24.7153C10.6219 24.7153 10.7044 24.5847 10.7044 24.4367L10.7044 15.0974C10.7044 14.8308 10.5056 14.641 10.248 14.641L0.899618 14.641C0.732134 14.641 0.620315 14.7333 0.620315 14.9001C0.639163 15.0585 0.769145 15.1592 0.899618 15.1592L6.00487 15.1592L9.96776 15.0429L5.09931 19.8829L0.0750017 24.9156C0.0250006 24.9656 0 25.0295 0 25.085C0 25.2454 0.0859404 25.3363 0.254791 25.3363C0.309578 25.3363 0.371396 25.312 0.420713 25.262L5.3794 20.274L10.2837 15.3881L10.1953 19.3399L10.1953 24.4367C10.1953 24.6035 10.2967 24.7153 10.4635 24.7153Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}