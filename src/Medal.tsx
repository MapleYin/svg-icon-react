import React from 'react'

export default function Medal({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.7009 25.086' className={className}>
      <path
        d='M3.9903 14.1911L4.49079 14.0106L0.541279 5.24737L3.12565 1.21164L7.84939 11.6447L8.28963 11.3672L3.4531 0.637802L15.8865 0.637802L11.0507 11.3672L11.4909 11.6447L16.2139 1.21164L18.8074 5.24737L14.8488 14.0106L15.3493 14.1911L19.3037 5.39738C19.3537 5.29103 19.353 5.14425 19.2926 5.04766L16.2057 0.219046C16.1543 0.151759 16.0995 0.114942 15.9884 0.114942L3.35192 0.114942C3.24079 0.114942 3.18532 0.151759 3.14303 0.219046L0.0477161 5.04766C-0.013418 5.14425-0.0141017 5.29103 0.0358994 5.39738ZM5.18621 5.08439L14.1548 5.08439L14.1548 4.56153L5.18621 4.56153ZM9.6698 25.086C13.5312 25.086 16.652 21.9742 16.652 18.1135C16.652 14.243 13.5312 11.1313 9.6698 11.1313C5.80905 11.1313 2.70641 14.243 2.70641 18.1135C2.70641 21.9742 5.80905 25.086 9.6698 25.086ZM9.6698 24.5631C6.0906 24.5631 3.22927 21.6843 3.22927 18.1135C3.22927 14.5336 6.099 11.6541 9.6698 11.6541C13.2497 11.6541 16.1292 14.5329 16.1292 18.1135C16.1292 21.6836 13.2504 24.5631 9.6698 24.5631ZM7.3615 22.0245L9.67048 20.3294L11.9976 22.0245C12.1626 22.1359 12.3652 22.0329 12.2907 21.8185L11.4111 19.0896L13.7312 17.4049C13.8285 17.3326 13.8217 17.0582 13.5954 17.0582L10.7395 17.0505L9.85359 14.3307C9.79793 14.1448 9.56121 14.1448 9.50554 14.3307L8.6196 17.0505L5.76374 17.0582C5.54655 17.0582 5.45593 17.3138 5.6279 17.4237L7.94802 19.0896L7.08659 21.8185C7.01277 22.0329 7.21472 22.1359 7.3615 22.0245Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
