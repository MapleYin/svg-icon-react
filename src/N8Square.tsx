import React from 'react'

export function N8Square({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.9926 16.6862C13.199 16.6862 14.8045 15.3184 14.8045 13.4617C14.8045 12.1567 13.7882 10.9765 12.4407 10.7107L12.4407 10.6417C13.5713 10.3265 14.3714 9.31153 14.3714 8.20117C14.3714 6.51465 12.9424 5.31983 10.9849 5.31983C9.02803 5.31983 7.59834 6.51465 7.59834 8.20117C7.59834 9.31153 8.40615 10.316 9.529 10.6417L9.529 10.7107C8.18086 10.9765 7.16592 12.1574 7.16592 13.4624C7.16592 15.3281 8.75889 16.6862 10.9926 16.6862ZM10.9856 16.1285C9.06817 16.1285 7.68946 15.0282 7.68946 13.4933C7.68946 12.0253 9.06885 10.9613 10.9856 10.9613C12.9036 10.9613 14.2816 12.0246 14.2816 13.4933C14.2816 15.0282 12.9022 16.1285 10.9856 16.1285ZM10.9849 10.4343C9.35704 10.4343 8.17364 9.4875 8.17364 8.16465C8.17364 6.82364 9.32911 5.86915 10.9849 5.86915C12.6497 5.86915 13.7961 6.82364 13.7961 8.16465C13.7961 9.4875 12.6127 10.4343 10.9849 10.4343Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
