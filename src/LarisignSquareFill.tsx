import React from 'react'

export default function LarisignSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.3213 22.0158' className={className}>
      <path
        d='M21.96 3.24414L21.96 18.8282C21.96 20.8734 20.8532 22.0158 18.778 22.0158L3.18125 22.0158C1.10674 22.0158 0 20.9014 0 18.8282L0 3.24414C0 1.16192 1.10674 0.0565428 3.18125 0.0565428L18.778 0.0565428C20.8532 0.0565428 21.96 1.19893 21.96 3.24414ZM11.7704 4.82012L11.7704 6.35341C11.5213 6.30595 11.2715 6.28711 11.0126 6.28711C10.7978 6.28711 10.5913 6.29755 10.3849 6.33525L10.3849 4.82012C10.3849 4.62431 10.2497 4.50732 10.0909 4.50732C9.93213 4.50732 9.79697 4.62431 9.79697 4.82012L9.79697 6.45156C8.13242 6.96328 6.96552 8.55537 6.96552 11.0231C6.96552 13.2776 8.24023 15.0346 9.8872 15.8211L7.28242 15.8211C7.09228 15.8211 6.98164 15.9492 6.98164 16.1017C6.98164 16.2562 7.1 16.3836 7.28174 16.3836L14.5275 16.3836C14.719 16.3836 14.8283 16.2555 14.8283 16.1017C14.8283 15.9492 14.7184 15.8211 14.5275 15.8211L12.2686 15.8211C9.65518 15.8211 7.51241 13.7837 7.51241 10.9698C7.51241 8.925 8.42031 7.52833 9.79697 7.00254L9.79697 10.6532C9.79697 10.849 9.93213 10.9653 10.0909 10.9653C10.2686 10.9653 10.3849 10.849 10.3849 10.6532L10.3849 6.85781C10.5913 6.81944 10.7978 6.80899 11.0119 6.80899C11.2722 6.80899 11.522 6.8376 11.7704 6.89414L11.7704 10.6532C11.7704 10.849 11.9049 10.9653 12.0637 10.9653C12.2322 10.9653 12.3492 10.849 12.3492 10.6532L12.3492 7.05977C13.5996 7.59327 14.4803 8.88116 14.4726 10.6666C14.4732 10.8434 14.6021 10.947 14.7495 10.947C14.904 10.947 15.0244 10.8252 15.0244 10.6582C14.9783 8.4834 13.912 7.02959 12.3492 6.4997L12.3492 4.82012C12.3492 4.62431 12.2232 4.50732 12.0637 4.50732C11.9049 4.50732 11.7704 4.62431 11.7704 4.82012Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}