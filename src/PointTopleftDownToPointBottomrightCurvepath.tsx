import React from 'react'

export default function PointTopleftDownToPointBottomrightCurvepath({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.1849 25.2514' className={className}>
      <path
        d='M3.62267 7.64805C3.62267 9.40967 4.78975 10.6969 7.00675 11.3834L13.9711 13.5574C16.4349 14.3232 17.7124 15.7591 17.7124 17.7723L17.7124 18.5484C17.63 18.5389 17.5458 18.5357 17.4608 18.5357C17.3731 18.5357 17.2861 18.5391 17.2009 18.5489L17.2009 17.7723C17.2009 16.01 16.0345 14.7234 13.8259 14.0362L6.85245 11.8713C4.38799 11.1055 3.11113 9.66964 3.11113 7.64805L3.11113 6.87132C3.19334 6.88079 3.27731 6.88389 3.36202 6.88389C3.45 6.88389 3.5372 6.88051 3.62267 6.87078Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M17.4608 18.5357C15.6107 18.5357 14.1072 20.0393 14.1072 21.8991C14.1072 23.7485 15.6107 25.2514 17.4608 25.2514C19.32 25.2514 20.8235 23.7485 20.8235 21.8991C20.8235 20.0393 19.32 18.5357 17.4608 18.5357ZM17.4608 19.0536C19.056 19.0536 20.305 20.3033 20.305 21.8991C20.305 23.4845 19.0371 24.7335 17.4608 24.7335C15.8832 24.7335 14.6251 23.4845 14.6251 21.8991C14.6251 20.3033 15.865 19.0536 17.4608 19.0536ZM3.36202 6.88389C5.21212 6.88389 6.71563 5.38946 6.71563 3.5212C6.71563 1.67178 5.21212 0.177343 3.36202 0.177343C1.50352 0.177343 0 1.67178 0 3.5212C0 5.38946 1.50352 6.88389 3.36202 6.88389ZM3.36202 6.3751C1.76759 6.3751 0.51788 5.11631 0.51788 3.5212C0.51788 1.94424 1.78643 0.686141 3.36202 0.686141C4.94873 0.686141 6.19775 1.94424 6.19775 3.5212C6.19775 5.11631 4.9585 6.3751 3.36202 6.3751Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
