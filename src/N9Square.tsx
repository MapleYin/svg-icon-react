import React from 'react'

export default function N9Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.7185 16.6862C13.259 16.6862 14.799 14.637 14.799 10.2611C14.799 6.91397 13.1947 5.31983 10.9242 5.31983C8.79658 5.31983 7.19023 6.83692 7.19023 8.96543C7.19023 10.9607 8.67422 12.5758 10.7293 12.5758C12.3992 12.5758 13.6258 11.81 14.2196 10.3661L14.2621 10.3661C14.2635 14.1522 12.9624 16.1344 10.7359 16.1344C9.58184 16.1344 8.5629 15.5146 8.13682 14.6272C8.04141 14.4082 7.97256 14.3407 7.83897 14.3407C7.69151 14.3407 7.57949 14.4339 7.57949 14.5995C7.57949 14.6908 7.59063 14.7263 7.60313 14.7897C7.79483 15.5303 9.16084 16.6862 10.7185 16.6862ZM10.8648 12.0062C9.02481 12.0062 7.74308 10.6784 7.74308 8.90547C7.74308 7.1459 9.09678 5.87462 10.9018 5.87462C12.6565 5.87462 14.05 7.18633 14.05 8.96202C14.05 10.6603 12.704 12.0062 10.8648 12.0062Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}