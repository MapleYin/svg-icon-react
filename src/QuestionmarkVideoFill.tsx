import React from 'react'

export default function QuestionmarkVideoFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30.9801 20.2201' className={className}>
      <path
        d='M23.1282 4.10381L23.1282 16.0968C23.1282 18.7644 21.6886 20.2104 19.0022 20.2104L4.79512 20.2104C2.1087 20.2104 0.66905 18.7644 0.66905 16.0968L0.66905 4.10381C0.66905 1.446 2.09669 0 4.79512 0L18.9908 0C21.6772 0 23.1282 1.446 23.1282 4.10381ZM30.9801 3.64395L30.9801 16.5566C30.9801 17.4263 30.5108 17.9087 29.829 17.9087C29.3512 17.9087 28.9732 17.6834 28.5247 17.3305L24.0271 13.7798L24.0271 6.38379L28.5247 2.8708C28.9732 2.51787 29.3512 2.29258 29.829 2.29258C30.5108 2.29258 30.9801 2.775 30.9801 3.64395ZM11.036 14.5223C11.036 14.8825 11.3363 15.2178 11.7252 15.2178C12.105 15.2178 12.3962 14.8832 12.3962 14.5223C12.3962 14.1697 12.1057 13.8533 11.7252 13.8533C11.3356 13.8533 11.036 14.1697 11.036 14.5223ZM9.03271 7.23749C9.02021 7.35878 9.0084 7.48076 9.0084 7.62089C9.0084 7.78017 9.1252 7.87969 9.25811 7.87969C9.40674 7.87969 9.52325 7.78515 9.49903 7.62089C9.567 6.41553 10.447 5.40821 11.9092 5.40821C13.3885 5.40821 14.3123 6.19736 14.3123 7.27109C14.3123 8.06211 13.9519 8.60986 12.7979 9.40517C11.8107 10.084 11.4979 10.6629 11.4979 11.5387C11.4979 11.7076 11.4979 11.8577 11.4979 12.0357C11.4979 12.1816 11.6086 12.2916 11.7454 12.2916C11.8627 12.2916 11.9656 12.188 11.9656 12.023C11.9656 11.8729 11.9656 11.7319 11.9656 11.5637C11.9656 10.8165 12.2641 10.3784 13.2045 9.72188C14.4204 8.87774 14.7986 8.22139 14.7986 7.2293C14.7986 5.95712 13.6491 4.92968 11.9412 4.92968C10.2319 4.92968 9.15381 5.99707 9.03271 7.23749Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
