import React from 'react'

export default function N41Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.4291 16.2018C9.59405 16.2018 9.73536 16.0191 9.73536 15.8739L9.73536 13.5924L10.6267 13.5924C10.8021 13.5924 10.9254 13.4824 10.9254 13.2923C10.9254 13.1217 10.7664 13.0117 10.6267 13.0117L9.73536 13.0117L9.73536 6.25938C9.73536 5.83233 9.45459 5.74004 9.25098 5.74004C8.92451 5.74004 8.77138 5.94063 8.61327 6.25255L5.34473 12.6642C5.25908 12.8396 5.20889 12.9865 5.20889 13.1474C5.20889 13.4029 5.38018 13.5924 5.6916 13.5924L9.10263 13.5924L9.10263 15.8739C9.10263 16.0505 9.22148 16.2018 9.4291 16.2018ZM9.10469 13.0047L5.83135 13.0047L5.83135 12.9817L9.05586 6.59503L9.10469 6.59503ZM14.64 16.2095C14.8064 16.2095 14.9595 16.057 14.9595 15.8712L14.9595 6.14805C14.9595 5.97286 14.798 5.81338 14.6137 5.81338C14.4181 5.81338 14.2643 5.90313 14.1368 6.02715L12.2989 7.56162C12.2126 7.63614 12.1751 7.6959 12.1751 7.80655C12.1751 7.96739 12.2732 8.09346 12.4516 8.09346C12.5365 8.09346 12.5804 8.06212 12.6333 8.01964L14.3018 6.66866L14.3018 15.8712C14.3018 16.057 14.4549 16.2095 14.64 16.2095Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}