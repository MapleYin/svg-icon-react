import React from 'react'

export function ArrowUpBackwardSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM6.55137 6.31524C6.4209 6.31524 6.32363 6.42451 6.32363 6.56954L6.32363 13.5949C6.32363 13.7681 6.42793 13.866 6.56202 13.866C6.72403 13.866 6.82833 13.761 6.82833 13.5872L6.82833 9.51896L6.84532 7.19298L7.93742 8.32961L15.1433 15.5355C15.1996 15.5925 15.2601 15.6266 15.37 15.6266C15.5314 15.6266 15.6363 15.5216 15.6363 15.368C15.6363 15.2705 15.5925 15.2101 15.5445 15.153L8.31076 7.92902L7.18253 6.82647L8.90382 6.80177L13.5956 6.80177C13.7694 6.80177 13.866 6.69679 13.866 6.54454C13.866 6.40137 13.761 6.31524 13.597 6.31524Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
