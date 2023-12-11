import React from 'react'

export default function QuestionmarkApp({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6121' className={className}>
      <path
        d='M20.3491 1.26367C19.4372 0.361522 18.2382 0 15.6567 0L5.77735 0C3.40118 0 2.16514 0.379686 1.27207 1.28184C0.369921 2.18399 0 3.38233 0 5.76827L0 15.6477C0 18.248 0.351073 19.4463 1.25322 20.3296C2.16514 21.2317 3.37325 21.6024 5.94561 21.6024L15.6567 21.6024C18.2382 21.6024 19.4561 21.2317 20.3491 20.3296C21.2513 19.4365 21.6024 18.248 21.6024 15.6477L21.6024 5.94493C21.6024 3.34532 21.2513 2.14698 20.3491 1.26367ZM21.0908 5.62129L21.0908 15.9713C21.0908 17.8875 20.7223 19.1332 19.9515 19.9319C19.1527 20.7397 17.8777 21.0908 15.9713 21.0908L5.63106 21.0908C3.72462 21.0908 2.44962 20.7209 1.65089 19.9319C0.861923 19.1332 0.511533 17.8875 0.511533 15.9713L0.511533 5.79864C0.511533 3.74278 0.861923 2.44122 1.64181 1.65157C2.43077 0.843759 3.76163 0.511533 5.79864 0.511533L15.9713 0.511533C17.8777 0.511533 19.1527 0.88077 19.9515 1.67042C20.7411 2.45938 21.0908 3.70577 21.0908 5.62129Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M10.6031 13.2794C10.7497 13.2794 10.8547 13.1556 10.8547 12.9795C10.8547 12.8022 10.8547 12.6514 10.8547 12.4831C10.8547 11.6508 11.1817 11.1652 12.2269 10.441C13.5761 9.52012 14.0031 8.77862 14.0031 7.68887C14.0031 6.2709 12.7183 5.13877 10.8282 5.13877C8.93682 5.13877 7.73174 6.32969 7.61065 7.68457C7.59815 7.81631 7.60518 7.92012 7.60518 8.09795C7.60518 8.28653 7.69473 8.40557 7.86602 8.40557C8.03799 8.40557 8.17315 8.30176 8.14913 8.11846L8.12511 7.98193C8.08615 6.8626 9.20138 5.66886 10.7962 5.66886C12.436 5.66886 13.4548 6.53477 13.4548 7.73135C13.4548 8.59981 13.0469 9.19434 11.7778 10.0762C10.6859 10.8395 10.325 11.4854 10.325 12.4399C10.325 12.6271 10.325 12.796 10.325 12.9922C10.325 13.1499 10.4468 13.2794 10.6031 13.2794ZM10.5829 16.5147C11.0115 16.5147 11.3327 16.1501 11.3327 15.7585C11.3327 15.3571 11.0122 15.0023 10.5829 15.0023C10.1634 15.0023 9.83311 15.3487 9.83311 15.7585C9.83311 16.1494 10.1641 16.5147 10.5829 16.5147Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
