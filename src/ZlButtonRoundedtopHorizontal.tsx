import React from 'react'

export function ZlButtonRoundedtopHorizontal({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M8.92726 0C2.4334 0 0 3.09258 0 8.95489L0 17.1689C0 19.1282 1.06904 20.205 3.02979 20.205L23.8327 20.205C25.7837 20.205 26.8618 19.0912 26.8618 17.1689L26.8618 8.95489C26.8618 3.09258 24.42 0 17.9346 0ZM8.96495 0.503135L17.8976 0.503135C24.0935 0.503135 26.3503 3.43116 26.3503 9.00323L26.3503 17.1445C26.3503 18.8191 25.4278 19.6935 23.8021 19.6935L3.05977 19.6935C1.35997 19.6935 0.511533 18.8191 0.511533 17.1445L0.511533 9.00323C0.511533 3.43116 2.76837 0.503135 8.96495 0.503135Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.99669 15.2123L12.9051 15.2123C13.0575 15.2123 13.2066 15.064 13.2066 14.8927C13.2066 14.7396 13.0575 14.6003 12.9051 14.6003L8.42062 14.6003L8.42062 14.5403L13.0094 5.71759C13.0721 5.60196 13.132 5.46251 13.132 5.35255C13.132 5.15694 12.9921 4.99815 12.7665 4.99815L8.03458 4.99815C7.86329 4.99815 7.71426 5.13741 7.71426 5.29054C7.71426 5.46183 7.86329 5.61017 8.03458 5.61017L12.3719 5.61017L12.3719 5.67013L7.75313 14.5033C7.68067 14.6566 7.64932 14.7234 7.64932 14.8502C7.64932 15.066 7.79131 15.2123 7.99669 15.2123ZM15.4314 15.2103L19.3303 15.2103C19.4834 15.2103 19.6317 15.071 19.6317 14.8997C19.6317 14.7466 19.4834 14.6073 19.3303 14.6073L15.7606 14.6073L15.7606 5.20538C15.7606 5.04815 15.6074 4.88663 15.4502 4.88663C15.2657 4.88663 15.1126 5.04815 15.1126 5.20538L15.1126 14.8615C15.1126 15.0703 15.2603 15.2103 15.4314 15.2103Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
