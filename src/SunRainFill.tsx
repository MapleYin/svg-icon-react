import React from 'react'

export default function SunRainFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4434 30.1393' className={className}>
      <path
        d='M20.953 14.5222C20.953 11.0033 18.078 8.10947 14.541 8.10947C11.004 8.10947 8.129 11.0033 8.129 14.5222C8.129 15.8627 8.5457 17.1181 9.23671 18.157L19.8446 18.157C20.5363 17.1181 20.953 15.8627 20.953 14.5222ZM0.210943 14.4522L5.14902 14.4522C5.25996 14.4522 5.35225 14.3528 5.35156 14.2188C5.35996 14.1133 5.25996 13.9763 5.14902 13.9763L0.210943 13.9763C0.109768 13.9763 0 14.0944 0 14.2188C0 14.3431 0.109768 14.4522 0.210943 14.4522ZM8.04688 8.03779C8.12393 7.95937 8.12393 7.79257 8.07002 7.72958L4.57442 4.23398C4.4835 4.14306 4.32715 4.17168 4.25781 4.2585C4.16123 4.34531 4.14238 4.47442 4.24307 4.57511L7.72958 8.07002C7.79257 8.12461 7.96006 8.1253 8.04688 8.03779ZM14.541 5.35225C14.6653 5.36064 14.7744 5.24179 14.7744 5.14902L14.7744 0.211627C14.7744 0.091604 14.6653 0 14.541 0C14.4167 0 14.3076 0.091604 14.3076 0.211627L14.3076 5.14902C14.3076 5.24179 14.4167 5.35293 14.541 5.35225ZM21.0352 8.03779C21.1227 8.12461 21.2895 8.12461 21.3524 8.07002L24.839 4.57511C24.939 4.47442 24.9201 4.346 24.8145 4.2585C24.7465 4.18008 24.5985 4.14306 24.5069 4.23398L21.012 7.72958C20.9483 7.79257 20.9567 7.95097 21.0352 8.03779ZM23.933 14.4522L28.8704 14.4522C28.9813 14.471 29.082 14.3528 29.082 14.2188C29.082 14.1133 28.9813 13.9951 28.8704 13.9763L23.933 13.9763C23.8312 13.9763 23.7291 14.0944 23.7207 14.2188C23.7214 14.3431 23.8312 14.4522 23.933 14.4522Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.16543 25.7768L8.24815 22.1891C8.3624 21.9926 8.31856 21.8472 8.17725 21.7608C8.06318 21.6934 7.91006 21.7372 7.78672 21.9253L5.7124 25.5144C5.60791 25.7095 5.63291 25.8549 5.76514 25.9412C5.90645 26.0269 6.06094 25.9732 6.16543 25.7768ZM9.15938 29.3244L13.2949 22.1702C13.4176 21.9828 13.3744 21.8297 13.2345 21.7434C13.112 21.6752 12.9568 21.7184 12.8433 21.9064L8.7 29.069C8.59619 29.2564 8.62051 29.4109 8.76182 29.4973C8.90176 29.5829 9.05557 29.5209 9.15938 29.3244ZM16.2038 25.7761L18.2858 22.1884C18.4008 22.001 18.3569 21.8465 18.2156 21.7602C18.1016 21.6927 17.9484 21.7365 17.8244 21.9246L15.7417 25.5137C15.6463 25.7088 15.6706 25.8633 15.8035 25.9405C15.9448 26.0262 16.0993 25.9726 16.2038 25.7761ZM19.1978 29.3237L23.3333 22.1695C23.456 21.9821 23.4128 21.829 23.2722 21.7427C23.1504 21.6745 22.9959 21.7177 22.8816 21.9148L18.7384 29.0684C18.6339 29.2558 18.6589 29.4103 18.7995 29.4966C18.9401 29.5822 19.0933 29.5202 19.1978 29.3237Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M1.26758 19.5934L27.8208 19.5934C27.9935 19.5934 28.1334 19.4813 28.1334 19.3359C28.1334 19.1814 27.9935 19.0694 27.8208 19.0694L1.26758 19.0694C1.09492 19.0694 0.95498 19.1814 0.95498 19.3359C0.95498 19.4813 1.09492 19.5934 1.26758 19.5934Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}