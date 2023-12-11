import React from 'react'

export default function LJoystickTiltUp({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.4689 32.8483' className={className}>
      <path
        d='M9.54149 4.76457C4.3367 6.08689 0.511533 10.8031 0.511533 16.4193C0.511533 23.0652 5.8838 28.457 12.5485 28.457C19.2042 28.457 24.596 23.084 24.596 16.4193C24.596 10.7909 20.762 6.08807 15.5635 4.76599C15.6743 4.63051 15.7558 4.47199 15.8043 4.30127C21.1665 5.72241 25.1075 10.6082 25.1075 16.4193C25.1075 23.3488 19.4878 28.9685 12.5485 28.9685C5.6002 28.9685 0 23.3306 0 16.4193C0 10.62 3.93261 5.72093 9.30139 4.29974C9.34977 4.47057 9.431 4.6291 9.54149 4.76457Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.5497 4.34485L14.5565 4.34485C14.9472 4.34485 15.0942 3.89895 14.8615 3.57365L13.0017 1.1176C12.7702 0.832537 12.3366 0.814373 12.1045 1.1176L10.244 3.57434C10.0127 3.89827 10.1576 4.34485 10.5497 4.34485Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.5485 25.9073C17.8021 25.9073 22.0372 21.6623 22.0372 16.4193C22.0372 11.1657 17.8021 6.93196 12.5485 6.93196C7.30548 6.93196 3.06124 11.1657 3.06124 16.4193C3.06124 21.6623 7.30548 25.9073 12.5485 25.9073ZM12.5485 25.3957C7.58908 25.3957 3.57277 21.3787 3.57277 16.4193C3.57277 11.45 7.58908 7.43441 12.5485 7.43441C17.5178 7.43441 21.5341 11.45 21.5341 16.4193C21.5341 21.3787 17.5178 25.3957 12.5485 25.3957ZM10.2971 21.2072L15.4945 21.2072C15.649 21.2072 15.7722 21.0783 15.7722 20.9309C15.7722 20.8023 15.6309 20.6546 15.4945 20.6546L10.5745 20.6546L10.5745 11.8573C10.5745 11.7107 10.4332 11.5939 10.2971 11.5939C10.1435 11.5939 10.014 11.7023 10.014 11.8573L10.014 20.9354C10.014 21.0722 10.1623 21.2072 10.2971 21.2072Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}