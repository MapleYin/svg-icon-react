import React from 'react'

export default function RJoystickPressDown({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.8832 27.945' className={className}>
      <path
        d='M17.9266 21.8729C17.9266 23.8443 16.1933 25.0123 13.2567 25.0123C10.3286 25.0123 8.59532 23.8443 8.59532 21.8729L8.59532 21.048C9.99727 21.3586 11.5597 21.5223 13.2567 21.5223C14.9568 21.5223 16.5221 21.358 17.9266 21.0462Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.2567 20.6092C20.9986 20.6092 25.6004 17.1145 25.6004 12.859C25.6004 8.59512 21.007 5.1088 13.2463 5.1088C5.51485 5.1088 0.912406 8.59512 0.912406 12.859C0.912406 17.1145 5.51485 20.6092 13.2567 20.6092ZM13.2567 20.1083C6.2422 20.1083 1.40197 17.0985 1.40197 12.859C1.40197 8.62013 6.2422 5.60129 13.2463 5.60129C20.279 5.60129 25.1206 8.62013 25.1206 12.859C25.1206 17.0985 20.2797 20.1083 13.2567 20.1083Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M11.1167 16.6074C10.9699 16.6074 10.86 16.5052 10.86 16.355L10.86 9.10754C10.86 8.92872 10.9511 8.81739 11.0985 8.81739L13.4437 8.81739C14.8132 8.81739 15.7798 9.759 15.7798 11.0729C15.7798 12.1904 15.1017 13.0407 14.0266 13.2742L15.6769 16.1138C15.7382 16.2155 15.7786 16.2712 15.7786 16.3757C15.7786 16.5093 15.6764 16.6088 15.5337 16.6088C15.4133 16.6088 15.3374 16.5363 15.2699 16.4055L13.4845 13.3172L11.393 13.3172L11.393 16.355C11.393 16.5052 11.2649 16.6074 11.1167 16.6074ZM11.393 12.7859L13.497 12.7859C14.5357 12.7859 15.2475 12.0873 15.2475 11.0742C15.2475 10.043 14.5441 9.35148 13.4983 9.35148L11.393 9.35148Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.7269 0.796391L12.7952 3.53067C13.0448 3.85138 13.4959 3.83321 13.7274 3.53067L15.7957 0.796391C16.064 0.463381 15.8925 0 15.4906 0L11.0313 0C10.623 0 10.4579 0.462014 10.7269 0.796391Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}