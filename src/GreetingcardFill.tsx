import React from 'react'

export default function GreetingcardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.8625 26.9629' className={className}>
      <path
        d='M1.8667 24.4287L15.7752 26.8694C18.007 27.2719 19.5012 26.0975 19.5012 23.7793L19.5012 8.02179C19.5012 6.23273 18.5271 5.22394 16.4069 4.83966L2.68721 2.4212C0.998634 2.11779 0 2.81915 0 4.32199L0 22.2C0 23.486 0.579396 24.2014 1.8667 24.4287ZM2.50606 8.66965L2.50606 6.54699C2.50606 5.43556 3.29453 5.03449 4.4541 5.22844L6.33018 5.54982C6.75294 5.62434 6.61144 6.17688 6.27403 6.11985L4.25421 5.76262C3.45851 5.63001 3.05157 5.89592 3.05157 6.59739L3.05157 8.66399C3.05157 9.07971 2.50606 9.06155 2.50606 8.66965ZM16.4532 11.1346L16.4532 9.276C16.4532 8.32385 15.9037 7.81946 14.6915 7.6094L13.6103 7.41477C13.0844 7.31096 13.2656 6.77726 13.6162 6.84406L14.7229 7.03234C16.285 7.30441 17.0078 8.07472 17.0078 9.32062L17.0078 11.1346C17.0078 11.5326 16.4532 11.4713 16.4532 11.1346ZM3.05157 18.3452L3.05157 20.2045C3.05157 21.156 3.61017 21.6604 4.82237 21.8802L5.90362 22.0741C6.4295 22.1591 6.23917 22.6935 5.89766 22.6358L4.79092 22.4475C3.22891 22.1942 2.50606 21.4051 2.50606 20.1592L2.50606 18.3452C2.50606 17.9479 3.05157 18.0085 3.05157 18.3452ZM17.0078 20.8102L17.0078 22.9419C17.0078 24.0533 16.2103 24.4544 15.0507 24.2521L13.1837 23.93C12.7609 23.8555 12.9024 23.3127 13.2398 23.36L15.2597 23.7179C16.0554 23.8596 16.4532 23.5839 16.4532 22.8831L16.4532 20.8249C16.4532 20.4092 17.0078 20.4189 17.0078 20.8102ZM4.67843 1.871L16.5532 3.96036C17.2405 4.09141 17.8254 4.27335 18.3364 4.53614L18.3364 2.54621C18.3364 0.617686 17.0109-0.301262 14.7595 0.0878018Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}