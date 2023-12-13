import React from 'react'

export function FigureAustralianFootball({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.5526 27.7565' className={className}>
      <path
        d='M17.1086 4.93584C18.4756 4.93584 19.5762 3.83526 19.5762 2.46826C19.5762 1.10127 18.4756 0 17.1086 0C15.7325 0 14.6403 1.10127 14.6403 2.46826C14.6403 3.83526 15.7325 4.93584 17.1086 4.93584ZM4.63447 17.1181L11.2548 17.1181L17.3743 17.9822C19.6725 18.2975 21.3136 17.305 21.3136 15.124L21.3136 10.979C21.3136 10.7726 21.5389 10.6938 21.686 10.8318L22.8159 11.9806L22.8159 15.901C22.8159 16.5775 23.376 17.1181 24.0142 17.1181C24.6628 17.1181 25.1936 16.5775 25.1936 15.901L25.1936 11.4707C25.1936 11.1471 25.0848 10.8514 24.8393 10.6254L21.9413 7.73789C21.0772 6.89326 19.9773 6.40225 18.7497 6.40225L7.39434 6.40225C6.75547 6.40225 6.21494 6.96094 6.21494 7.59073C6.21494 8.26729 6.73662 8.78897 7.39434 8.78897L16.1175 8.78897C16.4704 8.78897 16.7257 9.06377 16.7257 9.39717L16.7257 14.7216L4.63447 14.7216C3.96631 14.7216 3.43554 15.2517 3.43554 15.901C3.43554 16.5775 3.97607 17.1181 4.63447 17.1181ZM19.3091 27.2947C19.7708 27.7565 20.5178 27.7565 20.9795 27.2947C21.4412 26.833 21.4315 26.0777 20.9795 25.6152L17.1686 21.7555L18.6341 18.948C18.1946 18.9863 17.7336 18.9661 17.2544 18.9075L15.6321 18.6816L14.5747 21.5972C14.408 22.0296 14.5064 22.492 14.86 22.8449ZM1.17578 12.0301C2.65996 13.5136 4.34853 13.356 4.96855 12.7282C5.58721 12.0894 5.63603 10.5466 4.15322 9.04424C2.64043 7.5503 1.07812 7.58096 0.458784 8.22891C-0.1794 8.85733-0.326568 10.5173 1.17578 12.0301Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
