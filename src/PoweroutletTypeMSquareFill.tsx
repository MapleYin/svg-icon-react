import React from 'react'

export default function PoweroutletTypeMSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.03594 5.37861C5.52559 5.37861 5.1833 5.7209 5.1833 6.23057L5.1833 15.7657C5.1833 16.2845 5.52559 16.6184 6.03594 16.6184L15.924 16.6184C16.4337 16.6184 16.7767 16.2845 16.7767 15.7657L16.7767 6.23057C16.7767 5.7209 16.4337 5.37861 15.924 5.37861ZM9.53545 13.3911C9.53545 14.0125 9.05078 14.4972 8.4294 14.4972C7.81641 14.4972 7.32266 14.0125 7.32266 13.3911C7.32266 12.7697 7.81641 12.2844 8.4294 12.2844C9.05078 12.2844 9.53545 12.7697 9.53545 13.3911ZM14.6296 13.3911C14.6296 14.0125 14.1442 14.4972 13.5229 14.4972C12.9106 14.4972 12.4168 14.0125 12.4168 13.3911C12.4168 12.7697 12.9106 12.2844 13.5229 12.2844C14.1442 12.2844 14.6296 12.7697 14.6296 13.3911ZM12.0825 8.60518C12.0825 9.22725 11.5979 9.721 10.9758 9.721C10.3635 9.721 9.86973 9.22725 9.86973 8.60518C9.86973 7.99287 10.3635 7.49912 10.9758 7.49912C11.5979 7.49912 12.0825 7.99287 12.0825 8.60518Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}