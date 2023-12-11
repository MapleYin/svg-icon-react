import React from 'react'

export default function Leaf({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.698 22.5709' className={className}>
      <path
        d='M0 5.02081C0 14.0564 5.34912 19.9063 13.6068 19.9063C19.2928 19.9063 23.2475 16.294 23.2475 11.1634C23.2475 6.24756 19.2537 2.71348 13.655 2.71348C11.6873 2.71348 9.61631 3.29941 7.2292 3.29941C4.90801 3.29941 3.10889 2.50186 1.69493 0.891896C1.23838 0.374023 0.529884 0.424412 0.371777 1.12451C0.078125 2.28028 0 4.34629 0 5.02081ZM0.52286 5.02081C0.52286 3.48116 0.642977 2.40538 0.806258 1.44591C0.880964 1.05988 1.06173 1.07667 1.31651 1.34962C3.04541 3.21905 5.37256 3.82227 7.2292 3.82227C8.52168 3.82227 9.72559 3.63741 10.8382 3.50001C11.8343 3.35352 12.769 3.23634 13.655 3.23634C18.9358 3.23634 22.7246 6.52979 22.7246 11.1634C22.7246 16.0118 18.9651 19.3834 13.6068 19.3834C5.63135 19.3834 0.52286 13.7573 0.52286 5.02081ZM7.05039 7.89532C7.67588 9.58243 9.19337 10.707 13.8103 11.8809C16.9458 12.6849 18.8528 13.8194 20.8936 16.7689C21.7474 18.0184 22.1716 19.2233 22.9808 21.8246C23.1482 22.3833 23.5395 22.5709 23.9335 22.5709C24.7781 22.5709 25.3366 21.8491 25.3366 20.8224C25.3366 18.9276 23.2257 15.9659 22.0261 14.8772C19.9127 12.907 17.2882 11.7563 13.9576 10.9861C10.3491 10.1611 8.64483 9.44463 7.31895 7.78897C7.18604 7.61152 6.97588 7.68789 7.05039 7.89532Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
