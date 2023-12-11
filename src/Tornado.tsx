import React from 'react'

export default function Tornado({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.7297 25.0741' className={className}>
      <path
        d='M10.8736 9.75307C17.3823 9.75307 22.3684 8.19594 22.3684 5.82465C22.3684 3.88051 19.2117 2.56097 14.4485 2.56097C11.1756 2.56097 8.23614 3.26547 5.88946 4.29291C5.67022 4.38334 5.57119 4.55512 5.65752 4.70893C5.74522 4.85571 5.90928 4.86323 6.14122 4.75874C8.15294 3.8728 10.8582 3.05249 14.4606 3.05249C18.893 3.05249 21.8882 4.15053 21.8882 5.83305C21.8882 7.74857 17.0006 9.26791 10.887 9.26791C4.30186 9.26791 0.480869 7.80629 0.480869 5.10082C0.480869 3.2811 2.38663 1.48383 5.84551 0.450239C5.96349 0.420452 6.06095 0.309317 6.02345 0.159803C5.9671-0.0162732 5.80284-0.0188135 5.68916 0.0207383C2.1332 1.07797 0 3.04613 0 5.09516C0 8.052 3.82227 9.75307 10.8736 9.75307ZM11.3006 13.5542C15.1719 13.5542 18.7125 13.0012 21.1796 11.8453C21.3641 11.7603 21.4511 11.6303 21.3822 11.4856C21.3141 11.3325 21.1498 11.3186 20.9606 11.4042C18.3598 12.5325 14.8978 13.0367 11.3006 13.0367C8.38389 13.0367 4.96622 12.6124 2.86632 12.0106C2.67774 11.9549 2.52188 11.9924 2.46826 12.1399C2.41397 12.3048 2.51074 12.4223 2.68184 12.4773C5.0127 13.2006 8.4504 13.5542 11.3006 13.5542ZM12.2885 17.3332C15.7639 17.3409 18.8142 16.6968 21.3145 15.8774C21.4638 15.8281 21.5517 15.6779 21.4974 15.5268C21.4501 15.373 21.2956 15.3375 21.1113 15.4043C18.6962 16.2664 15.5624 16.8435 12.2885 16.8435C10.8807 16.8435 9.47012 16.7835 8.34278 16.6007C8.16963 16.568 8.02832 16.6375 7.99629 16.7739C7.97334 16.9193 8.06035 17.0542 8.2544 17.0792C9.29454 17.218 10.7993 17.3338 12.2885 17.3332ZM11.0628 20.9524C13.2376 21.2433 16.1123 21.2126 18.3191 20.4662C18.4714 20.4119 18.557 20.263 18.5027 20.1092C18.4484 19.9631 18.294 19.9438 18.1033 19.9988C15.9883 20.6001 13.3128 20.8123 11.1428 20.4655C10.971 20.4425 10.836 20.505 10.8054 20.6323C10.774 20.7791 10.861 20.9204 11.0628 20.9524ZM10.2125 24.6707C10.8017 24.8053 12.0884 24.7495 12.8074 24.6427C12.9785 24.6107 13.0585 24.4882 13.0285 24.3331C12.9979 24.1988 12.8684 24.1077 12.631 24.1488C11.9194 24.2828 11.044 24.3016 10.3038 24.1865C10.1236 24.1544 9.98438 24.2183 9.95303 24.3512C9.92236 24.505 10.0023 24.6295 10.2125 24.6707Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
