import React from 'react'

export default function ArrowUpToLine({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.4502 23.6731' className={className}>
      <path
        d='M18.0889 9.45294C18.0889 9.38068 18.0646 9.32931 18.0139 9.28702L9.21241 0.558217C9.16173 0.506848 9.11739 0.481164 9.04444 0.481164C8.9624 0.481164 8.92715 0.506848 8.87646 0.558217L0.0750017 9.28702C0.0243169 9.32931 0 9.38068 0 9.45294C0 9.60861 0.118166 9.70022 0.22774 9.70022C0.309089 9.70022 0.381356 9.6759 0.420224 9.64611L6.3119 3.74809L8.8625 1.2092L8.84033 1.17668L8.81465 3.88675L8.81465 23.444C8.81465 23.5549 8.91465 23.6731 9.04444 23.6731C9.17423 23.6731 9.27423 23.5549 9.27423 23.444L9.27423 3.88675L9.24854 1.17668L9.22705 1.2092L11.777 3.74809L17.6686 9.64611C17.6984 9.6759 17.7798 9.70022 17.8521 9.70022C17.9707 9.70022 18.0889 9.60861 18.0889 9.45294ZM18.0889 0.279303C18.0889 0.140432 17.9714 0.0306642 17.8332 0.0306642L0.247955 0.0306642C0.118166 0.0306642 0 0.140432 0 0.279303C0 0.408407 0.118166 0.518175 0.247955 0.518175L17.8332 0.518175C17.9714 0.518175 18.0889 0.408407 18.0889 0.279303Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}