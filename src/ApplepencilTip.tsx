import React from 'react'

export default function ApplepencilTip({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.4138 22.1688' className={className}>
      <path
        d='M0.261551 22.1681C0.43128 22.1681 0.501985 22.0624 0.512434 21.8795L0.963215 15.7837L2.38538 9.64083L1.99026 9.94689L8.06224 9.94689L7.66712 9.64083L9.08929 15.7837L9.54007 21.8795C9.55052 22.0624 9.62122 22.1681 9.79095 22.1681C9.97045 22.1681 10.0627 22.052 10.0516 21.8475L9.58334 15.5478C9.56449 15.3357 9.55473 15.2548 9.51498 15.1453L8.12435 9.61964C8.09232 9.50899 7.9767 9.42403 7.84789 9.42403L2.19553 9.42403C2.07581 9.42403 1.9511 9.50899 1.92815 9.61964L0.528439 15.1453C0.497775 15.2548 0.48801 15.3357 0.469162 15.5478L0.000901369 21.8475C-0.0102316 22.052 0.0820561 22.1681 0.261551 22.1681Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M2.1594 8.53428L7.91693 8.53428L5.41849 0.314652C5.36283 0.119044 5.18587 0 4.9889 0C4.78147 0 4.61155 0.119044 4.55589 0.314652Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}