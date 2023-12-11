import React from 'react'

export default function ExternaldriveConnectedToLineBelow({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.3967 24.1385' className={className}>
      <path
        d='M0 12.4867C0 14.5622 1.69707 16.2804 3.76398 16.2804L19.2714 16.2804C21.3292 16.2804 23.0354 14.5622 23.0354 12.4867C23.0354 11.8117 22.8282 11.196 22.5723 10.6675L18.4236 1.82501C17.8567 0.625979 16.8759 0 15.5774 0L7.44825 0C6.15039 0 5.17803 0.625979 4.61045 1.82501L0.444239 10.6675C0.141504 11.3175 0 11.8955 0 12.4867ZM1.7049 9.27666L5.12696 2.04014C5.62022 1.02452 6.36016 0.51534 7.31612 0.51534L15.7472 0.51534C16.7031 0.51534 17.4619 1.02452 17.9363 2.04014L21.3396 9.27666C20.7039 8.88994 19.9929 8.6833 19.2902 8.6833L3.78214 8.6833C3.05157 8.6833 2.34962 8.88994 1.7049 9.27666ZM0.529013 12.4867C0.529013 10.6955 2.0002 9.21163 3.76398 9.21163L19.2714 9.21163C21.0352 9.21163 22.4973 10.6955 22.4973 12.4867C22.4973 14.275 21.0336 15.7423 19.2714 15.7423L3.76398 15.7423C1.98136 15.7423 0.529013 14.2863 0.529013 12.4867ZM17.9875 12.4867C17.9875 13.1506 18.5049 13.6673 19.2155 13.7043C19.8417 13.7218 20.4143 13.1499 20.4143 12.4867C20.4143 11.8424 19.8501 11.2782 19.2155 11.2782C18.5524 11.2782 17.9875 11.8424 17.9875 12.4867ZM11.2817 22.0863L11.7933 22.0863L11.7933 16.0606L11.2817 16.0606ZM2.05772 22.1899L21.0166 22.1899C21.1584 22.1899 21.2766 22.071 21.2766 21.9292C21.2766 21.7874 21.1584 21.6777 21.0166 21.6777L2.05772 21.6777C1.91592 21.6777 1.79775 21.7874 1.79775 21.9292C1.79775 22.071 1.91592 22.1899 2.05772 22.1899ZM11.5326 24.1325C12.683 24.1325 13.6522 23.1634 13.6522 22.013C13.6522 20.8626 12.683 19.9032 11.5326 19.9032C10.3822 19.9032 9.42217 20.8626 9.42217 22.013C9.42217 23.1634 10.3822 24.1325 11.5326 24.1325Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}