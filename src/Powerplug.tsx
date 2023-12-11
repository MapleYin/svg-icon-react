import React from 'react'

export default function Powerplug({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.9582 19.6637' className={className}>
      <path
        d='M0 12.45C0 13.3822 0.718849 14.0641 1.70762 14.0641L5.94815 14.0641C7.82403 14.0641 8.88663 14.623 10.0844 16.1793C11.7798 18.3685 14.4189 19.6442 17.2582 19.6442L20.5044 19.6442C21.5802 19.6442 22.3344 18.9088 22.3344 17.8882L22.3344 1.59746C22.3344 0.67041 21.5802 0 20.5044 0L17.2582 0C14.4189 0 11.7798 1.2666 10.0844 3.47324C8.88663 5.02119 7.82403 5.58076 5.94815 5.58076L1.70762 5.58076C0.718849 5.58076 0 6.26192 0 7.20323ZM0.511533 12.43L0.511533 7.21417C0.511533 6.55147 1.00841 6.0923 1.70606 6.0923L5.94815 6.0923C7.96085 6.0923 9.1589 5.50655 10.4889 3.77413C12.0702 1.71427 14.5355 0.512217 17.2582 0.512217L20.5388 0.512217C21.2761 0.512217 21.8229 1.00313 21.8229 1.71182L21.8229 17.9414C21.8229 18.6501 21.2761 19.1326 20.5388 19.1326L17.2582 19.1326C14.5355 19.1326 12.0702 17.9487 10.4889 15.8889C9.1589 14.1565 7.96085 13.5609 5.94815 13.5609L1.70606 13.5609C1.00841 13.5609 0.511533 13.0927 0.511533 12.43ZM22.1021 6.61447L28.4798 6.61447C29.0951 6.61447 29.5969 6.10362 29.5969 5.50645C29.5969 4.88204 29.0951 4.38867 28.4798 4.38867L22.1021 4.38867ZM22.1021 15.2555L28.4798 15.2555C29.0951 15.2555 29.5969 14.7628 29.5969 14.1475C29.5969 13.5315 29.0951 13.0297 28.4798 13.0297L22.1021 13.0297Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}