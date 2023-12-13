import React from 'react'

export function PhotoFillOnRectangleFill({
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
        d='M30.4213 8.83957L30.4213 21.047C30.4213 23.0915 29.3139 24.2346 27.24 24.2346L9.11115 24.2346C7.03663 24.2346 5.92989 23.1201 5.92989 21.047L5.92989 8.83957C5.92989 6.7671 7.03663 5.66105 9.11115 5.66105L27.24 5.66105C29.3139 5.66105 30.4213 6.80411 30.4213 8.83957ZM20.5514 14.8244L15.3622 19.2712L13.4232 17.4723C12.9258 17.0056 12.4822 16.7635 11.8439 16.7635C11.2355 16.7635 10.8219 16.9874 10.3245 17.4625L6.44257 21.0572C6.45369 22.8129 7.3681 23.7231 9.14113 23.7231L27.201 23.7231C28.9203 23.7231 29.9098 22.8006 29.9098 21.0227L29.9098 19.9131L24.3276 14.8342C23.7381 14.32 23.1696 14.0214 22.4161 14.0214C21.6808 14.0214 21.1702 14.3005 20.5514 14.8244ZM12.0178 12.2007C12.0178 13.7123 13.228 14.9512 14.7481 14.9512C16.2415 14.9512 17.4699 13.7123 17.4699 12.2007C17.4699 10.7184 16.2415 9.46066 14.7481 9.46066C13.228 9.46066 12.0178 10.7184 12.0178 12.2007Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
