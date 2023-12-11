import React from 'react'

export default function ApplescriptFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9862 29.1272' className={className}>
      <path
        d='M18.4198 19.7796C20.1752 18.034 20.0106 16.0647 17.9817 14.0449L13.1222 9.15743L7.34668 14.9252C6.27637 15.9767 4.64922 15.2093 4.9002 13.7357C4.91885 13.5512 4.92999 13.1621 4.92999 13.0203C4.92999 11.7343 4.06211 10.6433 2.53438 10.6244C1.09805 10.6063 0 11.5972 0 12.9573C0 14.3955 1.1622 15.5628 2.03017 16.4126L8.34825 22.7118C10.0273 24.3728 10.5098 25.0902 10.5098 26.4168C10.5098 27.0715 10.3876 27.5502 10.1203 28.1141C10.4746 27.7541 10.8073 27.4221 11.1666 27.0628ZM6.81728 29.1258C8.46152 29.1258 9.70107 27.9428 9.69199 26.3921C9.67314 25.2884 9.21689 24.8598 7.74238 23.393L6.78476 22.4354C4.7082 23.9335 3.91279 24.9489 3.91279 26.4034C3.91279 27.8981 5.21865 29.1258 6.81728 29.1258ZM2.53438 9.73467C4.63428 9.73467 5.85782 11.2223 5.85782 13.115C5.85782 13.3021 5.85782 13.8335 5.77403 14.1602C5.68116 14.6458 6.16808 14.842 6.39972 14.5922L14.6885 6.32158C15.4034 5.57871 15.8136 4.66074 15.8317 3.75684C15.8604 1.68965 14.2933 0 12.2039 0C11.0045 0 10.1769 0.481056 9.06924 1.58867L0.110452 10.5656C0.852639 10.0619 1.6918 9.73467 2.53438 9.73467Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}