import React from 'react'

export default function CarseatRightFanFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.8435 24.7004' className={className}>
      <path
        d='M25.3504 20.0752C26.0636 17.0516 23.927 15.7979 18.4962 15.7979C15.2338 15.7979 12.1028 16.0649 9.40389 16.5755L9.57723 16.7947C10.0869 11.308 8.15585 6.04425 4.9828 4.36563L5.06825 4.74786C5.57626 1.4628 3.83348 0 2.09393 0C0.756619 0-0.382641 0.955081 0.122048 3.03038L4.79412 22.1856C5.17976 23.7484 6.32849 24.6906 7.86199 24.6906L20.9669 24.6906C23.0854 24.6906 24.5046 23.6243 25.3504 20.0752Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.1717 8.41455C13.1717 10.1597 14.6677 11.8496 16.3684 11.8496C17.6475 11.8496 18.4351 10.8553 18.7791 8.64414L19.35 8.61348L19.35 11.1659C19.35 12.0732 19.7865 12.5279 20.6555 12.5279C22.3992 12.5279 24.0898 11.0326 24.0898 9.33115C24.0898 8.04228 23.1046 7.2833 20.8746 6.92959L20.8439 6.34052L23.4145 6.34052C24.3316 6.34052 24.7584 5.8956 24.7584 5.02666C24.7584 3.28154 23.2812 1.5916 21.5798 1.5916C20.2916 1.5916 19.5138 2.57753 19.1698 4.8082L18.608 4.8375L18.608 2.27529C18.608 1.36865 18.1631 0.913277 17.2941 0.913277C15.5308 0.913277 13.8402 2.40927 13.8402 4.11005C13.8402 5.39892 14.845 6.15791 17.0568 6.51162L17.068 7.10068L14.5337 7.10068C13.618 7.10068 13.1717 7.53721 13.1717 8.41455ZM17.6962 6.7164C17.6962 5.99443 18.2437 5.42871 18.9462 5.42871C19.6765 5.42871 20.2527 5.99443 20.2527 6.7164C20.2527 7.44677 19.6765 8.0125 18.9462 8.0125C18.2535 8.0125 17.6962 7.44677 17.6962 6.7164Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}