import React from 'react'

export default function TextBelowPhotoFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.0768 31.0156' className={className}>
      <path
        d='M17.7361 30.7591C17.7361 30.9184 17.6382 31.0156 17.4698 31.0156L0.257231 31.0156C0.0972676 31.0156 0 30.9184 0 30.7591C0 30.5998 0.0972676 30.4928 0.257231 30.4928L17.4698 30.4928C17.6382 30.4928 17.7361 30.5998 17.7361 30.7591ZM25.7154 24.9794C25.7154 25.1387 25.6175 25.245 25.4582 25.245L0.257231 25.245C0.0972676 25.245 0 25.1387 0 24.9794C0 24.8201 0.0972676 24.7222 0.257231 24.7222L25.4582 24.7222C25.6175 24.7222 25.7154 24.8201 25.7154 24.9794Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.7154 2.86963L25.7154 16.625C25.7154 18.4597 24.7007 19.4647 22.864 19.4647L2.83331 19.4647C0.997267 19.4647 0 18.4869 0 16.625L0 2.86963C0 1.02656 0.979103 0.0104493 2.83331 0.0104493L22.864 0.0104493C24.7007 0.0104493 25.7154 1.02588 25.7154 2.86963ZM15.3848 9.88633L10.0101 14.4998L7.98379 12.6507C7.46826 12.1651 6.90254 11.8854 6.35567 11.8854C5.87715 11.8854 5.33096 12.1735 4.79658 12.6221L0.523544 16.2997L0.523544 16.7258C0.523544 18.1227 1.36085 18.9418 2.79405 18.9418L22.9164 18.9418C24.3573 18.9418 25.1862 18.1227 25.1862 16.7271L25.1862 15.1465L19.2971 9.90518C18.6789 9.35332 17.9604 9.05469 17.3186 9.05469C16.7208 9.05469 16.0231 9.33448 15.3848 9.88633ZM4.70811 7.17149C4.70811 8.59229 5.87364 9.80391 7.3126 9.80391C8.7418 9.80391 9.91641 8.59229 9.91641 7.17149C9.91641 5.74229 8.7418 4.55791 7.3126 4.55791C5.87364 4.55791 4.70811 5.74229 4.70811 7.17149Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}