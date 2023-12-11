import React from 'react'

export default function LocationSlashCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM11.7035 19.2111C11.7035 19.665 12.2335 19.6894 12.3937 19.3656L14.2155 15.5101L11.6855 12.9769ZM5.16758 5.15782C5.03516 5.30001 5.05333 5.46925 5.16758 5.5919L18.7123 19.1555C18.835 19.2781 19.0321 19.2963 19.1464 19.1555C19.2704 19.0217 19.2704 18.8447 19.1464 18.7298L5.60235 5.15782C5.47833 5.04356 5.29161 5.04356 5.16758 5.15782ZM17.9839 5.8125L10.5818 9.28107L15.0455 13.7535L18.5339 6.37091C18.7722 5.88048 18.3919 5.61055 17.9839 5.8125ZM4.95352 11.9185C4.5376 12.1072 4.68271 12.6093 5.05215 12.6093L11.3364 12.6273L8.81929 10.107Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}