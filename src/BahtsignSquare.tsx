import React from 'react'

export function BahtsignSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.8771 17.8822C11.0163 17.8822 11.1508 17.7666 11.1508 17.5708L11.1508 16.298L11.5193 16.298C13.7437 16.298 15.1086 15.2024 15.1086 13.5294C15.1086 12.2607 14.2317 11.3164 13.0335 10.953C14.0073 10.522 14.5785 9.6083 14.5785 8.56201C14.5785 7.04512 13.3153 5.97881 11.4369 5.97881L11.1508 5.97881L11.1508 4.91143C11.1508 4.71562 11.0163 4.6 10.8771 4.6C10.728 4.6 10.5845 4.71562 10.5845 4.91143L10.5845 5.97881L8.4504 5.97881C8.26114 5.97881 8.12686 6.10332 8.12686 6.29327L8.12686 15.9835C8.12686 16.1741 8.26045 16.298 8.4504 16.298L10.5845 16.298L10.5845 17.5708C10.5845 17.7666 10.728 17.8822 10.8771 17.8822ZM8.66124 15.7536L8.66124 11.2529L10.5845 11.2529L10.5845 15.7529ZM11.1508 15.7522L11.1508 11.2536C13.36 11.2402 14.5561 12.0782 14.5561 13.5351C14.5561 14.9563 13.4522 15.7579 11.1508 15.7522ZM8.64239 10.7093L8.66124 6.49454L10.5845 6.49454L10.5845 10.7093ZM11.1508 10.7149L11.1508 6.48682C12.9771 6.48321 13.989 7.23467 13.989 8.51436C13.989 9.85059 13.0147 10.7235 11.1508 10.7149Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
