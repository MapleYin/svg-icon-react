import React from 'react'

export default function ChevronForwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM8.41211 4.90059C8.30644 4.98741 8.31484 5.171 8.42959 5.2753L14.2316 10.9946L8.42959 16.7237C8.30644 16.8273 8.32393 16.9921 8.41143 17.0978C8.52276 17.2266 8.66368 17.244 8.80362 17.1041L14.6838 11.2983C14.9001 11.1028 14.919 10.9144 14.6838 10.7001L8.80362 4.89424C8.67071 4.75293 8.53457 4.78857 8.41211 4.90059Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
