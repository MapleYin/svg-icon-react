import React from 'react'

export function ArrowUpHeartFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.183 21.6686' className={className}>
      <path
        d='M24.183 7.25518C24.183 12.2582 19.4052 17.1447 12.8943 21.5014C12.7592 21.5941 12.5809 21.6686 12.4282 21.6686C12.284 21.6686 12.1057 21.5941 11.9705 21.5014C5.46034 17.1447 0.672749 12.2582 0.672749 7.25518C0.672749 3.27207 3.43535 0.402737 7.16064 0.402737C9.29893 0.402737 11.4798 1.6875 12.4282 3.68448C13.3773 1.68682 15.5568 0.402737 17.7049 0.402737C21.4302 0.402737 24.183 3.27207 24.183 7.25518ZM11.7169 6.51554L7.73916 10.5034C7.63604 10.6156 7.50908 10.6643 7.50908 10.8657C7.50908 11.025 7.62315 11.1475 7.77334 11.1475C7.85196 11.1475 7.93126 11.1043 7.96944 11.0661L8.79005 10.2078L11.6878 7.2885L11.6558 10.1165L11.6558 16.9852C11.6558 17.1256 11.7739 17.2424 11.9157 17.2424C12.0568 17.2424 12.1659 17.1256 12.1659 16.9852L12.1659 10.1165L12.143 7.2885L15.0316 10.2078L15.8613 11.0661C15.8904 11.1043 15.9781 11.1475 16.0574 11.1475C16.1972 11.1475 16.3217 11.025 16.3217 10.8657C16.3217 10.6643 16.1947 10.6156 16.0916 10.5034L12.1048 6.51554C12.0611 6.46417 11.9762 6.42237 11.9157 6.42237C11.8455 6.42237 11.7605 6.46417 11.7169 6.51554Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
