import React from 'react'

export default function SunMinFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.7006 23.349' className={className}>
      <path
        d='M11.6696 1.50255C12.0976 1.50255 12.4258 1.17501 12.4258 0.747074C12.4258 0.327541 12.0976 0 11.6696 0C11.2508 0 10.9135 0.327541 10.9135 0.747074C10.9135 1.17501 11.2508 1.50255 11.6696 1.50255ZM19.3947 4.70001C19.8143 4.70001 20.1509 4.37247 20.1509 3.94385C20.1509 3.525 19.8143 3.1877 19.3947 3.1877C18.9668 3.1877 18.6393 3.525 18.6393 3.94385C18.6393 4.37247 18.9668 4.70001 19.3947 4.70001ZM22.5831 12.4251C23.0117 12.4251 23.3393 12.0885 23.3393 11.6696C23.3393 11.241 23.0117 10.9135 22.5831 10.9135C22.1643 10.9135 21.827 11.241 21.827 11.6696C21.827 12.0885 22.1643 12.4251 22.5831 12.4251ZM19.3947 20.1418C19.8143 20.1418 20.1509 19.8136 20.1509 19.3857C20.1509 18.9668 19.8143 18.6295 19.3947 18.6295C18.9668 18.6295 18.6393 18.9668 18.6393 19.3857C18.6393 19.8136 18.9668 20.1418 19.3947 20.1418ZM11.6696 23.3393C12.0976 23.3393 12.4258 23.002 12.4258 22.5831C12.4258 22.1545 12.0976 21.827 11.6696 21.827C11.2508 21.827 10.9135 22.1545 10.9135 22.5831C10.9135 23.002 11.2508 23.3393 11.6696 23.3393ZM3.95362 20.1418C4.37247 20.1418 4.70909 19.8136 4.70909 19.3857C4.70909 18.9668 4.37247 18.6295 3.95362 18.6295C3.525 18.6295 3.19746 18.9668 3.19746 19.3857C3.19746 19.8136 3.525 20.1418 3.95362 20.1418ZM0.756156 12.4251C1.17501 12.4251 1.51231 12.0885 1.51231 11.6696C1.51231 11.241 1.17501 10.9135 0.756156 10.9135C0.327541 10.9135 0 11.241 0 11.6696C0 12.0885 0.327541 12.4251 0.756156 12.4251ZM3.95362 4.70001C4.37247 4.70001 4.70909 4.37247 4.70909 3.94385C4.70909 3.525 4.37247 3.1877 3.95362 3.1877C3.525 3.1877 3.19746 3.525 3.19746 3.94385C3.19746 4.37247 3.525 4.70001 3.95362 4.70001Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.6696 17.3949C14.8074 17.3949 17.4047 14.7977 17.4047 11.6696C17.4047 8.53184 14.8074 5.93457 11.6696 5.93457C8.53184 5.93457 5.94365 8.53184 5.94365 11.6696C5.94365 14.7977 8.53184 17.3949 11.6696 17.3949Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
