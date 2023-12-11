import React from 'react'

export default function N10SquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM10.0034 11.003C10.0034 13.1139 10.4711 16.272 12.7279 16.272C14.9841 16.272 15.4609 13.1139 15.4609 11.003C15.4609 8.89219 14.9841 5.73408 12.7279 5.73408C10.4711 5.73408 10.0034 8.89219 10.0034 11.003ZM7.18945 6.03643L5.34883 7.57363C5.2709 7.64815 5.2334 7.7086 5.2334 7.81084C5.2334 7.97237 5.33154 8.09913 5.50147 8.09913C5.58711 8.09913 5.63096 8.06778 5.68526 8.0337L7.35508 6.67228L7.35508 15.8599C7.35508 16.038 7.5082 16.1911 7.68633 16.1911C7.84424 16.1911 7.99805 16.038 7.99805 15.8599L7.99805 6.16846C7.99805 5.98282 7.84493 5.82197 7.65928 5.82197C7.47139 5.82197 7.31758 5.92217 7.18945 6.03643ZM14.8088 11.003C14.8088 12.7246 14.5376 15.6774 12.7279 15.6774C10.9267 15.6774 10.6464 12.7246 10.6464 11.003C10.6464 9.28076 10.9267 6.31954 12.7279 6.31954C14.5376 6.31954 14.8088 9.28076 14.8088 11.003Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
