import React from 'react'

export default function TextBadgeXmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3705 25.2783' className={className}>
      <path
        d='M24.0092 22.5988C24.0092 22.7581 23.9015 22.8561 23.7422 22.8561L0.257231 22.8561C0.0972676 22.8561 0 22.7581 0 22.5988C0 22.4395 0.0972676 22.3332 0.257231 22.3332L23.7422 22.3332C23.9015 22.3332 24.0092 22.4395 24.0092 22.5988ZM24.0092 15.97C24.0092 16.1293 23.9015 16.2266 23.7422 16.2266L0.257231 16.2266C0.0972676 16.2266 0 16.1293 0 15.97C0 15.8101 0.0972676 15.7037 0.257231 15.7037L23.7422 15.7037C23.9015 15.7037 24.0092 15.8101 24.0092 15.97ZM24.0092 9.34053C24.0092 9.49981 23.9015 9.59776 23.7422 9.59776L14.6959 9.59776C14.5366 9.59776 14.4394 9.49981 14.4394 9.34053C14.4394 9.18125 14.5366 9.07422 14.6959 9.07422L23.7422 9.07422C23.9015 9.07422 24.0092 9.18125 24.0092 9.34053ZM24.0092 2.71104C24.0092 2.871 23.9015 2.96827 23.7422 2.96827L14.6959 2.96827C14.5366 2.96827 14.4394 2.871 14.4394 2.71104C14.4394 2.55176 14.5366 2.44541 14.6959 2.44541L23.7422 2.44541C23.9015 2.44541 24.0092 2.55176 24.0092 2.71104Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.9283 5.95508C11.9283 9.23956 9.22911 11.9192 5.96416 11.9192C2.70693 11.9192 0.00976562 9.23184 0.00976562 5.95508C0.00976562 2.69785 2.70693 0 5.96416 0C9.24024 0 11.9283 2.67901 11.9283 5.95508ZM8.19541 3.08692L5.99981 5.31045L3.8669 3.19707C3.70245 3.03262 3.45371 2.99629 3.23408 3.19707C3.01445 3.39717 3.06123 3.65498 3.23408 3.83829L5.33838 5.96211L3.12461 8.18564C2.93994 8.36055 2.90635 8.62813 3.09873 8.83028C3.30088 9.03174 3.58663 8.98907 3.75245 8.82325L5.98575 6.59063L8.08096 8.70401C8.26426 8.88663 8.53115 8.92295 8.73194 8.70401C8.9334 8.48506 8.91455 8.22656 8.73194 8.04326L6.62764 5.95713L8.84209 3.7336C9.02676 3.55801 9.05059 3.26319 8.84912 3.08897C8.64698 2.90567 8.38008 2.91133 8.19541 3.08692Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}