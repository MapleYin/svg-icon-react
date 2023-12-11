import React from 'react'

export default function MSquare({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.23897 16.6222C6.39258 16.6222 6.50391 16.5179 6.50391 16.3699L6.50391 6.21223L6.56524 6.21223L10.5153 16.268C10.5996 16.4686 10.7459 16.5724 10.9653 16.5724C11.2043 16.5724 11.3513 16.4686 11.4356 16.268L15.3863 6.21223L15.4477 6.21223L15.4477 16.3699C15.4477 16.5263 15.559 16.6222 15.7196 16.6222C15.8726 16.6222 15.9846 16.5179 15.9846 16.3699L15.9846 5.8918C15.9846 5.6042 15.7813 5.42109 15.5118 5.42109C15.2563 5.42109 15.0947 5.5374 14.9623 5.87198L10.9967 15.8907L10.9374 15.8907L6.98858 5.87198C6.85616 5.5374 6.69532 5.42109 6.43975 5.42109C6.16963 5.42109 5.96699 5.6042 5.96699 5.8918L5.96699 16.3699C5.96699 16.5263 6.07832 16.6222 6.23897 16.6222Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}