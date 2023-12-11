import React from 'react'

export default function BeachUmbrella({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.1618 27.1351' className={className}>
      <path
        d='M0.0237146 9.78523C-0.0374195 9.97362 0.0194183 10.1272 0.196862 10.2024C0.385633 10.2756 0.508779 10.1724 0.665518 10.0743C2.13143 9.02284 3.4368 8.7621 4.75448 9.25878C6.091 9.74569 6.78387 10.6943 7.09159 12.2906C7.15995 12.619 7.25126 12.7597 7.43866 12.8314C7.60927 12.8955 7.77645 12.8391 8.02538 12.639C9.02597 11.8011 10.5856 11.5703 11.8381 11.8587L6.51893 26.4337C6.4158 26.6949 6.56072 26.9791 6.80448 27.0822C7.07479 27.1665 7.34921 27.0404 7.45302 26.7701L12.7715 12.1944C13.874 12.7901 14.937 13.956 15.1673 15.2553C15.2279 15.5551 15.3185 15.7139 15.4975 15.7682C15.6849 15.8406 15.8521 15.7745 16.1199 15.566C17.3674 14.539 18.5115 14.2672 19.848 14.7457C21.1846 15.2333 22.0107 16.2657 22.4531 17.9946C22.5138 18.1834 22.5513 18.3254 22.74 18.3978C22.9168 18.473 23.0654 18.3867 23.135 18.1886C24.89 13.3348 23.4144 5.94422 16.103 3.00877L16.941 0.688753C17.0462 0.394805 16.9396 0.150369 16.6659 0.0361109C16.3656-0.068382 16.1219 0.0590604 16.0167 0.351641L15.1696 2.67302C7.6618 0.211208 1.79764 4.93016 0.0237146 9.78523ZM0.661229 9.44411C2.53311 5.02029 7.73613 0.988176 14.5959 2.99374C11.9933 4.11932 9.30409 7.27322 7.52753 11.8384C7.13075 10.2731 6.29159 9.29617 4.91288 8.80496C3.51943 8.29558 2.12734 8.50515 0.661229 9.44411ZM8.06552 11.985C9.95224 7.18563 12.826 4.01649 15.4737 3.29335C17.0395 5.54032 17.2026 9.83406 15.5655 14.7423C15.1074 13.3656 13.8892 12.0655 12.461 11.5625C11.0419 11.0406 9.28144 11.2341 8.06552 11.985ZM16.0783 14.9442C17.6262 10.2904 17.5898 6.15751 16.3161 3.61191C22.8672 6.49764 24.2653 12.952 22.8663 17.5106C22.3453 15.8488 21.4167 14.8006 20.0148 14.2912C18.6361 13.7993 17.3789 13.9914 16.0783 14.9442Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
