import React from 'react'

export default function RButtonRoundedbottomHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M26.8618 3.02706L26.8618 11.241C26.8618 17.1033 24.42 20.205 17.9346 20.205L8.92726 20.205C2.4334 20.205 0 17.1033 0 11.241L0 3.02706C0 1.06836 1.06904 0 3.02979 0L23.8327 0C25.7837 0 26.8618 1.10537 26.8618 3.02706ZM11.0226 5.33818C10.8921 5.33818 10.7787 5.45909 10.7787 5.6084L10.7787 14.6072C10.7787 14.7384 10.9291 14.8566 11.0596 14.8566C11.2096 14.8566 11.3159 14.7391 11.3159 14.6072L11.3159 10.7952L14.0485 10.7952L16.2755 14.6716C16.3562 14.8002 16.4109 14.8566 16.5473 14.8566C16.6918 14.8566 16.7807 14.7697 16.7807 14.6384C16.7807 14.5591 16.748 14.4896 16.6741 14.3746L14.546 10.7488C15.9175 10.4987 16.7685 9.48897 16.7685 8.07296C16.7685 6.47764 15.611 5.33818 13.9357 5.33818ZM16.2703 8.06592C16.2703 9.37745 15.3417 10.2679 14.0136 10.2679L11.3159 10.2679L11.3159 5.85919L14.0065 5.85919C15.3487 5.85919 16.2703 6.73624 16.2703 8.06592Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
