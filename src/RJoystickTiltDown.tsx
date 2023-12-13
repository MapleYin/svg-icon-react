import React from 'react'

export function RJoystickTiltDown({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.4689 32.8304' className={className}>
      <path
        d='M25.1075 16.4103C25.1075 22.2117 21.1686 27.0951 15.8086 28.5175C15.7574 28.3478 15.6743 28.1897 15.5629 28.054C20.7616 26.7324 24.596 22.0307 24.596 16.4103C24.596 9.73579 19.2042 4.36284 12.5485 4.36284C5.8838 4.36284 0.511533 9.75463 0.511533 16.4103C0.511533 22.0178 4.33619 26.7325 9.54046 28.055C9.42902 28.1906 9.34632 28.3488 9.29598 28.5188C3.92997 27.096 0 22.2 0 16.4103C0 9.48988 5.6002 3.8513 12.5485 3.8513C19.4878 3.8513 25.1075 9.47103 25.1075 16.4103Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.5497 28.4847C10.1576 28.4847 10.0127 28.9215 10.244 29.2455L12.1045 31.7022C12.3366 32.0145 12.7702 31.997 13.0017 31.7022L14.8615 29.2461C15.0942 28.9208 14.9472 28.4847 14.5565 28.4847Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.5485 6.92231C7.30548 6.92231 3.06124 11.1575 3.06124 16.4103C3.06124 21.6541 7.30548 25.8976 12.5485 25.8976C17.8021 25.8976 22.0372 21.6541 22.0372 16.4103C22.0372 11.1575 17.8021 6.92231 12.5485 6.92231ZM12.5485 7.43384C17.5178 7.43384 21.5341 11.4411 21.5341 16.4103C21.5341 21.3698 17.5178 25.3861 12.5485 25.3861C7.58908 25.3861 3.57277 21.3698 3.57277 16.4103C3.57277 11.4411 7.58908 7.43384 12.5485 7.43384ZM10.1353 21.1982C10.2909 21.1982 10.3952 21.073 10.3952 20.9453L10.3952 17.0854L13.1532 17.0854L15.4063 21.0069C15.4856 21.1418 15.5474 21.1982 15.6817 21.1982C15.8312 21.1982 15.918 21.1043 15.918 20.975C15.918 20.8971 15.886 20.8296 15.8128 20.7063L13.6579 17.0495C15.0498 16.793 15.9044 15.7726 15.9044 14.3459C15.9044 12.7252 14.7377 11.5849 13.0398 11.5849L10.0983 11.5849C9.9628 11.5849 9.86055 11.694 9.86055 11.849L9.86055 20.9453C9.86055 21.0814 9.99981 21.1982 10.1353 21.1982ZM10.3952 16.5669L10.3952 12.1061L13.1106 12.1061C14.4738 12.1061 15.4088 12.9972 15.4088 14.3389C15.4088 15.6611 14.4661 16.5669 13.1176 16.5669Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
