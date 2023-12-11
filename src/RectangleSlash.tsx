import React from 'react'

export default function RectangleSlash({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4153 27.2939' className={className}>
      <path
        d='M2.46414 3.23509C1.17124 3.46813 0.512217 4.36139 0.512217 5.87047L0.512217 21.4052C0.512217 23.1838 1.42696 24.1063 3.21124 24.1063L23.3289 24.1063L23.8403 24.6178L3.18194 24.6178C1.10742 24.6178 0 23.5125 0 21.4302L0 5.84616C0 4.19199 0.698902 3.15389 2.02875 2.79957ZM29.054 5.84616L29.054 21.4302C29.054 23.0574 28.3534 24.1136 27.019 24.4745L26.5821 24.0375C27.8357 23.8001 28.5425 22.9085 28.5425 21.4052L28.5425 5.87047C28.5425 4.09255 27.553 3.16941 25.8428 3.16941L5.71338 3.16941L5.20183 2.65787L25.8728 2.65787C27.948 2.65787 29.054 3.80094 29.054 5.84616Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.7842 26.2835C26.8892 26.3884 27.0441 26.4066 27.1666 26.2835C27.2891 26.1603 27.2709 26.006 27.1666 25.9017L2.25713 0.99293C2.171 0.906796 2.01602 0.869784 1.88379 0.99293C1.77041 1.09655 1.77041 1.27106 1.88379 1.37536Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
