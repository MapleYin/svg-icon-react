import React from 'react'

export function SpeakerSlashCircle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM0.500206 12.1706C0.500206 18.5963 5.73516 23.8319 12.1608 23.8319C18.5872 23.8319 23.8312 18.5963 23.8312 12.1706C23.8312 5.73516 18.5956 0.500206 12.1602 0.500206C5.73448 0.500206 0.500206 5.73516 0.500206 12.1706Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M15.1162 16.4252L15.1162 17.6927C15.1162 17.9484 14.9874 18.1499 14.7051 18.1499C14.5477 18.1499 14.3762 18.0516 14.2474 17.9416L10.8958 14.7547C10.8106 14.6877 10.7137 14.6312 10.5811 14.6312L8.21378 14.6312C7.65342 14.6312 7.16514 14.1513 7.16514 13.5973L7.16514 10.7544C7.16514 10.2004 7.65342 9.72051 8.21378 9.72051L8.42498 9.72051ZM15.1162 6.56817L15.1162 13.8174L10.8972 9.59559L14.2474 6.31924C14.3782 6.20791 14.547 6.11729 14.7135 6.11729C14.9874 6.11729 15.1162 6.31309 15.1162 6.56817Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M18.7377 19.1802C18.852 19.2944 19.0478 19.3126 19.1704 19.1802C19.2854 19.038 19.2854 18.8624 19.1704 18.7384L5.58331 5.14151C5.46905 5.01817 5.27325 5.01817 5.14991 5.14151C5.01749 5.27393 5.02725 5.45157 5.14991 5.57423Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
