import React from 'react'

export default function Tram({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3635 29.7063' className={className}>
      <path
        d='M4.28037 25.5164L16.7218 25.5164C19.9183 25.5164 21.0022 23.5242 21.0022 21.3284L21.0022 13.3747C21.0022 9.04737 20.2687 5.02745 19.7204 3.14737C19.27 1.58555 18.0592 0.555468 16.4699 0.356053C14.9959 0.166894 12.8992 0.0281239 10.4969 0.0281239C8.12559 0.0281239 6.00626 0.166894 4.53224 0.356053C2.94297 0.555468 1.73213 1.58555 1.28174 3.14737C0.733494 5.02745 0 9.05938 0 13.3867L0 21.3284C0 23.5242 1.08389 25.5164 4.28037 25.5164ZM4.34151 24.9716C1.46827 24.9716 0.545515 23.2286 0.545515 21.3284L0.545515 13.3867C0.545515 9.01036 1.40752 4.98664 1.86153 3.2049C2.19268 1.94884 3.21427 1.07803 4.60606 0.863873C6.3587 0.609772 8.43555 0.573639 10.4969 0.573639C12.5886 0.573639 14.6435 0.609772 16.3961 0.863873C17.7879 1.07803 18.8095 1.94884 19.1406 3.2049C19.5946 4.98664 20.4566 8.99835 20.4566 13.3747L20.4566 21.3284C20.4566 23.2286 19.5339 24.9716 16.6607 24.9716ZM7.07169 3.76475L13.9312 3.76475C14.2155 3.76475 14.38 3.5626 14.38 3.29639C14.38 3.03994 14.2155 2.83916 13.9312 2.83916L7.07169 2.83916C6.78663 2.83916 6.62217 3.03994 6.62217 3.29639C6.62217 3.5626 6.78663 3.76475 7.07169 3.76475ZM10.4969 17.958C12.9514 17.9476 14.9318 17.8667 16.584 17.7461C17.484 17.6673 18.0347 17.0777 18.0347 16.1721L18.0347 12.949C18.0347 10.8981 17.8164 8.96611 17.5003 7.24844C17.3733 6.48018 16.8011 5.96944 16.014 5.88223C14.6636 5.76231 12.7637 5.66465 10.4969 5.66397C8.20078 5.66465 6.30156 5.76231 4.78359 5.90108C4.08936 5.96944 3.60088 6.48018 3.46416 7.24844C3.14873 8.96611 2.93047 10.8981 2.93047 12.949L2.93047 16.1721C2.93047 17.0777 3.48115 17.6673 4.38115 17.7461C6.0333 17.8667 8.02285 17.9476 10.4969 17.958ZM4.57256 22.3725C5.38428 22.3725 5.99796 21.7783 5.99796 20.975C5.99796 20.1724 5.37657 19.5691 4.57256 19.5691C3.76993 19.5691 3.17647 20.1724 3.17647 20.975C3.17647 21.7783 3.76993 22.3725 4.57256 22.3725ZM16.4652 22.3731C17.2477 22.3731 17.8627 21.7776 17.8627 20.975C17.8627 20.173 17.2672 19.5685 16.4652 19.5685C15.6626 19.5685 15.0482 20.173 15.0482 20.975C15.0482 21.7776 15.6626 22.3731 16.4652 22.3731ZM2.00801 29.7063L2.45342 29.7063C2.66671 29.7063 2.75167 29.654 2.85479 29.4896L5.6007 25.0897L4.34864 25.0897L1.78242 29.2117C1.6166 29.4625 1.7168 29.7063 2.00801 29.7063ZM3.37901 28.3456L17.5973 28.3456L17.5973 27.2982L3.37901 27.2982ZM18.5235 29.7063L18.969 29.7063C19.2699 29.7063 19.3674 29.4618 19.2023 29.2117L16.6283 25.0897L15.377 25.0897L18.1229 29.4896C18.2253 29.654 18.3103 29.7063 18.5235 29.7063Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}