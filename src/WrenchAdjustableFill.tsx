import React from 'react'

export default function WrenchAdjustableFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.8896 30.0981' className={className}>
      <path
        d='M1.38357 28.733C3.24295 30.5924 5.8868 30.6063 7.82586 28.4414C10.1315 25.8435 12.9254 20.715 16.6292 17.0119C19.036 14.6141 21.0969 16.0884 23.8225 15.0748L21.5637 7.38178C21.2728 6.37797 21.4602 5.39282 22.8508 5.02514L27.0521 3.88549C26.8596 3.61225 26.6331 3.33783 26.3453 3.05843C23.7026 0.411655 19.2108 0.261558 16.5416 2.80248C12.5735 6.59408 15.8954 10.6375 12.5332 13.9997C9.42536 17.1076 4.18836 20.0685 1.65701 22.281C-0.514185 24.1794-0.495337 26.8548 1.38357 28.733ZM4.54295 26.9155C3.78484 26.9155 3.1739 26.3234 3.1739 25.5646C3.1739 24.8162 3.78484 24.2144 4.54295 24.2144C5.29129 24.2144 5.8743 24.8162 5.8743 25.5646C5.8743 26.3234 5.29129 26.9155 4.54295 26.9155ZM17.0151 9.93148C16.852 9.98168 16.691 9.88197 16.6485 9.71752C16.6074 9.56625 16.6994 9.39408 16.8618 9.35297L19.4702 8.65414C19.6403 8.60463 19.7936 8.69594 19.8438 8.86742C19.8856 9.01234 19.7929 9.18383 19.6305 9.23402ZM17.331 11.3432C17.1679 11.3843 17.016 11.2937 16.9644 11.1292C16.9233 10.9689 17.0153 10.8058 17.1777 10.7556L19.7952 10.0568C19.9653 10.0163 20.1095 10.1077 20.1597 10.2701C20.2015 10.4241 20.1089 10.5955 19.9465 10.6367ZM17.6469 12.7458C17.4845 12.796 17.3305 12.6956 17.281 12.5319C17.2406 12.3786 17.3319 12.2084 17.4943 12.1673L20.1111 11.4692C20.2742 11.4183 20.4268 11.5103 20.4763 11.6811C20.5168 11.8337 20.4248 11.9975 20.2547 12.047ZM24.3621 14.8284C25.0347 14.5081 25.7444 13.9981 26.5113 13.2521C27.6973 12.0833 28.4066 10.4776 28.5264 9.07289L24.2199 10.2184C23.7169 10.3544 23.3095 10.3097 23.0013 10.1959Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
