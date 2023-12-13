import React from 'react'

export function TextAligncenter({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3705 20.4338' className={className}>
      <path
        d='M0.257231 0.546004L23.7422 0.546004C23.9015 0.546004 24.0092 0.448737 24.0092 0.288773C24.0092 0.129493 23.9015 0.0231439 23.7422 0.0231439L0.257231 0.0231439C0.0972676 0.0231439 0 0.129493 0 0.288773C0 0.448737 0.0972676 0.546004 0.257231 0.546004ZM4.22403 7.1755L19.7845 7.1755C19.9438 7.1755 20.0417 7.07754 20.0417 6.91827C20.0417 6.75899 19.9438 6.65195 19.7845 6.65195L4.22403 6.65195C4.06475 6.65195 3.95772 6.75899 3.95772 6.91827C3.95772 7.07754 4.06475 7.1755 4.22403 7.1755ZM0.257231 13.8043L23.7422 13.8043C23.9015 13.8043 24.0092 13.707 24.0092 13.5478C24.0092 13.3878 23.9015 13.2814 23.7422 13.2814L0.257231 13.2814C0.0972676 13.2814 0 13.3878 0 13.5478C0 13.707 0.0972676 13.8043 0.257231 13.8043ZM4.22403 20.4338L19.7845 20.4338C19.9438 20.4338 20.0417 20.3358 20.0417 20.1766C20.0417 20.0173 19.9438 19.9109 19.7845 19.9109L4.22403 19.9109C4.06475 19.9109 3.95772 20.0173 3.95772 20.1766C3.95772 20.3358 4.06475 20.4338 4.22403 20.4338Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
