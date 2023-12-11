import React from 'react'

export default function FigureHiking({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.6 29.1164' className={className}>
      <path
        d='M9.47817 5.02032C10.8536 5.02032 11.9828 3.89112 11.9828 2.50459C11.9828 1.12988 10.8536 0 9.47817 0C8.09232 0 6.96312 1.12988 6.96312 2.50459C6.96312 3.89112 8.09232 5.02032 9.47817 5.02032ZM13.7892 28.9513C14.3897 28.7832 14.7133 28.0774 14.5069 27.4678L12.6893 21.9481C12.6216 21.7807 12.5721 21.7116 12.4633 21.5735L9.39936 18.0479L10.0375 11.044C10.0564 10.7998 10.341 10.7769 10.4504 10.9456L11.9339 13.2249C12.1592 13.5681 12.4829 13.8526 12.7981 14.0207L16.5107 16.0154C17.0896 16.3195 17.7877 16.1124 18.1121 15.553C18.3966 14.9825 18.2006 14.2655 17.6497 13.9614L13.9168 11.9674L11.4422 8.13692C10.7734 7.10469 9.76342 6.48604 8.40756 6.48604L5.9518 6.48604L5.01722 15.553C4.88959 16.7408 5.09672 17.4878 6.05014 18.4608L10.5292 22.9692L12.2869 28.2043C12.5421 28.9513 13.211 29.0985 13.7892 28.9513ZM3.2599 15.553L5.44056 15.553C6.49867 15.553 7.22885 14.9625 7.22885 14.1194L7.22885 6.69209C7.22885 5.83994 6.49867 5.24942 5.44056 5.24942L3.8681 5.24942C2.68138 5.24942 1.83539 6.11358 1.83539 7.31983L1.83539 14.1194C1.83539 14.9652 2.43226 15.553 3.2599 15.553ZM0.342124 28.6556C0.823375 29.1278 1.54037 29.1173 2.00209 28.6556L6.28519 24.3641C6.37377 24.2846 6.46166 24.2058 6.51117 24.0893L7.78275 21.5357L5.7015 19.4453L4.43832 22.9106L0.342124 27.0256C-0.109146 27.4873-0.118911 28.2043 0.342124 28.6556ZM17.2042 10.2378C17.0441 10.2378 16.916 10.3659 16.916 10.5261L16.916 12.4953L17.4834 12.8052L17.4834 10.5261C17.4834 10.3659 17.3553 10.2378 17.2042 10.2378ZM17.2042 29.0358C17.3553 29.0358 17.4834 28.9076 17.4834 28.7566L17.4834 17.037C17.3017 17.0809 17.1172 17.0983 16.916 17.0992L16.916 28.7566C16.916 28.9076 17.0441 29.0358 17.2042 29.0358Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}