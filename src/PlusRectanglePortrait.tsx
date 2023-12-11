import React from 'react'

export default function PlusRectanglePortrait({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M0 23.3611C0 25.4356 1.10537 26.5424 3.1876 26.5424L16.8528 26.5424C18.926 26.5424 20.0314 25.4356 20.0314 23.3611L20.0314 3.23643C20.0314 1.16192 18.926 0.0551754 16.8528 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16192 0 3.23643ZM0.511533 23.3312L0.511533 3.26641C0.511533 1.48145 1.43399 0.557626 3.2126 0.557626L16.8278 0.557626C18.6064 0.557626 19.5289 1.48145 19.5289 3.26641L19.5289 23.3312C19.5289 25.1161 18.6064 26.0309 16.8278 26.0309L3.2126 26.0309C1.43399 26.0309 0.511533 25.1161 0.511533 23.3312Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.55401 13.2663C4.55401 13.3843 4.68897 13.5186 4.82715 13.5186L9.75332 13.5186L9.75332 18.4454C9.75332 18.5829 9.88828 18.7186 10.0063 18.7186C10.1619 18.7186 10.2969 18.6018 10.2969 18.4454L10.2969 13.5186L15.2244 13.5186C15.3612 13.5186 15.4969 13.3843 15.4969 13.2663C15.4969 13.11 15.3801 12.975 15.2244 12.975L10.2969 12.975L10.2969 8.04883C10.2969 7.89248 10.1619 7.775 10.0063 7.775C9.88828 7.775 9.75332 7.91065 9.75332 8.04883L9.75332 12.975L4.82715 12.975C4.6708 12.975 4.55401 13.11 4.55401 13.2663Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}