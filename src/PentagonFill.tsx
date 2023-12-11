import React from 'react'

export default function PentagonFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.333 25.2127' className={className}>
      <path
        d='M0.222577 11.4976L4.09064 23.271C4.56486 24.7368 5.22541 25.2127 6.77141 25.2127L19.2288 25.2127C20.7748 25.2127 21.4354 24.7368 21.9096 23.271L25.712 11.7022C26.2337 10.0772 25.9954 9.2374 24.7311 8.29941L14.8152 0.997267C13.4538 0.0195312 12.5464 0.0195312 11.1851 0.997267L1.26916 8.29941C0.00412052 9.21924-0.252326 10.0115 0.222577 11.4976Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
