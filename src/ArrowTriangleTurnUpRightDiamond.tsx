import React from 'react'

export default function ArrowTriangleTurnUpRightDiamond({
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
        d='M8.46886 18.2752C8.46886 18.4181 8.55431 18.5524 8.71066 18.5608C8.85793 18.5601 8.94338 18.4181 8.94338 18.2752L8.94338 13.4989C8.94338 11.7117 9.5636 11.0922 11.2922 11.0922L15.5037 11.0733L15.5037 13.2129C15.5037 13.6638 15.9985 13.7967 16.3049 13.56L19.1193 11.2654C19.411 11.035 19.411 10.6378 19.1193 10.3983L16.3049 8.11287C15.9985 7.86707 15.5037 8.02722 15.5037 8.49764L15.5037 10.5806L11.272 10.5806C9.309 10.5806 8.46886 11.4571 8.46886 13.5116Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
