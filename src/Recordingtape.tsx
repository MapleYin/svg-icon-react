import React from 'react'

export default function Recordingtape({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.57 15.6436' className={className}>
      <path
        d='M0 7.8169C0 12.1372 3.50635 15.6247 7.8169 15.6247L28.3918 15.6247C32.7212 15.6247 36.2087 12.1184 36.2087 7.8169C36.2087 3.4875 32.7024 0 28.3918 0C24.0715 0 20.584 3.50567 20.584 7.8169C20.584 11.0035 22.5061 13.872 25.4875 15.1329L10.7212 15.1329C13.7026 13.872 15.6247 11.0035 15.6247 7.8169C15.6247 3.4875 12.1184 0 7.8169 0C3.4875 0 0 3.50567 0 7.8169ZM0.500206 7.81621C0.500206 3.78497 3.77725 0.499522 7.8085 0.499522C11.8481 0.499522 15.1154 3.78497 15.1154 7.81621C15.1154 11.8475 11.8481 15.1329 7.8085 15.1329C3.77725 15.1329 0.500206 11.8475 0.500206 7.81621ZM21.0933 7.81621C21.0933 3.78497 24.3606 0.499522 28.3911 0.499522C32.4224 0.499522 35.7085 3.78497 35.7085 7.81621C35.7085 11.8475 32.4224 15.1329 28.3911 15.1329C24.3606 15.1329 21.0933 11.8475 21.0933 7.81621Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
