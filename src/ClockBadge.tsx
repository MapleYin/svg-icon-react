import React from 'react'

export function ClockBadge({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.2059 26.4358' className={className}>
      <path
        d='M17.7849 2.06727C17.6918 2.2042 17.607 2.3471 17.533 2.49624C16.1191 1.88156 14.5592 1.54259 12.9216 1.54259C6.49592 1.54259 1.26164 6.77755 1.26164 13.213C1.26164 19.6387 6.4966 24.8743 12.9223 24.8743C19.3486 24.8743 24.5927 19.6387 24.5927 13.213C24.5927 11.6091 24.2675 10.0798 23.6789 8.68779C23.8294 8.61541 23.9733 8.53149 24.1106 8.43806C24.7433 9.90477 25.0929 11.5196 25.0929 13.213C25.0929 19.9027 19.6218 25.3738 12.9223 25.3738C6.23253 25.3738 0.761438 19.9027 0.761438 13.213C0.761438 6.51348 6.23185 1.04239 12.9216 1.04239C14.6497 1.04239 16.2962 1.40642 17.7849 2.06727ZM13.2111 4.30216L13.2111 13.885C13.2111 14.0513 13.0879 14.1744 12.9216 14.1744L5.50149 14.1744C5.33518 14.1744 5.23088 14.0513 5.23088 13.885C5.23088 13.7557 5.33518 13.6325 5.50149 13.6325L12.6782 13.6325L12.6782 4.30216C12.6782 4.1547 12.793 4.04972 12.9216 4.04972C13.0879 4.04972 13.2111 4.1547 13.2111 4.30216Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M21.6039 8.30441C23.6375 8.30441 25.3155 6.62648 25.3155 4.60196C25.3155 2.57745 23.6375 0.890435 21.6039 0.890435C19.5794 0.890435 17.9015 2.57745 17.9015 4.60196C17.9015 6.62648 19.5794 8.30441 21.6039 8.30441Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
