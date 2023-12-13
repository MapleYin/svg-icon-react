import React from 'react'

export function ChineseyuanrenminbisignSquare({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M3.18125 22.0158L18.778 22.0158C20.8532 22.0158 21.96 20.8734 21.96 18.8282L21.96 3.24414C21.96 1.19893 20.8532 0.0565428 18.778 0.0565428L3.18125 0.0565428C1.10674 0.0565428 0 1.16192 0 3.24414L0 18.8282C0 20.9014 1.10674 22.0158 3.18125 22.0158ZM3.21124 21.5043C1.42628 21.5043 0.511533 20.5818 0.511533 18.8039L0.511533 3.26846C0.511533 1.49054 1.42628 0.568076 3.21124 0.568076L18.7487 0.568076C20.459 0.568076 21.4484 1.49054 21.4484 3.26846L21.4484 18.8039C21.4484 20.5818 20.459 21.5043 18.7487 21.5043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.003 16.6983C11.168 16.6983 11.2793 16.6059 11.2793 16.4116L11.2793 13.8207L13.8249 13.8207C13.9837 13.8207 14.0993 13.6856 14.0993 13.5274C14.0993 13.3596 13.9837 13.2335 13.8249 13.2335L11.2793 13.2335L11.2793 12.1382L13.8249 12.1382C13.9837 12.1382 14.0993 12.0121 14.0993 11.854C14.0993 11.6868 13.9837 11.5607 13.8249 11.5607L11.5971 11.5607L14.8206 6.62002C14.8638 6.56367 14.8938 6.49053 14.8938 6.4251C14.8938 6.26289 14.7915 6.14248 14.6182 6.14248C14.5082 6.14248 14.44 6.17724 14.3564 6.31377L10.9856 11.4714L7.61329 6.31308C7.52061 6.18564 7.46153 6.14179 7.35225 6.14179C7.19707 6.14179 7.07598 6.25312 7.07598 6.40557C7.07598 6.50869 7.11572 6.58184 7.14072 6.61934L10.3727 11.5607L8.46045 11.5607C8.30098 11.5607 8.18603 11.6868 8.18603 11.854C8.18603 12.0121 8.2835 12.1382 8.46045 12.1382L10.7093 12.1382L10.7093 13.2335L8.46045 13.2335C8.30098 13.2335 8.18603 13.3596 8.18603 13.5274C8.18603 13.6856 8.2835 13.8207 8.46045 13.8207L10.7093 13.8207L10.7093 16.4109C10.7093 16.6052 10.8569 16.6983 11.003 16.6983Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
