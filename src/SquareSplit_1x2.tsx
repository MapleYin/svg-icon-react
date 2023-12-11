import React from 'react'

export default function SquareSplit_1x2({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 21.9977' className={className}>
      <path
        d='M0.399908 10.7619L0.399908 11.2734L21.7367 11.2734L21.7367 10.7619ZM0 3.21963L0 18.8164C0 20.8909 1.14307 21.9977 3.1876 21.9977L18.7717 21.9977C20.8169 21.9977 21.96 20.8909 21.96 18.8164L21.96 3.21963C21.96 1.14512 20.8448 0.0376952 18.7717 0.0376952L3.1876 0.0376952C1.10537 0.0376952 0 1.14512 0 3.21963ZM0.511533 3.25801C0.511533 1.47305 1.43399 0.549228 3.2126 0.549228L18.7474 0.549228C20.526 0.549228 21.4484 1.47305 21.4484 3.25801L21.4484 18.7864C21.4484 20.4967 20.526 21.4861 18.7474 21.4861L3.2126 21.4861C1.43399 21.4861 0.511533 20.4967 0.511533 18.7864Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
