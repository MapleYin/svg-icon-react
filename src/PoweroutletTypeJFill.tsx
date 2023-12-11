import React from 'react'

export default function PoweroutletTypeJFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 33.0527 18.8885' className={className}>
      <path
        d='M26.9017 0.722469L32.384 8.4954C32.7807 9.07676 32.7989 9.78741 32.412 10.3506L26.9031 18.1542C26.5782 18.6254 26.0498 18.8773 25.3778 18.8773L7.31354 18.8773C6.64157 18.8773 6.12154 18.6254 5.78824 18.1542L0.279358 10.3506C-0.10756 9.78741-0.0900802 9.07676 0.31637 8.4954L5.78892 0.722469C6.10885 0.256252 6.65358 0 7.31354 0L25.3778 0C26.0378 0 26.5818 0.256252 26.9017 0.722469ZM14.0947 12.8075C14.0947 14.0478 15.1096 15.0634 16.3499 15.0634C17.581 15.0634 18.5966 14.0478 18.5966 12.8075C18.5966 11.5764 17.581 10.5601 16.3499 10.5601C15.1096 10.5601 14.0947 11.5764 14.0947 12.8075ZM5.33199 9.44502C5.33199 10.6846 6.34762 11.6918 7.58717 11.6918C8.8274 11.6918 9.83463 10.6846 9.83463 9.44502C9.83463 8.20479 8.8274 7.18916 7.58717 7.18916C6.34762 7.18916 5.33199 8.20479 5.33199 9.44502ZM22.8567 9.44502C22.8567 10.6846 23.8632 11.6918 25.1035 11.6918C26.3437 11.6918 27.3593 10.6846 27.3593 9.44502C27.3593 8.20479 26.3437 7.18916 25.1035 7.18916C23.8632 7.18916 22.8567 8.20479 22.8567 9.44502Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
