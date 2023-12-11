import React from 'react'

export default function PhoneFillBadgePlus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.8476 28.6192' className={className}>
      <path
        d='M8.74572 4.09982L11.2301 7.66887C11.5117 8.05295 11.6889 8.45812 11.6889 8.91711C11.6889 9.41926 11.449 9.99201 10.8917 10.6422L9.98488 11.6608C9.85724 11.7891 9.80842 11.9272 9.80842 12.0743C9.80842 12.1775 9.83976 12.3071 9.90812 12.4529C10.1982 13.1699 11.1843 14.5351 12.5446 15.9038C13.9225 17.2823 15.3344 18.2315 15.9955 18.5592C16.1413 18.6269 16.2808 18.668 16.4202 18.668C16.6051 18.668 16.762 18.601 16.8897 18.4734L17.8433 17.5749C18.4565 16.9904 19.0201 16.7596 19.5314 16.7596C19.9806 16.7596 20.3962 16.9367 20.7608 17.1911L24.5819 19.8613C25.2146 20.2903 25.4399 20.8133 25.4399 21.337C25.4399 22.1873 24.8083 23.0746 24.2364 23.6422C23.0478 24.8196 21.6492 25.4041 19.9548 25.4041C17.9151 25.4041 15.6745 24.5592 13.5322 23.2431C13.6427 22.7677 13.6987 22.2724 13.6987 21.7646C13.6987 18.0022 10.617 14.9107 6.84483 14.9107C6.31976 14.9107 5.80734 14.9718 5.31654 15.0932C3.9282 12.8879 3.038 10.5759 3.038 8.48732C3.038 6.91369 3.54787 5.46838 4.72247 4.29582C5.45558 3.55568 6.27794 3.14758 7.02492 3.14758C7.66242 3.14758 8.26925 3.43849 8.74572 4.09982Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.809 21.7646C12.809 25.0491 10.1091 27.7287 6.84483 27.7287C3.5876 27.7287 0.889751 25.0413 0.889751 21.7646C0.889751 18.5073 3.5876 15.8102 6.84483 15.8102C10.1209 15.8102 12.809 18.4885 12.809 21.7646ZM6.39532 18.3387L6.39532 21.3157L3.40079 21.3157C3.16251 21.3157 2.95128 21.4802 2.95128 21.7646C2.95128 22.0587 3.16251 22.2232 3.40079 22.2232L6.39532 22.2232L6.39532 25.2093C6.39532 25.4657 6.56046 25.6679 6.84483 25.6679C7.13897 25.6679 7.30343 25.4657 7.30343 25.2093L7.30343 22.2232L10.2798 22.2232C10.5272 22.2232 10.7293 22.0587 10.7293 21.7646C10.7293 21.4802 10.5272 21.3157 10.2798 21.3157L7.30343 21.3157L7.30343 18.3387C7.30343 18.1011 7.13897 17.8899 6.84483 17.8899C6.56046 17.8899 6.39532 18.1011 6.39532 18.3387Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
