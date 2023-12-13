import React from 'react'

export function TextBadgeCheckmark({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.3705 25.2783' className={className}>
      <path
        d='M24.0092 22.5988C24.0092 22.7581 23.9015 22.8561 23.7422 22.8561L0.257231 22.8561C0.0972676 22.8561 0 22.7581 0 22.5988C0 22.4395 0.0972676 22.3332 0.257231 22.3332L23.7422 22.3332C23.9015 22.3332 24.0092 22.4395 24.0092 22.5988ZM24.0092 15.97C24.0092 16.1293 23.9015 16.2266 23.7422 16.2266L0.257231 16.2266C0.0972676 16.2266 0 16.1293 0 15.97C0 15.8101 0.0972676 15.7037 0.257231 15.7037L23.7422 15.7037C23.9015 15.7037 24.0092 15.8101 24.0092 15.97ZM24.0092 9.34053C24.0092 9.49981 23.9015 9.59776 23.7422 9.59776L14.6959 9.59776C14.5366 9.59776 14.4394 9.49981 14.4394 9.34053C14.4394 9.18125 14.5366 9.07422 14.6959 9.07422L23.7422 9.07422C23.9015 9.07422 24.0092 9.18125 24.0092 9.34053ZM24.0092 2.71104C24.0092 2.871 23.9015 2.96827 23.7422 2.96827L14.6959 2.96827C14.5366 2.96827 14.4394 2.871 14.4394 2.71104C14.4394 2.55176 14.5366 2.44541 14.6959 2.44541L23.7422 2.44541C23.9015 2.44541 24.0092 2.55176 24.0092 2.71104Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.9283 5.95508C11.9283 9.23956 9.22911 11.9192 5.96416 11.9192C2.70693 11.9192 0.00976562 9.23184 0.00976562 5.95508C0.00976562 2.69785 2.70693 0 5.96416 0C9.24024 0 11.9283 2.67901 11.9283 5.95508ZM8.21231 3.53721L5.14522 7.73984L3.51006 5.9959C3.41944 5.90459 3.31563 5.79648 3.1253 5.79648C2.87022 5.79648 2.67578 5.97276 2.67578 6.22852C2.67578 6.35821 2.72529 6.47246 2.8166 6.58331L4.79815 8.75176C4.8999 8.88145 5.03438 8.9421 5.17451 8.9421C5.33828 8.9421 5.44415 8.86192 5.53477 8.74131L8.921 4.07666C8.98233 3.99375 9.02276 3.90108 9.02276 3.77344C9.02276 3.53652 8.83604 3.33301 8.59073 3.33301C8.4458 3.33301 8.30362 3.41455 8.21231 3.53721Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
