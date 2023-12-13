import React from 'react'

export function N3SquareFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.86992 7.52461C7.85879 7.6459 7.83926 7.74561 7.83926 7.84873C7.83926 8.02618 7.94287 8.15636 8.11055 8.15636C8.29366 8.15636 8.41065 8.05118 8.41046 7.85967C8.5463 6.69034 9.64249 5.86417 11.0469 5.86417C12.6495 5.86417 13.7353 6.79366 13.7353 8.1333C13.7353 9.47432 12.5882 10.5321 11.1363 10.5321L10.0213 10.5321C9.84727 10.5321 9.74502 10.6428 9.74502 10.8084C9.74502 10.9727 9.84727 11.084 10.0213 11.084L11.2417 11.084C12.8812 11.084 14.1356 12.1523 14.1356 13.5357C14.1356 15.0848 12.8993 16.1328 11.063 16.1328C9.63789 16.1328 8.40548 15.3019 8.16631 14.1366C8.12881 13.9354 8.03975 13.8497 7.86709 13.8497C7.70781 13.8497 7.58535 13.9722 7.58535 14.1496C7.58535 14.2521 7.6042 14.3504 7.63486 14.4717C8.01572 15.7731 9.41045 16.6602 11.07 16.6602C13.1814 16.6602 14.7255 15.3427 14.7255 13.5308C14.7255 12.1372 13.5822 10.9528 12.1203 10.8147L12.1203 10.745C13.401 10.5043 14.3244 9.36739 14.3244 8.06514C14.3244 6.47852 12.9317 5.33682 11.0398 5.33682C9.44522 5.33682 8.00986 6.24844 7.86992 7.52461Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
