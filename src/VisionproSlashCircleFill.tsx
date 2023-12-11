import React from 'react'

export default function VisionproSlashCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM5.16758 5.15782C5.03516 5.30001 5.05333 5.46925 5.16758 5.5919L18.7123 19.1555C18.835 19.2781 19.0321 19.2963 19.1464 19.1555C19.2704 19.0217 19.2704 18.8447 19.1464 18.7298L5.60235 5.15782C5.47833 5.04356 5.29161 5.04356 5.16758 5.15782ZM3.26602 12.1756C3.26602 14.952 4.97364 17.0649 7.30079 17.0649C9.68721 17.0649 10.8975 15.0301 12.1608 15.0301C13.115 15.0301 14.0381 16.1895 15.4608 16.7571L6.43973 7.72435C4.49487 8.35697 3.26602 9.63581 3.26602 12.1756ZM8.58801 7.28335L18.1651 16.8792C19.8877 16.3149 21.0557 14.4722 21.0557 12.1756C21.0557 7.61827 17.099 7.1209 12.1608 7.1209C10.8867 7.1209 9.67798 7.15401 8.58801 7.28335Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
