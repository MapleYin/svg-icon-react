import React from 'react'

export default function N05SquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM4.61201 11.003C4.61201 13.1139 5.08877 16.272 7.33652 16.272C9.59336 16.272 10.0701 13.1139 10.0701 11.003C10.0701 8.89219 9.59336 5.73408 7.33652 5.73408C5.08877 5.73408 4.61201 8.89219 4.61201 11.003ZM12.7328 5.91465C12.3907 5.91465 12.2626 6.13409 12.2326 6.43917L11.9158 10.6476C11.897 10.8617 11.8781 11.1213 11.8781 11.2147C11.8781 11.4271 12.0126 11.5627 12.2221 11.5627C12.4535 11.5627 12.5392 11.3981 12.638 11.2029C12.9764 10.5428 13.5291 10.0745 14.2681 10.0745C15.5562 10.0745 16.1759 11.5677 16.1759 12.8558C16.1759 14.2442 15.5373 15.6788 14.2206 15.6788C13.213 15.6788 12.499 14.7925 12.3282 13.8037C12.283 13.5221 12.1744 13.4553 12.0345 13.4553C11.8514 13.4553 11.7323 13.5834 11.7323 13.7672C11.7323 13.8576 11.7825 14.0493 11.8075 14.1468C12.0821 15.367 12.9586 16.272 14.222 16.272C15.9306 16.272 16.805 14.5637 16.805 12.8349C16.805 11.1581 15.9917 9.48955 14.3763 9.48955C13.7067 9.48955 12.9114 9.80479 12.5151 10.7048L12.4845 10.7048L12.7999 6.52804L16.0682 6.52804C16.259 6.52804 16.376 6.39923 16.376 6.21612C16.376 6.04414 16.2401 5.91465 16.0682 5.91465ZM9.41806 11.003C9.41806 12.7246 9.14619 15.6774 7.33652 15.6774C5.53526 15.6774 5.26407 12.7246 5.26407 11.003C5.26407 9.28076 5.53526 6.31954 7.33652 6.31954C9.14619 6.31954 9.41806 9.28076 9.41806 11.003Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}