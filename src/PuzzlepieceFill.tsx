import React from 'react'

export default function PuzzlepieceFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.1368 22.3721' className={className}>
      <path
        d='M0 11.1616C0 13.7398 1.81641 15.146 3.85742 15.146C4.85508 15.146 5.49961 14.9116 6.63916 14.1105C7.25986 13.6717 7.75859 14.0178 7.75859 14.5227L7.75859 19.9086C7.75859 21.3484 8.77314 22.3512 10.2605 22.3512L14.5222 22.3512C15.0271 22.3512 15.3738 21.8525 14.9344 21.2408C14.1423 20.0922 13.8988 19.4568 13.8988 18.4591C13.8988 16.4181 15.3148 14.6017 17.8832 14.6017C20.4613 14.6017 21.8773 16.4181 21.8773 18.4591C21.8773 19.4568 21.6332 20.0922 20.832 21.2408C20.4023 21.8525 20.7484 22.3512 21.2533 22.3512L25.506 22.3512C26.994 22.3512 28.0169 21.3484 28.0169 19.9086L28.0169 14.5227C28.0169 14.0178 28.5156 13.6717 29.1363 14.1105C30.2766 14.9116 30.9204 15.146 31.909 15.146C33.9591 15.146 35.7755 13.7398 35.7755 11.1616C35.7755 8.59327 33.9591 7.17725 31.909 7.17725C30.9204 7.17725 30.2766 7.41163 29.1363 8.2128C28.5156 8.65225 28.0169 8.30547 28.0169 7.80059L28.0169 2.44259C28.0169 1.0125 26.994 0 25.506 0L21.2533 0C20.7484 0 20.4023 0.498731 20.832 1.11943C21.6332 2.25967 21.8773 2.9042 21.8773 3.90117C21.8773 5.94218 20.4613 7.75859 17.8832 7.75859C15.3148 7.75859 13.8988 5.94218 13.8988 3.90117C13.8988 2.9042 14.1423 2.25967 14.9344 1.11943C15.3738 0.498731 15.0271 0 14.5222 0L10.2605 0C8.77314 0 7.75859 1.0125 7.75859 2.44259L7.75859 7.80059C7.75859 8.30547 7.25986 8.65225 6.63916 8.2128C5.49961 7.41163 4.85508 7.17725 3.85742 7.17725C1.81641 7.17725 0 8.59327 0 11.1616Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}