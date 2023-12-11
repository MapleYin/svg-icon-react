import React from 'react'

export default function SliderHorizontalBelowRectangle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.2987 22.8139' className={className}>
      <path
        d='M15.84 22.6515C17.1601 22.6515 18.2416 21.5608 18.2416 20.2415C18.2416 18.9215 17.1601 17.8309 15.84 17.8309C14.5207 17.8309 13.4301 18.9215 13.4301 20.2415C13.4301 21.5608 14.5207 22.6515 15.84 22.6515ZM15.84 21.9459C14.8724 21.9459 14.1266 21.1813 14.1266 20.2227C14.1266 19.2634 14.8724 18.5176 15.84 18.5176C16.7993 18.5176 17.5451 19.2634 17.5451 20.2227C17.5451 21.1813 16.7993 21.9459 15.84 21.9459ZM13.7557 19.9899L0.251567 19.9899C0.117483 19.9899 0 20.0983 0 20.2415C0 20.384 0.117483 20.4924 0.251567 20.4924L13.7557 20.4924ZM22.6711 19.9899L17.8439 19.9899L17.8439 20.4924L22.6711 20.4924C22.8199 20.4924 22.9374 20.384 22.9374 20.2415C22.9374 20.0983 22.8199 19.9899 22.6711 19.9899Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M2.921 15.3635L20.0164 15.3635C21.9703 15.3635 22.9374 14.418 22.9374 12.4543L22.9374 2.9085C22.9374 0.936428 21.9703 0 20.0164 0L2.921 0C0.956448 0 0 0.936428 0 2.9085L0 12.4543C0 14.418 0.967092 15.3635 2.921 15.3635ZM2.91963 14.8685C1.22667 14.8685 0.511533 14.1352 0.511533 12.4423L0.511533 2.91211C0.511533 1.21846 1.22667 0.485165 2.91963 0.485165L20.0178 0.485165C21.7023 0.485165 22.4259 1.21846 22.4259 2.91211L22.4259 12.4423C22.4259 14.1352 21.7023 14.8685 20.0178 14.8685Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}