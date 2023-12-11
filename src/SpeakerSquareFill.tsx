import React from 'react'

export default function SpeakerSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM13.0671 5.20635L9.71983 8.4707C9.63467 8.55654 9.53701 8.59424 9.4044 8.59424L7.04278 8.59424C6.48106 8.59424 6.00117 9.07481 6.00117 9.62178L6.00117 12.4604C6.00117 13.0157 6.48106 13.4879 7.04278 13.4879L9.4044 13.4879C9.53701 13.4879 9.63467 13.5444 9.71983 13.6107L13.0671 16.794C13.1959 16.904 13.359 16.994 13.5262 16.994C13.8001 16.994 13.9205 16.8002 13.9205 16.5438L13.9205 5.45596C13.9205 5.2002 13.8001 5.0044 13.5255 5.0044C13.3583 5.0044 13.1896 5.09434 13.0671 5.20635Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
