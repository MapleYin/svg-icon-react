import React from 'react'

export function RectangleOnRectangleAngled({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.7034 25.7992' className={className}>
      <path
        d='M24.199 2.66689L24.7827 5.99814L24.2628 5.99814L23.6993 2.77598C23.3915 1.03575 22.2493 0.296099 20.5676 0.584966L2.77984 3.71924C1.01509 4.03672 0.273394 5.10293 0.590191 6.85293L2.6857 18.8255C3.00249 20.5748 4.07075 21.3333 5.81733 21.0172L5.85083 21.0113L5.85083 21.3841C5.85083 21.4341 5.85148 21.4836 5.85582 21.5298C3.82869 21.889 2.55105 20.981 2.18598 18.9437L0.0793414 6.9127C-0.286772 4.86953 0.621236 3.58632 2.65669 3.22861L20.5122 0.0748002C22.5574-0.282915 23.8329 0.652339 24.199 2.66689Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M9.03209 24.5717L27.1603 24.5717C29.2348 24.5717 30.3422 23.4286 30.3422 21.3841L30.3422 9.17666C30.3422 7.14121 29.2348 5.99814 27.1603 5.99814L9.03209 5.99814C6.95689 5.99814 5.85083 7.1042 5.85083 9.17666L5.85083 21.3841C5.85083 23.4572 6.95689 24.5717 9.03209 24.5717ZM9.06138 24.0602C7.27711 24.0602 6.36237 23.1377 6.36237 21.3598L6.36237 9.20167C6.36237 7.42306 7.27711 6.5006 9.06138 6.5006L27.1219 6.5006C28.8413 6.5006 29.83 7.42306 29.83 9.20167L29.83 21.3598C29.83 23.1377 28.8413 24.0602 27.1219 24.0602Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
