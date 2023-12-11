import React from 'react'

export default function ArrowBackwardToLine({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.0044 18.7699' className={className}>
      <path
        d='M0.248638 18.0889C0.377743 18.0889 0.487511 17.9714 0.487511 17.8423L0.487511 0.247955C0.487511 0.118166 0.377743 0 0.248638 0C0.109768 0 0 0.118166 0 0.247955L0 17.8423C0 17.9714 0.109768 18.0889 0.248638 18.0889ZM9.42296 18.0889C9.57795 18.0889 9.66955 17.9707 9.66955 17.8611C9.66955 17.7798 9.64523 17.7075 9.61545 17.6686L3.71742 11.777L1.17854 9.22705L1.14602 9.24786L3.85608 9.27423L23.414 9.27423C23.5242 9.27423 23.6431 9.17354 23.6431 9.04444C23.6431 8.91465 23.5242 8.82373 23.414 8.82373L3.85608 8.82373L1.14602 8.84033L1.17854 8.8625L3.71742 6.32099L9.61545 0.420224C9.64523 0.390438 9.66955 0.309089 9.66955 0.236822C9.66955 0.118166 9.57795 0 9.42296 0C9.3507 0 9.29865 0.0243169 9.25636 0.0750017L0.51847 8.87646C0.476868 8.92715 0.4505 8.97149 0.4505 9.04444C0.4505 9.12647 0.476868 9.16173 0.51847 9.21173L9.25636 18.0139C9.29865 18.0639 9.3507 18.0889 9.42296 18.0889Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}