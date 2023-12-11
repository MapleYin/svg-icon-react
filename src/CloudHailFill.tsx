import React from 'react'

export default function CloudHailFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.0065 29.0379' className={className}>
      <path
        d='M20.7585 24.149L22.0502 21.909C22.1645 21.7125 22.1304 21.5671 21.9891 21.4808C21.8659 21.4133 21.7121 21.4578 21.5888 21.6445L20.2964 23.8859C20.1933 24.0811 20.226 24.2265 20.3589 24.3128C20.4995 24.3984 20.6547 24.3357 20.7585 24.149ZM19.3609 27.1531C19.9278 27.1531 20.3964 26.6664 20.3964 26.1072C20.3964 25.5222 19.9467 25.0354 19.3609 25.0354C18.7654 25.0354 18.2976 25.5222 18.2976 26.1072C18.2976 26.6664 18.7654 27.1531 19.3609 27.1531Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.0534 26.024L15.4493 21.8797C15.5538 21.6825 15.5288 21.5378 15.3882 21.4515C15.265 21.3833 15.1015 21.4271 14.997 21.6152L12.5913 25.7616C12.4966 25.9567 12.5209 26.1112 12.6538 26.1976C12.7944 26.2832 12.9496 26.2205 13.0534 26.024ZM11.6649 29.0379C12.2228 29.0379 12.6913 28.5505 12.6913 27.9829C12.6913 27.4069 12.2416 26.9202 11.6649 26.9202C11.0604 26.9202 10.5925 27.4069 10.5925 27.9829C10.5925 28.5505 11.0604 29.0379 11.6649 29.0379Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.54629 24.1002L8.84707 21.8602C8.96133 21.6728 8.91817 21.5183 8.77686 21.4319C8.66279 21.3645 8.5083 21.409 8.38564 21.5957L7.09326 23.8371C6.98945 24.0329 7.01377 24.1776 7.15508 24.264C7.29639 24.3496 7.45157 24.296 7.54629 24.1002ZM6.15781 27.1043C6.72471 27.1043 7.19326 26.6176 7.19326 26.0584C7.19326 25.4733 6.74356 24.9866 6.15781 24.9866C5.5623 24.9866 5.09375 25.4733 5.09375 26.0584C5.09375 26.6176 5.5623 27.1043 6.15781 27.1043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.29327 19.3015L22.2137 19.3015C26.0226 19.3015 29.0065 16.4244 29.0065 12.8143C29.0065 9.1498 25.9097 6.43173 21.8726 6.43173C20.2996 3.15097 17.6465 1.03798 13.7371 1.03798C9.26758 1.03798 5.60996 4.74961 5.22705 9.42734C2.85879 10.0362 0.927734 11.8434 0.927734 14.4542C0.927734 17.101 2.90225 19.3015 6.29327 19.3015Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}