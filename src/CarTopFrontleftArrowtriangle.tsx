import React from 'react'

export default function CarTopFrontleftArrowtriangle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.0887 28.5526' className={className}>
      <path
        d='M15.3358 28.533C20.1371 28.533 22.8883 27.1917 22.8883 24.8598L22.8883 4.60577C22.8883 1.64209 20.2022 0 15.3358 0C10.4966 0 7.80137 1.64209 7.80137 4.60577L7.80137 24.8598C7.80137 27.1917 10.5532 28.533 15.3358 28.533ZM15.3358 28.0362C10.8678 28.0362 8.29885 26.8751 8.29885 24.8634L8.29885 4.60577C8.29885 1.97569 10.8211 0.506553 15.3358 0.506553C19.8693 0.506553 22.3908 1.97569 22.3908 4.60577L22.3908 24.8634C22.3908 26.8751 19.8219 28.0362 15.3358 28.0362ZM15.3546 11.9239C16.3575 11.9239 18.5663 12.0391 19.1829 12.0391C20.075 12.0391 20.5313 11.6868 20.6094 10.6823L20.7691 8.88965C20.9071 7.21153 20.2543 6.35899 15.3546 6.35899C10.4542 6.35899 9.80138 7.21153 9.93947 8.88965L10.0991 10.6823C10.1773 11.6868 10.6335 12.0391 11.5256 12.0391C12.1331 12.0391 14.0061 11.9239 15.3546 11.9239ZM15.3546 25.1407C19.565 25.1407 20.7625 24.5618 20.6092 22.8719L20.5172 21.8208C20.4043 20.4461 19.2549 19.9844 15.3546 19.9844C11.4536 19.9844 10.3042 20.4461 10.1822 21.8208L10.0993 22.8719C9.94601 24.5618 11.1436 25.1407 15.3546 25.1407ZM8.13624 10.0805L8.13624 8.18097L7.15313 8.18097C6.67276 8.18097 6.39473 8.41222 6.39473 8.79064L6.39473 9.47081C6.39473 9.84855 6.67276 10.0805 7.15313 10.0805ZM22.5723 10.0805L23.5554 10.0805C24.0358 10.0805 24.3138 9.84855 24.3138 9.47081L24.3138 8.79064C24.3138 8.41222 24.0358 8.18097 23.5554 8.18097L22.5723 8.18097Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 8.31905C0 8.717 0.372267 8.80675 0.627152 8.64796L5.17315 5.89542C5.48252 5.70099 5.47276 5.29395 5.17315 5.1086L0.608304 2.32745C0.353419 2.16866 0 2.26046 0 2.65773Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
