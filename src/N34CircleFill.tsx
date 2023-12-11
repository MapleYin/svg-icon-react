import React from 'react'

export default function N34CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM6.20039 8.77168C6.12295 9.04375 6.10273 9.26836 6.10273 9.39239C6.10273 9.58184 6.20224 9.70294 6.379 9.70294C6.60684 9.70294 6.63096 9.56417 6.67549 9.3461C6.82471 8.37208 7.41016 7.50597 8.50156 7.50597C9.63682 7.50597 10.2677 8.42774 10.2677 9.56368C10.2677 10.7407 9.50078 11.6827 8.33145 11.6827L7.72422 11.6827C7.51523 11.6827 7.46182 11.827 7.46182 11.9619C7.46182 12.115 7.57109 12.2495 7.72422 12.2495L8.34189 12.2495C9.70244 12.2495 10.5202 13.0024 10.5202 14.5025C10.5202 15.7048 9.9041 16.8073 8.56016 16.8073C7.33701 16.8073 6.63145 15.8506 6.51084 14.9336C6.48584 14.7155 6.42403 14.5929 6.19756 14.5929C6.03965 14.5929 5.92763 14.721 5.92763 14.8971C5.92763 15.0581 5.97578 15.3477 6.04414 15.5437C6.37822 16.6254 7.25518 17.4005 8.55039 17.4005C10.0566 17.4005 11.1605 16.2475 11.1605 14.4606C11.1605 13.153 10.5247 12.0673 9.20118 11.9501L9.20118 11.9201C10.3458 11.6349 10.8661 10.5718 10.8661 9.4962C10.8661 8.01221 9.96123 6.92325 8.50156 6.92325C7.27334 6.92325 6.53515 7.66612 6.20039 8.77168ZM16.071 7.43145L12.799 13.824C12.7127 14.0092 12.6716 14.1478 12.6716 14.3093C12.6716 14.5662 12.8436 14.7473 13.1473 14.7473L16.5547 14.7473L16.5547 17.0211C16.5547 17.2081 16.6651 17.3607 16.8728 17.3607C17.0384 17.3607 17.1727 17.1774 17.1727 17.0211L17.1727 14.7473L18.064 14.7473C18.2498 14.7473 18.3641 14.6457 18.3641 14.4549C18.3641 14.2836 18.2135 14.173 18.064 14.173L17.1727 14.173L17.1727 7.43897C17.1727 7.01827 16.8989 6.92598 16.7023 6.92598C16.3836 6.92598 16.2305 7.12725 16.071 7.43145ZM16.5477 14.1659L13.2877 14.1659L13.2877 14.143L16.4988 7.77462L16.5477 7.77462Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
