import React from 'react'

export default function N24SquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM14.6947 6.26456L11.4221 12.6564C11.3364 12.8416 11.2946 12.9802 11.2946 13.1417C11.2946 13.3986 11.4673 13.5797 11.7703 13.5797L15.1777 13.5797L15.1777 15.8542C15.1777 16.0412 15.2882 16.1932 15.4958 16.1932C15.6621 16.1932 15.7957 16.0099 15.7957 15.8542L15.7957 13.5797L16.6877 13.5797C16.8729 13.5797 16.9878 13.4781 16.9878 13.2873C16.9878 13.116 16.8365 13.0054 16.6877 13.0054L15.7957 13.0054L15.7957 6.2714C15.7957 5.85137 15.5227 5.7584 15.3177 5.7584C15.0066 5.7584 14.8535 5.95967 14.6947 6.26456ZM5.29238 8.43076C5.29238 8.54122 5.37304 8.71749 5.58545 8.71749C5.73994 8.71749 5.85557 8.61436 5.85469 8.4794C6.01504 7.22335 6.54053 6.32657 7.63262 6.32657C8.86504 6.32657 9.36875 7.52627 9.36875 8.55391C9.36875 9.47032 9.08749 10.2582 8.25722 11.4409L5.36582 15.4818C5.2872 15.61 5.27353 15.7024 5.27353 15.7997C5.27353 15.9898 5.42754 16.0823 5.59092 16.0823L9.89102 16.0823C10.0553 16.0823 10.182 15.9542 10.182 15.7899C10.182 15.6236 10.0546 15.4885 9.89102 15.4885L6.14229 15.4885L6.14229 15.4453L8.69961 11.8005C9.61153 10.4741 9.93995 9.56319 9.93995 8.52188C9.93995 7.00362 9.17178 5.73408 7.61514 5.73408C6.19385 5.73408 5.29238 7.08311 5.29238 8.43076ZM15.1798 12.9983L11.9121 12.9983L11.9121 12.9754L15.131 6.60704L15.1798 6.60704Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
