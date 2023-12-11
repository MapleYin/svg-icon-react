import React from 'react'

export default function Lightbulb_2Fill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.9812 27.1162' className={className}>
      <path
        d='M6.74786 24.598C5.19669 24.598 4.14034 23.8385 4.10196 22.7604L9.39308 22.7604C9.35538 23.8385 8.27882 24.598 6.74786 24.598ZM9.98361 21.5325C9.98361 21.7765 9.78917 21.9779 9.55567 21.9779L3.93868 21.9779C3.71358 21.9779 3.51143 21.7758 3.51143 21.5325C3.51143 21.2886 3.71358 21.0864 3.93868 21.0864L9.55567 21.0864C9.78917 21.0864 9.98361 21.2879 9.98361 21.5325ZM9.3349 3.23603C8.38452 4.47426 7.83146 5.97052 7.83146 7.52911C7.83146 11.0575 9.56141 12.633 10.5052 17.3774C10.3876 18.1078 10.2902 18.9244 10.2204 19.8404C10.182 20.1214 9.96515 20.3033 9.70099 20.3033L3.75635 20.3033C3.50059 20.3033 3.27461 20.1214 3.24532 19.8404C2.71114 12.8283 0.551078 11.6395 0.551078 8.3919C0.551078 5.39805 3.29483 2.67637 6.72833 2.67637C7.66421 2.67637 8.54777 2.87752 9.3349 3.23603Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.9109 0.912406C11.918 0.912406 8.74386 4.06241 8.74386 7.52911C8.74386 11.2802 11.2659 12.6707 11.8985 20.8917C11.9291 21.2215 12.0895 21.3657 12.503 21.3657L19.3271 21.3657C19.7406 21.3657 19.9017 21.2215 19.9317 20.8917C20.5642 12.6707 23.0688 11.2802 23.0688 7.52911C23.0688 4.06241 19.9128 0.912406 15.9109 0.912406ZM12.6581 23.2343L19.2006 23.2343C19.4634 23.2343 19.6662 23.0328 19.6662 22.7791C19.6662 22.5163 19.4634 22.3142 19.2006 22.3142L12.6581 22.3142C12.4044 22.3142 12.2023 22.5163 12.2023 22.7791C12.2023 23.0328 12.4044 23.2343 12.6581 23.2343ZM15.929 26.2213C17.6741 26.2213 18.8965 25.3948 18.9655 24.1827L12.9016 24.1827C12.9615 25.3948 14.193 26.2213 15.929 26.2213Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
