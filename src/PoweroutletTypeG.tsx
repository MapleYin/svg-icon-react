import React from 'react'

export function PoweroutletTypeG({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.3051 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L19.7625 22.0158C21.8286 22.0158 22.9438 20.8734 22.9438 18.8282L22.9438 3.24414C22.9438 1.19893 21.8286 0.0565428 19.7625 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L19.7241 0.568076C21.4435 0.568076 22.4322 1.49054 22.4322 3.26846L22.4322 18.8039C22.4322 20.5818 21.4435 21.5043 19.7241 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1338 9.80362L11.8093 9.80362C12.1559 9.80362 12.4118 9.54834 12.4118 9.18291L12.4118 4.81055C12.4118 4.46397 12.1559 4.20801 11.8093 4.20801L11.1338 4.20801C10.7879 4.20801 10.5326 4.46397 10.5326 4.81055L10.5326 9.18291C10.5326 9.54834 10.7879 9.80362 11.1338 9.80362ZM4.43663 17.1438L8.74034 17.1438C9.08692 17.1438 9.34219 16.8885 9.34219 16.5412L9.34219 15.8846C9.34219 15.5198 9.08692 15.2645 8.74034 15.2645L4.43663 15.2645C4.09005 15.2645 3.81593 15.5387 3.81593 15.8846L3.81593 16.5412C3.81593 16.8885 4.0712 17.1438 4.43663 17.1438ZM14.2041 17.1438L18.5071 17.1438C18.8635 17.1438 19.1194 16.8885 19.1194 16.5412L19.1194 15.8846C19.1194 15.5387 18.8544 15.2645 18.5071 15.2645L14.2041 15.2645C13.8568 15.2645 13.6016 15.5198 13.6016 15.8846L13.6016 16.5412C13.6016 16.8885 13.8568 17.1438 14.2041 17.1438Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
