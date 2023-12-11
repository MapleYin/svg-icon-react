import React from 'react'

export default function TextRedaction({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3705 20.4338' className={className}>
      <path
        d='M0.257231 0.546004L23.7422 0.546004C23.9015 0.546004 24.0092 0.448737 24.0092 0.288773C24.0092 0.129493 23.9015 0.0231439 23.7422 0.0231439L0.257231 0.0231439C0.0972676 0.0231439 0 0.129493 0 0.288773C0 0.448737 0.0972676 0.546004 0.257231 0.546004ZM12.6391 13.8043L23.7422 13.8043C23.9015 13.8043 24.0092 13.707 24.0092 13.5478C24.0092 13.3878 23.9015 13.2814 23.7422 13.2814L12.6391 13.2814C12.4798 13.2814 12.3728 13.3878 12.3728 13.5478C12.3728 13.707 12.4798 13.8043 12.6391 13.8043ZM0.257231 20.4338L23.7422 20.4338C23.9015 20.4338 24.0092 20.3358 24.0092 20.1766C24.0092 20.0173 23.9015 19.9109 23.7422 19.9109L0.257231 19.9109C0.0972676 19.9109 0 20.0173 0 20.1766C0 20.3358 0.0972676 20.4338 0.257231 20.4338Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.762798 8.13028L23.2366 8.13028C23.7207 8.13028 24.0092 7.84317 24.0092 7.36817L24.0092 6.46768C24.0092 5.98496 23.7207 5.69717 23.2366 5.69717L0.762798 5.69717C0.288478 5.69717 0 5.98496 0 6.46768L0 7.36817C0 7.84317 0.288478 8.13028 0.762798 8.13028ZM0.762798 14.7598L10.7195 14.7598C11.2036 14.7598 11.483 14.4727 11.483 13.9977L11.483 13.0965C11.483 12.6145 11.2036 12.326 10.7195 12.326L0.762798 12.326C0.288478 12.326 0 12.6145 0 13.0965L0 13.9977C0 14.4727 0.288478 14.7598 0.762798 14.7598Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}