import React from 'react'

export default function CartBadgeQuestionmark({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38.8441 27.0885' className={className}>
      <path
        d='M18.3406 24.531C18.3406 25.5353 17.5435 26.3234 16.5392 26.3234C15.5439 26.3234 14.7461 25.5353 14.7461 24.531C14.7461 23.5267 15.5439 22.7386 16.5392 22.7386C17.5435 22.7386 18.3406 23.5267 18.3406 24.531ZM29.4377 24.531C29.4377 25.5353 28.6489 26.3234 27.6446 26.3234C26.6403 26.3234 25.8327 25.5353 25.8327 24.531C25.8327 23.5267 26.6403 22.7386 27.6446 22.7386C28.6489 22.7386 29.4377 23.5267 29.4377 24.531ZM10.6783 2.86544L11.1143 5.71016L25.2417 5.71016C25.2064 5.86866 25.1844 6.03131 25.1701 6.19601L11.1887 6.19601L12.6158 15.5086L29.6427 15.5086C30.5595 15.5086 31.0157 14.9735 31.1783 13.9353L31.2223 13.6518C31.3909 13.6745 31.5623 13.6875 31.737 13.6858L31.6962 13.9476C31.4877 15.2758 30.9644 15.9944 29.5517 15.9944L12.6903 15.9944L13.0518 18.3534C13.2234 19.391 13.7928 19.9079 14.7452 19.9079L29.9281 19.9079C30.0567 19.9079 30.1554 20.0045 30.1554 20.1463C30.1554 20.2874 30.0567 20.3938 29.9281 20.3938L14.5576 20.3938C13.3398 20.3938 12.7235 19.6946 12.5521 18.5242L10.2456 2.96408L5.18673 2.96408C5.04698 2.96408 4.96787 2.84728 4.96787 2.71661C4.96787 2.59503 5.04698 2.47823 5.18673 2.47823L10.1448 2.47823C10.5309 2.47823 10.6429 2.62569 10.6783 2.86544Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M37.9543 6.85391C37.9543 10.1293 35.2544 12.809 31.9901 12.809C28.7329 12.809 26.0351 10.1216 26.0351 6.85391C26.0351 3.5876 28.7329 0.889751 31.9901 0.889751C35.2662 0.889751 37.9543 3.56876 37.9543 6.85391ZM31.138 9.79522C31.138 10.2213 31.4755 10.5679 31.9009 10.5679C32.2997 10.5679 32.6547 10.2213 32.6645 9.79522C32.6833 9.39776 32.3186 9.04141 31.9009 9.04141C31.4846 9.04141 31.138 9.37891 31.138 9.79522ZM29.7597 4.42725C29.7597 4.68868 29.913 4.842 30.1381 4.842C30.4247 4.842 30.5272 4.63487 30.6791 4.42774C30.9155 4.12569 31.4703 3.76075 32.1478 3.76075C32.9857 3.76075 33.5446 4.16817 33.5446 4.80587C33.5446 5.53848 32.9976 5.86641 32.3237 6.33448C31.6567 6.80821 31.4296 7.16251 31.4296 7.71397C31.4296 7.75098 31.4296 7.77052 31.4296 7.79913C31.4296 8.08145 31.6186 8.25226 31.9009 8.25226C32.1664 8.25226 32.3442 8.07374 32.3561 7.83048C32.4049 7.29542 32.5945 7.0338 33.2874 6.51397C34.0101 5.97755 34.4214 5.63097 34.4214 4.77384C34.4214 3.82061 33.5713 2.89561 32.138 2.89561C30.8001 2.89561 29.7597 3.76426 29.7597 4.42725Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
