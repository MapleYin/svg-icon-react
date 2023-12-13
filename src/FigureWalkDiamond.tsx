import React from 'react'

export function FigureWalkDiamond({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2575 26.8998' className={className}>
      <path
        d='M1.10216 15.6946L11.2082 25.8007C12.6865 27.279 14.2745 27.2343 15.7152 25.7936L25.7785 15.6932C27.2192 14.2526 27.2918 12.6646 25.8135 11.1863L15.7347 1.1075C14.2382-0.389672 12.6872-0.354028 11.2096 1.12429L1.10851 11.1877C-0.369128 12.6653-0.367761 14.2163 1.10216 15.6946ZM1.46145 15.3751C0.204028 14.1358 0.229907 12.7828 1.46213 11.5513L11.5362 1.47723C12.7859 0.226843 14.1019 0.218445 15.36 1.47655L25.4074 11.5331C26.6285 12.7451 26.676 14.1351 25.4256 15.3667L15.3516 25.4309C14.1012 26.6813 12.7475 26.6436 11.5368 25.4232Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.2247 20.9182C16.5881 20.9182 16.9229 20.6455 16.9229 20.1767C16.9229 19.9905 16.874 19.8245 16.7764 19.6292L15.3744 16.7855C15.2461 16.5555 15.0989 16.3043 14.972 16.1096L14.0742 14.8304L14.1154 14.6895C14.3699 13.8999 14.469 13.4018 14.5178 12.6038L14.6643 10.4901C14.7242 9.5074 14.1453 8.7577 13.1195 8.7577C12.3284 8.7577 11.8649 9.16648 11.1304 9.81649L9.84885 10.9395C9.44914 11.2925 9.3508 11.614 9.32082 12.0835L9.17433 13.8093C9.14435 14.271 9.40031 14.5751 9.8132 14.6044C10.1961 14.6155 10.4814 14.3798 10.5302 13.8978L10.6948 12.0172L11.3569 11.4703C11.5522 11.305 11.8131 11.3845 11.7754 11.6942L11.6491 13.219C11.5619 14.0868 11.9351 14.6825 12.3271 15.1819L13.764 16.999C13.9098 17.1741 13.9202 17.2606 13.9802 17.3701L15.5084 20.4384C15.6835 20.8081 15.957 20.9182 16.2247 20.9182ZM9.72824 20.9559C9.96262 20.9559 10.1781 20.8583 10.3058 20.7007L12.4638 18.1039C12.6988 17.82 12.7191 17.8005 12.7783 17.527L12.9605 16.7685L11.7831 15.278L11.3932 17.1755L9.35646 19.5756C9.16252 19.7988 9.03351 19.976 9.03351 20.2696C9.03351 20.6818 9.32717 20.9559 9.72824 20.9559ZM16.5155 12.9231L18.0539 12.9231C18.517 12.9231 18.8197 12.6672 18.8197 12.2543C18.8197 11.833 18.517 11.5666 18.0539 11.5666L16.4262 11.5666L15.1621 10.1937L15.0345 12.0093L15.6352 12.6009C15.8982 12.8548 16.1039 12.9231 16.5155 12.9231ZM13.9473 8.29051C14.8094 8.29051 15.4964 7.58533 15.4964 6.75252C15.4964 5.88973 14.8094 5.2034 13.9473 5.2034C13.0949 5.2034 12.4093 5.88973 12.4093 6.75252C12.4093 7.58533 13.0949 8.29051 13.9473 8.29051Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
