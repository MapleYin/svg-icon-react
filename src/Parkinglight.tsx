import React from 'react'

export default function Parkinglight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.9831 15.877' className={className}>
      <path
        d='M17.0239 7.93361C17.0239 4.55851 13.4242 1.88301 9.88604 1.88301L9.76358 1.88301C7.9088 1.88301 7.35528 2.23487 6.89493 3.72159C6.56495 4.89962 6.38985 6.16827 6.38985 7.93361C6.38985 9.68917 6.56495 10.9585 6.89493 12.1463C7.35528 13.6226 7.9088 13.9842 9.76358 13.9842L9.88604 13.9842C13.4242 13.9842 17.0239 11.2989 17.0239 7.93361ZM16.5004 7.93361C16.5004 11.0297 13.2624 13.4607 9.88604 13.4607L9.76358 13.4607C8.20079 13.4607 7.80587 13.3269 7.38712 11.9918C7.07736 10.8563 6.91271 9.64464 6.91271 7.93361C6.91271 6.21281 7.07736 5.01027 7.38712 3.86632C7.80587 2.54035 8.20079 2.39748 9.76358 2.39748L9.88604 2.39748C13.2624 2.39748 16.5004 4.82775 16.5004 7.93361ZM18.5972 7.93361C18.5972 11.2989 22.1976 13.9842 25.7358 13.9842L25.8582 13.9842C27.7039 13.9842 28.2574 13.6226 28.7269 12.1463C29.0478 10.9585 29.232 9.68917 29.232 7.93361C29.232 6.16827 29.0478 4.89962 28.7269 3.72159C28.2574 2.23487 27.7039 1.88301 25.8582 1.88301L25.7358 1.88301C22.1976 1.88301 18.5972 4.55851 18.5972 7.93361ZM19.1207 7.93361C19.1207 4.82775 22.3503 2.39748 25.7358 2.39748L25.8582 2.39748C27.421 2.39748 27.8159 2.54035 28.2347 3.86632C28.5438 5.01027 28.7091 6.21281 28.7091 7.93361C28.7091 9.64464 28.5438 10.8563 28.2347 11.9918C27.8159 13.3269 27.421 13.4607 25.8582 13.4607L25.7358 13.4607C22.3503 13.4607 19.1207 11.0297 19.1207 7.93361ZM3.89473 2.28937C4.03174 2.36935 4.19239 2.30666 4.25352 2.19552C4.33351 2.06896 4.28829 1.90763 4.16104 1.82696L1.02491 0.0294022C0.906742-0.0317319 0.737697 0.00508529 0.675879 0.115537C0.595897 0.251867 0.650195 0.429994 0.759963 0.491812ZM3.87891 7.66729L0.265629 7.66729C0.12383 7.66729 0 7.79112 0 7.93292C0 8.07404 0.12383 8.18947 0.265629 8.18947L3.87891 8.18947C4.02071 8.18947 4.14522 8.07404 4.14522 7.93292C4.14522 7.79112 4.02071 7.66729 3.87891 7.66729ZM3.89473 13.5765L0.759963 15.3747C0.650195 15.4359 0.595897 15.6147 0.675879 15.7419C0.737697 15.8614 0.906742 15.8983 1.02491 15.8364L4.16104 14.0298C4.28829 13.9498 4.33351 13.7976 4.25352 13.6612C4.19239 13.5508 4.03174 13.4965 3.89473 13.5765ZM31.718 2.28937L34.8528 0.491812C34.9716 0.429994 35.0259 0.251867 34.9452 0.115537C34.8841 0.00508529 34.7053-0.0317319 34.5962 0.0294022L31.4608 1.82696C31.3237 1.90763 31.2876 2.06896 31.3676 2.19552C31.4294 2.30666 31.5901 2.36935 31.718 2.28937ZM31.7338 7.66729C31.592 7.66729 31.4766 7.79112 31.4766 7.93292C31.4766 8.07404 31.592 8.18947 31.7338 8.18947L35.3562 8.18947C35.498 8.18947 35.6218 8.07404 35.6218 7.93292C35.6218 7.79112 35.498 7.66729 35.3562 7.66729ZM31.718 13.5765C31.5901 13.4965 31.4294 13.5508 31.3676 13.6612C31.2876 13.7976 31.3237 13.9498 31.4608 14.0298L34.5962 15.8364C34.7053 15.8983 34.8841 15.8614 34.9452 15.7419C35.0259 15.6147 34.9716 15.4359 34.8528 15.3747Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
