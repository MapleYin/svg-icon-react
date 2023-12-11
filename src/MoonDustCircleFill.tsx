import React from 'react'

export default function MoonDustCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM7.11035 19.3742C7.11035 19.6057 7.31114 19.8155 7.54121 19.8155C7.77266 19.8155 7.97344 19.6057 7.97344 19.3742C7.97344 19.1441 7.77266 18.9434 7.54121 18.9434C7.31114 18.9434 7.11035 19.1441 7.11035 19.3742ZM10.2213 19.3742C10.2213 19.6057 10.4207 19.8155 10.6522 19.8155C10.8836 19.8155 11.0837 19.6057 11.0837 19.3742C11.0837 19.1441 10.8836 18.9434 10.6522 18.9434C10.4207 18.9434 10.2213 19.1441 10.2213 19.3742ZM13.3127 19.3742C13.3127 19.6057 13.5219 19.8155 13.7533 19.8155C13.9848 19.8155 14.1842 19.6057 14.1842 19.3742C14.1842 19.1441 13.9848 18.9434 13.7533 18.9434C13.5219 18.9434 13.3127 19.1441 13.3127 19.3742ZM16.395 19.3742C16.395 19.6057 16.5951 19.8155 16.8266 19.8155C17.0573 19.8155 17.2672 19.6057 17.2672 19.3742C17.2672 19.1441 17.0573 18.9434 16.8266 18.9434C16.5951 18.9434 16.395 19.1441 16.395 19.3742ZM5.52832 17.5158C5.52832 17.7473 5.7375 17.9474 5.96895 17.9474C6.20039 17.9474 6.39981 17.7473 6.39981 17.5158C6.39981 17.2844 6.20039 17.085 5.96895 17.085C5.7375 17.085 5.52832 17.2844 5.52832 17.5158ZM8.64766 17.5158C8.64766 17.7473 8.84776 17.9474 9.0792 17.9474C9.30997 17.9474 9.51075 17.7473 9.51075 17.5158C9.51075 17.2844 9.30997 17.085 9.0792 17.085C8.84776 17.085 8.64766 17.2844 8.64766 17.5158ZM11.7391 17.5158C11.7391 17.7473 11.9398 17.9474 12.1713 17.9474C12.4111 17.9474 12.6119 17.7473 12.6119 17.5158C12.6119 17.2844 12.4111 17.085 12.1713 17.085C11.9398 17.085 11.7391 17.2844 11.7391 17.5158ZM14.8402 17.5158C14.8402 17.7473 15.041 17.9474 15.2718 17.9474C15.5032 17.9474 15.7033 17.7473 15.7033 17.5158C15.7033 17.2844 15.5032 17.085 15.2718 17.085C15.041 17.085 14.8402 17.2844 14.8402 17.5158ZM17.9323 17.5158C17.9323 17.7473 18.1331 17.9474 18.3723 17.9474C18.6037 17.9474 18.8045 17.7473 18.8045 17.5158C18.8045 17.2844 18.6037 17.085 18.3723 17.085C18.1331 17.085 17.9323 17.2844 17.9323 17.5158ZM4.22198 15.2478C4.06114 15.2478 3.93936 15.357 3.93936 15.5095C3.93936 15.6801 4.06182 15.7803 4.22198 15.7803L20.099 15.7803C20.2689 15.7803 20.3823 15.6801 20.3823 15.5095C20.3823 15.3389 20.2696 15.2478 20.099 15.2478ZM9.76026 4.73047C7.86182 5.7749 6.57295 7.70674 6.57295 10.192C6.57295 11.9649 7.20381 13.5076 8.33222 14.5589L16.488 14.5589C17.0094 14.0983 17.4526 13.5079 17.7479 12.8407C17.8476 12.6944 17.828 12.5502 17.7535 12.4757C17.6817 12.3948 17.5486 12.3655 17.3771 12.445C16.7946 12.6508 16.1689 12.8036 15.2885 12.8036C11.8554 12.8036 9.8212 10.7449 9.8212 7.26983C9.8212 6.45088 9.96631 5.74024 10.2649 5.12549C10.3381 4.96309 10.3179 4.80977 10.2273 4.70733C10.1185 4.5958 9.93516 4.60283 9.76026 4.73047Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}