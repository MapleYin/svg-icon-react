import React from 'react'

export default function FieldOfViewUltrawideFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.5373 20.9221' className={className}>
      <path
        d='M0.833802 11.8663L15.985 20.0564C16.8621 20.525 17.3089 20.7383 18.0922 20.7383C18.8762 20.7383 19.3139 20.525 20.191 20.0564L35.3415 11.8663C36.2668 11.3601 36.4451 10.3387 35.7631 9.35957C31.6999 3.5999 24.852 0 18.0922 0C11.3331 0 4.48517 3.5999 0.412901 9.35957C-0.269131 10.3387-0.0908091 11.3601 0.833802 11.8663Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
