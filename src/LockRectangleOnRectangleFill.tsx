import React from 'react'

export function LockRectangleOnRectangleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.3111 25.125' className={className}>
      <path
        d='M25.0198 4.11436L25.0198 4.76221L9.11115 4.76221C6.54962 4.76221 5.04014 6.2794 5.04014 8.83957L5.04014 19.5003L3.71036 19.5003C1.64424 19.5003 0.528423 18.3949 0.528423 16.3218L0.528423 4.11436C0.528423 2.0419 1.64424 0.926763 3.71036 0.926763L21.8386 0.926763C23.9131 0.926763 25.0198 2.06983 25.0198 4.11436Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M30.4213 8.83957L30.4213 21.047C30.4213 23.0915 29.3139 24.2346 27.24 24.2346L9.11115 24.2346C7.03663 24.2346 5.92989 23.1201 5.92989 21.047L5.92989 8.83957C5.92989 6.7671 7.03663 5.66105 9.11115 5.66105L27.24 5.66105C29.3139 5.66105 30.4213 6.80411 30.4213 8.83957ZM15.0078 11.339L15.0078 13.2584C14.0436 13.2521 13.5712 13.702 13.5712 14.7575L13.5712 20.0807C13.5712 21.1397 14.0372 21.5889 14.9908 21.5889L21.3604 21.5889C22.314 21.5889 22.7807 21.1397 22.7807 20.0807L22.7807 14.7575C22.7807 13.702 22.3076 13.2521 21.3434 13.2584L21.3434 11.339C21.3434 9.33332 20.074 8.00763 18.1756 8.00763C16.2778 8.00763 15.0078 9.33332 15.0078 11.339ZM20.7689 11.358L20.7689 13.2577L15.583 13.2577L15.583 11.358C15.583 9.68723 16.6275 8.5885 18.1756 8.5885C19.7244 8.5885 20.7689 9.68723 20.7689 11.358Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
