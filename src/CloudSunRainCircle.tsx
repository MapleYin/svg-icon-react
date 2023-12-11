import React from 'react'

export default function CloudSunRainCircle({
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
        d='M5.94678 16.268L13.0355 16.268C14.8081 16.268 16.2173 14.8958 16.2173 13.1986C16.2173 11.5224 14.8256 10.2542 12.986 10.1879C12.2193 8.771 10.9818 7.80538 9.26905 7.80538C7.22647 7.80538 5.53204 9.46504 5.30811 11.553C4.23165 11.8753 3.38321 12.7151 3.38321 13.9549C3.38321 15.1999 4.34229 16.268 5.94678 16.268ZM12.0732 7.04893C12.1959 7.16319 12.347 7.1709 12.4696 7.06641C12.5728 6.9626 12.5741 6.76612 12.4696 6.66231L11.0921 5.28477C10.9772 5.1712 10.81 5.19004 10.6964 5.27569C10.5919 5.37882 10.5919 5.56622 10.6964 5.67071ZM15.3055 5.86368C15.4901 5.86368 15.5869 5.72921 15.5869 5.60108L15.5869 3.64083C15.5869 3.49386 15.4901 3.37823 15.3055 3.37823C15.1592 3.37823 15.024 3.49386 15.024 3.64083L15.024 5.60108C15.024 5.72921 15.1592 5.86368 15.3055 5.86368ZM18.179 7.04825C18.2835 7.1709 18.4534 7.16319 18.5761 7.04893L19.9348 5.67071C20.0386 5.54806 20.0379 5.39766 19.9348 5.28477C19.8296 5.19004 19.6715 5.17051 19.5565 5.28477L18.179 6.66231C18.0557 6.74795 18.057 6.94376 18.179 7.04825ZM19.6269 10.1844L21.5669 10.1844C21.7334 10.1844 21.849 10.0688 21.849 9.92178C21.849 9.75596 21.7334 9.64102 21.5669 9.64102L19.6269 9.64102C19.4624 9.64102 19.3461 9.75596 19.3461 9.92178C19.3461 10.0688 19.4624 10.1844 19.6269 10.1844ZM19.5565 14.5511C19.6526 14.6465 19.8296 14.636 19.9348 14.5504C20.0379 14.4271 20.0574 14.276 19.9348 14.154L18.5761 12.7688C18.4709 12.6545 18.2842 12.6733 18.179 12.7688C18.057 12.8726 18.0557 13.0509 18.179 13.1742ZM18.43 9.92178C18.43 8.17012 17.0383 6.77979 15.3055 6.77979C14.0419 6.77979 12.987 7.5083 12.4701 8.52842C12.798 8.85567 13.0772 9.22061 13.3374 9.63438C15.1538 9.82266 16.5587 11.0488 16.7722 12.7501C17.7671 12.1558 18.43 11.1477 18.43 9.92178ZM6.17804 19.6254L7.18565 17.8977C7.27628 17.7373 7.21631 17.5561 7.06504 17.457C6.92422 17.3846 6.74229 17.4264 6.64327 17.586L5.63565 19.3138C5.54571 19.4734 5.60499 19.6561 5.76465 19.7544C5.89708 19.8262 6.08809 19.7851 6.17804 19.6254ZM7.73419 20.5764L8.55469 19.1656C8.64464 19.015 8.60421 18.8149 8.42501 18.7334C8.29258 18.6721 8.10225 18.7034 8.01163 18.8638L7.19952 20.2647C7.09981 20.416 7.16954 20.6063 7.32081 20.6963C7.46163 20.7778 7.64425 20.727 7.73419 20.5764ZM10.1763 19.6436L11.1839 17.9067C11.2745 17.7562 11.2146 17.5658 11.0633 17.4752C10.9218 17.4034 10.7398 17.4445 10.6408 17.6035L9.63389 19.3319C9.54395 19.4909 9.61163 19.6735 9.7629 19.7726C9.896 19.8436 10.0863 19.8025 10.1763 19.6436ZM11.7317 20.5861L12.5529 19.1838C12.6429 19.0339 12.6018 18.8324 12.4323 18.7522C12.2908 18.6902 12.1005 18.7223 12.0099 18.8729L11.1978 20.2836C11.0981 20.4342 11.1678 20.6252 11.3191 20.7151C11.4599 20.7869 11.6418 20.7451 11.7317 20.5861Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
