import React from 'react'

export default function PurchasedCircle({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.8319C5.73516 23.8319 0.500206 18.5963 0.500206 12.1706C0.500206 5.73516 5.73448 0.500206 12.1602 0.500206C18.5956 0.500206 23.8312 5.73516 23.8312 12.1706C23.8312 18.5963 18.5872 23.8319 12.1608 23.8319Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.121 15.6018C7.121 15.6951 7.16348 15.7633 7.21846 15.8183L9.78838 18.3875C9.85088 18.4486 9.95039 18.4841 10.0583 18.4841C10.1767 18.4841 10.2573 18.4493 10.3101 18.3875L12.917 15.8176C12.9908 15.7431 12.9956 15.6951 12.9956 15.6018C12.9956 15.4675 12.8857 15.338 12.7332 15.338C12.6728 15.338 12.5982 15.3707 12.5426 15.4445L11.7975 16.2085L10.3116 17.6837L10.343 15.0008L10.343 10.0582C10.343 7.75791 11.5557 6.3254 13.5301 6.3254C15.4425 6.3254 16.7172 7.68526 16.7165 9.7003C16.7158 11.5938 15.4893 12.8699 13.6382 12.8699C13.0562 12.8699 12.8804 12.6633 12.6369 12.6633C12.4949 12.6633 12.4038 12.7621 12.4038 12.9034C12.4038 12.9716 12.4268 13.0747 12.509 13.129C12.6896 13.281 13.1388 13.3988 13.6445 13.3988C15.7912 13.3988 17.237 11.914 17.237 9.7003C17.237 7.37354 15.7417 5.82168 13.5301 5.82168C11.248 5.82168 9.80088 7.47549 9.80088 10.0605L9.80088 15.0015L9.81406 17.6837L8.34708 16.2092L7.59288 15.4361C7.54561 15.3707 7.45157 15.338 7.39248 15.338C7.24981 15.338 7.121 15.4675 7.121 15.6018Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
