import React from 'react'

export default function WalletPassFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20.3927 26.5424' className={className}>
      <path
        d='M3.1876 26.5424L16.8528 26.5424C18.8883 26.5424 20.0314 25.435 20.0314 23.3611L20.0314 3.23643C20.0314 1.16123 18.926 0.0551754 16.8528 0.0551754L13.0693 0.0551754C12.9714 0.0551754 12.9089 0.127442 12.9089 0.227445C12.9089 0.239261 12.9089 0.252445 12.9089 0.264946C12.9089 1.79454 11.6943 3.01065 10.016 3.01065C8.3461 3.01065 7.13155 1.79454 7.13155 0.264946C7.13155 0.252445 7.13155 0.239261 7.13155 0.227445C7.13155 0.127442 7.06905 0.0551754 6.97109 0.0551754L3.1876 0.0551754C1.10537 0.0551754 0 1.16123 0 3.23643L0 23.3611C0 25.435 1.14307 26.5424 3.1876 26.5424ZM4.69727 8.1046C4.52393 8.1046 4.40352 8.00167 4.40352 7.82901C4.40352 7.63887 4.52393 7.53662 4.69727 7.53662L15.3536 7.53662C15.5074 7.53662 15.6369 7.63887 15.6369 7.82901C15.6369 8.00167 15.5074 8.1046 15.3536 8.1046ZM4.69727 12.9642C4.52393 12.9642 4.40352 12.8347 4.40352 12.6899C4.40352 12.5361 4.52393 12.406 4.69727 12.406L10.0017 12.406C10.1743 12.406 10.3038 12.5361 10.3038 12.6899C10.3038 12.8347 10.1743 12.9642 10.0017 12.9642Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}