import React from 'react'

export default function KeyViewfinder({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2337 22.9289' className={className}>
      <path
        d='M0.251567 7.07051C0.417684 7.07051 0.511533 6.96622 0.511533 6.8001L0.511533 3.26006C0.511533 1.48145 1.42628 0.558994 3.21124 0.558994L6.74629 0.558994C6.91241 0.558994 7.01671 0.473543 7.01671 0.30811C7.01671 0.141994 6.91241 0.0565428 6.74629 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.23506L0 6.8001C0 6.96622 0.085451 7.07051 0.251567 7.07051ZM22.6208 7.07051C22.7876 7.07051 22.8724 6.96622 22.8724 6.8001L22.8724 3.23506C22.8724 1.19961 21.7663 0.0565428 19.6911 0.0565428L16.1261 0.0565428C15.96 0.0565428 15.8557 0.141994 15.8557 0.30811C15.8557 0.473543 15.96 0.558994 16.1261 0.558994L19.6611 0.558994C21.3714 0.558994 22.3608 1.48145 22.3608 3.26006L22.3608 6.8001C22.3608 6.96622 22.4554 7.07051 22.6208 7.07051ZM3.18125 22.9289L6.74629 22.9289C6.91241 22.9289 7.01671 22.8344 7.01671 22.6683C7.01671 22.5028 6.91241 22.4174 6.74629 22.4174L3.21124 22.4174C1.42628 22.4174 0.511533 21.4949 0.511533 19.7163L0.511533 16.1763C0.511533 16.0102 0.426082 15.9059 0.251567 15.9059C0.0938493 15.9059 0 16.0102 0 16.1763L0 19.7413C0 21.8145 1.10674 22.9289 3.18125 22.9289ZM16.1261 22.9289L19.6911 22.9289C21.7663 22.9289 22.8724 21.7858 22.8724 19.7413L22.8724 16.1763C22.8724 16.0102 22.7869 15.9059 22.6208 15.9059C22.4547 15.9059 22.3608 16.0102 22.3608 16.1763L22.3608 19.7163C22.3608 21.4949 21.3714 22.4174 19.6611 22.4174L16.1261 22.4174C15.96 22.4174 15.8557 22.5028 15.8557 22.6683C15.8557 22.8344 15.96 22.9289 16.1261 22.9289Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.4596 3.60919C9.19961 3.60919 7.4 5.41925 7.4 7.64991C7.4 9.41749 8.44493 10.9318 10.0933 11.5017L10.0933 18.132C10.094 18.2156 10.1246 18.3698 10.2327 18.4598L11.3083 19.5165C11.4171 19.6253 11.4923 19.626 11.6011 19.5165L13.6902 17.4566C13.7634 17.3835 13.7634 17.2985 13.6902 17.2177L12.2636 15.7903L14.1513 13.9319C14.214 13.8608 14.2133 13.757 14.1401 13.6846L12.2084 11.7326C14.3402 10.95 15.501 9.46563 15.501 7.64991C15.501 5.43809 13.7091 3.60919 11.4596 3.60919ZM11.4589 5.4338C12.1529 5.4338 12.7012 5.9918 12.7012 6.67677C12.7012 7.35333 12.1529 7.91134 11.4589 7.91134C10.7746 7.91134 10.2159 7.35333 10.2159 6.67677C10.2159 5.9918 10.7551 5.4338 11.4589 5.4338Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
