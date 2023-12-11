import React from 'react'

export default function R2ButtonRoundedtopHorizontalFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.2232 20.2154' className={className}>
      <path
        d='M26.8618 8.95489L26.8618 17.1689C26.8618 19.0912 25.7837 20.205 23.8327 20.205L3.02979 20.205C1.06904 20.205 0 19.1282 0 17.1689L0 8.95489C0 3.09258 2.4334 0 8.92726 0L17.9346 0C24.42 0 26.8618 3.09258 26.8618 8.95489ZM8.09249 4.94503C7.89278 4.94503 7.78213 5.0668 7.78213 5.26583L7.78213 14.9313C7.78213 15.1121 7.92071 15.2541 8.11133 15.2541C8.30059 15.2541 8.42169 15.1128 8.42169 14.9313L8.42169 10.7243L10.468 10.7243L12.3563 15.0637C12.4217 15.2105 12.5205 15.2541 12.6687 15.2541C12.8672 15.2541 12.9854 15.1022 12.9854 14.9549C12.9854 14.8999 12.9715 14.8401 12.9556 14.7958L11.0923 10.546C12.117 10.231 12.8875 9.33067 12.8875 7.79347C12.8875 6.10235 11.9343 4.94503 10.1474 4.94503ZM14.6137 7.53741C14.6137 7.64718 14.6937 7.83116 14.9054 7.83116C15.0578 7.83116 15.1741 7.71895 15.1817 7.58536C15.3329 6.32227 15.8661 5.42618 16.9652 5.42618C18.1963 5.42618 18.7084 6.6336 18.7084 7.65987C18.7084 8.58262 18.4194 9.36847 17.5898 10.5582L14.6858 14.6202C14.6078 14.7477 14.5948 14.8388 14.5948 14.9354C14.5948 15.1248 14.7482 15.2166 14.9186 15.2166L19.2273 15.2166C19.3915 15.2166 19.526 15.0892 19.526 14.9256C19.526 14.7606 19.3908 14.6255 19.2273 14.6255L15.4672 14.6255L15.4672 14.583L18.0302 10.9164C18.9485 9.58438 19.2762 8.67549 19.2762 7.62784C19.2762 6.10391 18.5108 4.82803 16.9478 4.82803C15.5117 4.82803 14.6137 6.1834 14.6137 7.53741ZM12.2466 7.80528C12.2466 9.14151 11.5669 10.1135 10.091 10.1135L8.42169 10.1135L8.42169 5.53478L10.0729 5.53478C11.3791 5.53478 12.2466 6.30216 12.2466 7.80528Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
