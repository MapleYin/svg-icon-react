import React from 'react'

export default function TengesignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM7.10791 8.20469C6.93389 8.20469 6.82529 8.31397 6.82529 8.47754C6.82529 8.65088 6.93389 8.76085 7.10791 8.76085L10.7065 8.76085L10.7065 16.3095C10.7065 16.4967 10.8192 16.5892 10.9765 16.5892C11.1428 16.5892 11.2541 16.4967 11.2541 16.3095L11.2541 8.76085L14.8527 8.76085C15.0268 8.76085 15.1354 8.65088 15.1354 8.47754C15.1354 8.31397 15.0268 8.20469 14.8527 8.20469ZM7.11719 6.01533C6.94024 6.01533 6.82393 6.13096 6.82393 6.30928C6.82393 6.48623 6.94024 6.59551 7.11719 6.59551L14.8428 6.59551C15.0204 6.59551 15.136 6.48623 15.136 6.30928C15.136 6.13096 15.0204 6.01533 14.8428 6.01533Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
