import React from 'react'

export default function CheckmarkDiamond({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2575 26.8998' className={className}>
      <path
        d='M1.10216 15.6946L11.2082 25.8007C12.6865 27.279 14.2745 27.2343 15.7152 25.7936L25.7785 15.6932C27.2192 14.2526 27.2918 12.6646 25.8135 11.1863L15.7347 1.1075C14.2382-0.389672 12.6872-0.354028 11.2096 1.12429L1.10851 11.1877C-0.369128 12.6653-0.367761 14.2163 1.10216 15.6946ZM1.46145 15.3751C0.204028 14.1358 0.229907 12.7828 1.46213 11.5513L11.5362 1.47723C12.7859 0.226843 14.1019 0.218445 15.36 1.47655L25.4074 11.5331C26.6285 12.7451 26.676 14.1351 25.4256 15.3667L15.3516 25.4309C14.1012 26.6813 12.7475 26.6436 11.5368 25.4232Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.1088 19.4216C12.2158 19.4216 12.2818 19.3736 12.3695 19.305L19.2912 8.61239C19.3092 8.56239 19.3272 8.48173 19.3272 8.43807C19.3272 8.32283 19.1972 8.18221 19.0749 8.18221C18.9831 8.18221 18.8913 8.24901 18.8232 8.31629L12.097 18.7031L8.24417 14.3113C8.19006 14.2427 8.1094 14.1995 7.99807 14.1995C7.87443 14.1995 7.73947 14.2988 7.73947 14.4595C7.73947 14.5304 7.78264 14.6103 7.83898 14.6973L11.8636 19.305C11.9372 19.3931 11.9927 19.4216 12.1088 19.4216Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}