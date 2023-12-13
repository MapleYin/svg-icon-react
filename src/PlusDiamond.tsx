import React from 'react'

export function PlusDiamond({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2575 26.8998' className={className}>
      <path
        d='M1.10216 15.6946L11.2082 25.8007C12.6865 27.279 14.2745 27.2343 15.7152 25.7936L25.7785 15.6932C27.2192 14.2526 27.2918 12.6646 25.8135 11.1863L15.7347 1.1075C14.2382-0.389672 12.6872-0.354028 11.2096 1.12429L1.10851 11.1877C-0.369128 12.6653-0.367761 14.2163 1.10216 15.6946ZM1.46145 15.3751C0.204028 14.1358 0.229907 12.7828 1.46213 11.5513L11.5362 1.47723C12.7859 0.226843 14.1019 0.218445 15.36 1.47655L25.4074 11.5331C26.6285 12.7451 26.676 14.1351 25.4256 15.3667L15.3516 25.4309C14.1012 26.6813 12.7475 26.6436 11.5368 25.4232Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.97697 13.445C7.97697 13.563 8.11262 13.6973 8.24172 13.6973L13.177 13.6973L13.177 18.6241C13.177 18.7616 13.3112 18.8973 13.4292 18.8973C13.5765 18.8973 13.7114 18.7805 13.7114 18.6241L13.7114 13.6973L18.6383 13.6973C18.7758 13.6973 18.9114 13.563 18.9114 13.445C18.9114 13.2887 18.7946 13.1537 18.6383 13.1537L13.7114 13.1537L13.7114 8.22752C13.7114 8.07117 13.5765 7.95369 13.4292 7.95369C13.3112 7.95369 13.177 8.08934 13.177 8.22752L13.177 13.1537L8.24172 13.1537C8.09445 13.1537 7.97697 13.2887 7.97697 13.445Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
