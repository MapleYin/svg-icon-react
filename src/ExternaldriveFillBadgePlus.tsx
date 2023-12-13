import React from 'react'

export function ExternaldriveFillBadgePlus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.3865 25.5705' className={className}>
      <path
        d='M33.5215 18.0541C33.5215 20.5969 31.4253 22.6924 28.8902 22.6924L12.4096 22.6924C13.2215 21.5725 13.6987 20.1975 13.6987 18.7166C13.6987 16.5907 12.715 14.6822 11.1798 13.4249L28.8902 13.4249C31.4253 13.4249 33.5215 15.5211 33.5215 18.0541ZM27.4231 18.0925C27.4231 18.8994 28.0737 19.4468 28.8521 19.4831C29.5829 19.5194 30.2329 18.8527 30.2329 18.0925C30.2329 17.3616 29.5829 16.6928 28.8521 16.6928C28.0737 16.6928 27.4231 17.3616 27.4231 18.0925ZM27.906 5.15411L31.7344 13.3409C30.9163 12.817 29.9434 12.5254 28.8902 12.5254L10.1252 12.5254C10.0061 12.5254 9.88774 12.5292 9.77043 12.5378C9.19372 12.2544 8.56884 12.0575 7.91137 11.9628L11.1186 5.15411C11.7979 3.6919 12.9237 2.93399 14.5302 2.93399L24.4853 2.93399C26.0917 2.93399 27.2169 3.6919 27.906 5.15411Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 18.7166C12.809 22.0011 10.1091 24.6801 6.85391 24.6801C3.5876 24.6801 0.889751 21.9934 0.889751 18.7166C0.889751 15.4594 3.5876 12.7615 6.85391 12.7615C10.13 12.7615 12.809 15.4405 12.809 18.7166ZM6.39532 15.2907L6.39532 18.2671L3.40919 18.2671C3.17159 18.2671 2.95128 18.4316 2.95128 18.7166C2.95128 19.0101 3.17159 19.1745 3.40919 19.1745L6.39532 19.1745L6.39532 22.1607C6.39532 22.4178 6.55977 22.6193 6.85391 22.6193C7.13829 22.6193 7.30343 22.4178 7.30343 22.1607L7.30343 19.1745L10.2798 19.1745C10.5362 19.1745 10.7293 19.0101 10.7293 18.7166C10.7293 18.4316 10.5362 18.2671 10.2798 18.2671L7.30343 18.2671L7.30343 15.2907C7.30343 15.0525 7.13829 14.8412 6.85391 14.8412C6.55977 14.8412 6.39532 15.0525 6.39532 15.2907Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
