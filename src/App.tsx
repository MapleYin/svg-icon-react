import React from 'react'

export default function App({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.9637 21.6121' className={className}>
      <path
        d='M20.3491 1.26367C19.4372 0.361522 18.2382 0 15.6567 0L5.77735 0C3.40118 0 2.16514 0.379686 1.27207 1.28184C0.369921 2.18399 0 3.38233 0 5.76827L0 15.6477C0 18.248 0.351073 19.4463 1.25322 20.3296C2.16514 21.2317 3.37325 21.6024 5.94561 21.6024L15.6567 21.6024C18.2382 21.6024 19.4561 21.2317 20.3491 20.3296C21.2513 19.4365 21.6024 18.248 21.6024 15.6477L21.6024 5.94493C21.6024 3.34532 21.2513 2.14698 20.3491 1.26367ZM21.0908 5.62129L21.0908 15.9713C21.0908 17.8875 20.7223 19.1332 19.9515 19.9319C19.1527 20.7397 17.8777 21.0908 15.9713 21.0908L5.63106 21.0908C3.72462 21.0908 2.44962 20.7209 1.65089 19.9319C0.861923 19.1332 0.511533 17.8875 0.511533 15.9713L0.511533 5.79864C0.511533 3.74278 0.861923 2.44122 1.64181 1.65157C2.43077 0.843759 3.76163 0.511533 5.79864 0.511533L15.9713 0.511533C17.8777 0.511533 19.1527 0.88077 19.9515 1.67042C20.7411 2.45938 21.0908 3.70577 21.0908 5.62129Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
