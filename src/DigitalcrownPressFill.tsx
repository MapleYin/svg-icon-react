import React from 'react'

export default function DigitalcrownPressFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.9854 23.1961' className={className}>
      <path
        d='M7.38789 3.28838L5.05606 3.28838C4.91065 3.28838 4.78819 3.41084 4.78819 3.56534C4.78819 3.71075 4.91065 3.83321 5.05606 3.83321L7.18115 3.83321C6.82871 4.87716 6.61729 6.00626 6.41631 7.1458L4.06817 7.1458C3.91299 7.1458 3.79053 7.26827 3.79053 7.42276C3.79053 7.56886 3.91299 7.7004 4.06817 7.7004L6.34746 7.7004C6.19531 8.91671 6.11787 10.2468 6.11719 11.3346L3.74591 11.3346C3.59073 11.3346 3.46826 11.457 3.46826 11.6031C3.46826 11.7576 3.59073 11.8801 3.74591 11.8801L6.11651 11.8801C6.11719 12.6704 6.20371 14.2889 6.34609 15.5143L4.06817 15.5143C3.91299 15.5143 3.79053 15.6367 3.79053 15.7828C3.79053 15.9373 3.91299 16.0598 4.06817 16.0598L6.42266 16.0598C6.53008 16.8362 6.79736 18.2076 7.18545 19.3724L5.05606 19.3724C4.91065 19.3724 4.78819 19.4948 4.78819 19.6493C4.78819 19.7947 4.91065 19.9172 5.05606 19.9172L7.3999 19.9172C7.98926 21.425 8.7669 22.5526 9.721 23.1857L7.09747 23.1857C2.52383 23.1857 0.528423 18.5102 0.528423 11.5932C0.528423 4.66709 2.52383 0 7.09747 0L9.721 0C8.76123 0.639357 7.97657 1.76992 7.38789 3.28838ZM16.1038 8.79377L14.0559 10.4343C13.3102 11.0147 13.2634 12.1151 14.0377 12.7507L16.1039 14.3917C15.6619 19.5723 13.9597 22.8634 11.6204 22.8634C8.88136 22.8634 7.00694 18.3536 7.00694 11.5932C7.00694 4.83272 8.88136 0.322266 11.6204 0.322266C13.9596 0.322266 15.6617 3.61351 16.1038 8.79377Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.5999 12.042L17.9853 14.7309C18.3035 14.9899 18.7611 14.8297 18.7611 14.4371L18.7611 11.8572L24.8218 11.8572C24.995 11.8572 25.095 11.7475 25.095 11.5848C25.095 11.4207 24.995 11.32 24.8218 11.32L18.7611 11.32L18.7611 8.73946C18.7611 8.34893 18.2965 8.19512 17.9853 8.4457L14.5999 11.1339C14.3121 11.3533 14.2751 11.7856 14.5999 12.042Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}