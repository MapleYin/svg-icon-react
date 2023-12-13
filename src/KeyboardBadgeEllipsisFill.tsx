import React from 'react'

export function KeyboardBadgeEllipsisFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.4369 25.534' className={className}>
      <path
        d='M34.7382 6.55099L34.7382 12.1803C34.0614 11.949 33.3359 11.8262 32.5829 11.8262C31.843 11.8262 31.1284 11.9467 30.4598 12.1729C30.438 11.8748 30.2623 11.7265 29.9503 11.7265L29.0816 11.7265C28.7475 11.7265 28.569 11.8966 28.569 12.2384L28.569 13.1085C28.569 13.1231 28.5693 13.1374 28.5704 13.1511C27.5943 13.8555 26.8124 14.8136 26.3214 15.9242C26.2394 15.8217 26.1071 15.7686 25.9286 15.7686L12.9039 15.7686C12.5748 15.7686 12.4027 15.94 12.4027 16.2608L12.4027 17.1606C12.4027 17.4897 12.5748 17.6618 12.9039 17.6618L25.8148 17.6618C25.7554 17.9927 25.729 18.3336 25.729 18.6801C25.729 19.9299 26.072 21.1056 26.673 22.1148L7.50881 22.1148C5.43361 22.1148 4.32755 21.0087 4.32755 18.9265L4.32755 6.55099C4.32755 4.47784 5.43361 3.3627 7.50881 3.3627L31.557 3.3627C33.6315 3.3627 34.7382 4.51485 34.7382 6.55099ZM8.87316 15.7686C8.53908 15.7686 8.37033 15.938 8.37033 16.2805L8.37033 17.1499C8.37033 17.4833 8.53908 17.6618 8.87316 17.6618L9.75099 17.6618C10.0851 17.6618 10.2545 17.4833 10.2545 17.1499L10.2545 16.2805C10.2545 15.938 10.0851 15.7686 9.75099 15.7686ZM8.87316 11.7265C8.53908 11.7265 8.37033 11.8966 8.37033 12.2384L8.37033 13.1085C8.37033 13.4412 8.53908 13.6204 8.87316 13.6204L9.75099 13.6204C10.0851 13.6204 10.2545 13.4412 10.2545 13.1085L10.2545 12.2384C10.2545 11.8966 10.0851 11.7265 9.75099 11.7265ZM12.9146 11.7265C12.5805 11.7265 12.4027 11.8966 12.4027 12.2384L12.4027 13.1085C12.4027 13.4412 12.5805 13.6204 12.9146 13.6204L13.7931 13.6204C14.1265 13.6204 14.2959 13.4412 14.2959 13.1085L14.2959 12.2384C14.2959 11.8966 14.1265 11.7265 13.7931 11.7265ZM16.956 11.7265C16.6233 11.7265 16.4447 11.8966 16.4447 12.2384L16.4447 13.1085C16.4447 13.4412 16.6233 13.6204 16.956 13.6204L17.8345 13.6204C18.1679 13.6204 18.338 13.4412 18.338 13.1085L18.338 12.2384C18.338 11.8966 18.1679 11.7265 17.8345 11.7265ZM20.9981 11.7265C20.6647 11.7265 20.4862 11.8966 20.4862 12.2384L20.4862 13.1085C20.4862 13.4412 20.6647 13.6204 20.9981 13.6204L21.8675 13.6204C22.21 13.6204 22.3794 13.4412 22.3794 13.1085L22.3794 12.2384C22.3794 11.8966 22.21 11.7265 21.8675 11.7265ZM25.0402 11.7265C24.7061 11.7265 24.5276 11.8966 24.5276 12.2384L24.5276 13.1085C24.5276 13.4412 24.7061 13.6204 25.0402 13.6204L25.9089 13.6204C26.243 13.6204 26.4208 13.4412 26.4208 13.1085L26.4208 12.2384C26.4208 11.8966 26.243 11.7265 25.9089 11.7265ZM8.87316 7.68506C8.53908 7.68506 8.37033 7.8545 8.37033 8.19698L8.37033 9.06641C8.37033 9.39981 8.53908 9.57833 8.87316 9.57833L9.75099 9.57833C10.0851 9.57833 10.2545 9.39981 10.2545 9.06641L10.2545 8.19698C10.2545 7.8545 10.0851 7.68506 9.75099 7.68506ZM12.9146 7.68506C12.5805 7.68506 12.4027 7.8545 12.4027 8.19698L12.4027 9.06641C12.4027 9.39981 12.5805 9.57833 12.9146 9.57833L13.7931 9.57833C14.1265 9.57833 14.2959 9.39981 14.2959 9.06641L14.2959 8.19698C14.2959 7.8545 14.1265 7.68506 13.7931 7.68506ZM16.956 7.68506C16.6233 7.68506 16.4447 7.8545 16.4447 8.19698L16.4447 9.06641C16.4447 9.39981 16.6233 9.57833 16.956 9.57833L17.8345 9.57833C18.1679 9.57833 18.338 9.39981 18.338 9.06641L18.338 8.19698C18.338 7.8545 18.1679 7.68506 17.8345 7.68506ZM20.9981 7.68506C20.6647 7.68506 20.4862 7.8545 20.4862 8.19698L20.4862 9.06641C20.4862 9.39981 20.6647 9.57833 20.9981 9.57833L21.8675 9.57833C22.21 9.57833 22.3794 9.39981 22.3794 9.06641L22.3794 8.19698C22.3794 7.8545 22.21 7.68506 21.8675 7.68506ZM25.0402 7.68506C24.7061 7.68506 24.5276 7.8545 24.5276 8.19698L24.5276 9.06641C24.5276 9.39981 24.7061 9.57833 25.0402 9.57833L25.9089 9.57833C26.243 9.57833 26.4208 9.39981 26.4208 9.06641L26.4208 8.19698C26.4208 7.8545 26.243 7.68506 25.9089 7.68506ZM29.0816 7.68506C28.7475 7.68506 28.569 7.8545 28.569 8.19698L28.569 9.06641C28.569 9.39981 28.7475 9.57833 29.0816 9.57833L29.9503 9.57833C30.2844 9.57833 30.4622 9.39981 30.4622 9.06641L30.4622 8.19698C30.4622 7.8545 30.2844 7.68506 29.9503 7.68506Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M38.5471 18.6801C38.5471 21.9555 35.8472 24.6345 32.5829 24.6345C29.3257 24.6345 26.6195 21.9568 26.6195 18.6801C26.6195 15.4229 29.3257 12.7159 32.5829 12.7159C35.859 12.7159 38.5471 15.404 38.5471 18.6801ZM28.699 18.6612C28.699 19.088 29.0379 19.4269 29.4451 19.4269C29.8537 19.4269 30.2017 19.088 30.2199 18.6612C30.2296 18.2722 29.8726 17.9054 29.4451 17.9054C29.0379 17.9054 28.699 18.2533 28.699 18.6612ZM31.8641 18.6612C31.8641 19.088 32.2127 19.4269 32.62 19.4269C33.0279 19.4269 33.3674 19.088 33.3856 18.6612C33.4044 18.2722 33.0467 17.9054 32.62 17.9054C32.2127 17.9054 31.8641 18.2533 31.8641 18.6612ZM34.9551 18.6612C34.9551 19.088 35.2933 19.4269 35.7019 19.4269C36.1098 19.4269 36.4577 19.088 36.4759 18.6612C36.4857 18.2722 36.1286 17.9054 35.7019 17.9054C35.2933 17.9054 34.9551 18.2533 34.9551 18.6612Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
