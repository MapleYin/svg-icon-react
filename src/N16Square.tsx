import React from 'react'

export default function N16Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.71377 16.2095C7.88008 16.2095 8.03321 16.057 8.03321 15.8712L8.03321 6.14805C8.03321 5.97286 7.88077 5.81338 7.69649 5.81338C7.50019 5.81338 7.34707 5.90313 7.21963 6.02715L5.37266 7.56162C5.28633 7.63614 5.25791 7.6959 5.25791 7.80655C5.25791 7.96739 5.35605 8.09346 5.52529 8.09346C5.61025 8.09346 5.6541 8.06212 5.71611 8.01964L7.38457 6.66866L7.38457 15.8712C7.38457 16.057 7.53701 16.2095 7.71377 16.2095ZM12.8777 16.2813C14.5802 16.2813 15.463 14.642 15.463 12.8069C15.463 11.0805 14.6427 9.42237 12.9721 9.42237C11.726 9.42237 10.9545 10.3916 10.7356 11.595L10.6867 11.595C10.6867 11.5099 10.6867 11.4513 10.6867 11.3661C10.6867 9.53731 10.9729 6.32569 12.9036 6.32569C13.8297 6.32569 14.3761 7.03057 14.6377 7.92666C14.6934 8.12315 14.735 8.29962 14.9608 8.29962C15.1277 8.29962 15.2504 8.20645 15.2504 8.017C15.2504 7.92569 15.2127 7.75127 15.1464 7.53076C14.8359 6.45518 14.0097 5.72618 12.9154 5.72618C10.6041 5.72618 10.0638 9.04981 10.0638 11.2494C10.0638 13.5771 10.7151 16.2813 12.8777 16.2813ZM12.8855 15.6908C11.5422 15.6908 10.8568 14.1223 10.8568 12.7168C10.8568 11.4301 11.6085 10.0073 12.8666 10.0073C14.1903 10.0073 14.8387 11.4601 14.8373 12.8117C14.8373 14.1536 14.1876 15.6908 12.8855 15.6908Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}