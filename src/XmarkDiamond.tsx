import React from 'react'

export function XmarkDiamond({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2575 26.8998' className={className}>
      <path
        d='M1.10216 15.6946L11.2082 25.8007C12.6865 27.279 14.2745 27.2343 15.7152 25.7936L25.7785 15.6932C27.2192 14.2526 27.2918 12.6646 25.8135 11.1863L15.7347 1.1075C14.2382-0.389672 12.6872-0.354028 11.2096 1.12429L1.10851 11.1877C-0.369128 12.6653-0.367761 14.2163 1.10216 15.6946ZM1.46145 15.3751C0.204028 14.1358 0.229907 12.7828 1.46213 11.5513L11.5362 1.47723C12.7859 0.226843 14.1019 0.218445 15.36 1.47655L25.4074 11.5331C26.6285 12.7451 26.676 14.1351 25.4256 15.3667L15.3516 25.4309C14.1012 26.6813 12.7475 26.6436 11.5368 25.4232Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.8299 18.3622C8.9469 18.3622 8.98918 18.3379 9.10139 18.2341L13.4397 13.886L17.7877 18.2341C17.8908 18.3372 17.9597 18.3622 18.0501 18.3622C18.2296 18.3622 18.3659 18.244 18.3659 18.0834C18.3659 17.9929 18.3319 17.9248 18.2469 17.8398L13.8716 13.4548L18.2476 9.07811C18.3332 8.99247 18.3575 8.9243 18.3575 8.82616C18.3575 8.67391 18.2303 8.55642 18.0508 8.55642C17.9533 8.55642 17.8852 8.58074 17.7814 8.68455L13.4397 13.0249L9.10002 8.68523C8.9969 8.58211 8.9469 8.55779 8.8299 8.55779C8.65949 8.55779 8.52316 8.67459 8.52316 8.82684C8.52316 8.92499 8.54816 8.99452 8.63312 9.0788L13.0175 13.4548L8.63312 17.8405C8.54816 17.9248 8.52316 17.9936 8.52316 18.0834C8.52316 18.244 8.65949 18.3622 8.8299 18.3622Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
