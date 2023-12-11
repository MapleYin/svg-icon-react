import React from 'react'

export default function TramFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.5248 29.732' className={className}>
      <path
        d='M4.38232 25.5823L16.7818 25.5823C20.0315 25.5823 21.1635 23.5421 21.1635 21.2833L21.1635 13.4562C21.1635 9.13028 20.43 5.08429 19.8761 3.18858C19.4137 1.5835 18.1618 0.535058 16.5422 0.327929C15.0695 0.147852 12.9602 0 10.5866 0C8.20332 0 6.09394 0.147852 4.62129 0.327929C3.00166 0.535058 1.7498 1.5835 1.2874 3.18858C0.733494 5.08429 0 9.13028 0 13.4562L0 21.2833C0 23.5421 1.13193 25.5823 4.38232 25.5823ZM7.15235 3.83359C6.86729 3.83359 6.70283 3.64121 6.70283 3.36592C6.70283 3.10947 6.86729 2.908 7.15235 2.908L14.0118 2.908C14.2962 2.908 14.4606 3.10947 14.4606 3.36592C14.4606 3.64121 14.2962 3.83359 14.0118 3.83359ZM10.5866 17.9709C8.08086 17.9604 6.11396 17.8796 4.46181 17.759C3.57089 17.6802 3.01113 17.0906 3.01113 16.185L3.01113 12.9619C3.01113 10.911 3.22939 8.979 3.5455 7.26133C3.68154 6.49307 4.17002 5.98233 4.86425 5.91397C6.38222 5.7752 8.25947 5.67754 10.5866 5.67686C12.867 5.67617 14.7442 5.7752 16.0946 5.89512C16.8824 5.98233 17.454 6.49307 17.5816 7.26133C17.8971 8.979 18.1153 10.911 18.1153 12.9619L18.1153 16.185C18.1153 17.0913 17.5647 17.6718 16.6647 17.759C15.0762 17.8732 13.1177 17.9527 10.5866 17.9709ZM4.65391 22.6963C3.85127 22.6963 3.25713 22.1021 3.25713 21.2988C3.25713 20.4962 3.85127 19.893 4.65391 19.893C5.45723 19.893 6.07862 20.4962 6.07862 21.2988C6.07862 22.1021 5.46494 22.6963 4.65391 22.6963ZM16.5459 22.697C15.7433 22.697 15.1296 22.1015 15.1296 21.2988C15.1296 20.4878 15.7433 19.8923 16.5459 19.8923C17.3479 19.8923 17.9434 20.4878 17.9434 21.2988C17.9434 22.1015 17.329 22.697 16.5459 22.697ZM2.08867 29.7192L2.53408 29.7192C2.74736 29.7192 2.83233 29.6669 2.93545 29.5024L5.68136 25.1026L4.42998 25.1026L1.86377 29.2246C1.69726 29.4754 1.79746 29.7192 2.08867 29.7192ZM3.46875 28.3585L17.6779 28.3585L17.6779 27.3111L3.46875 27.3111ZM18.6049 29.7192L19.0503 29.7192C19.3506 29.7192 19.4481 29.4747 19.2829 29.2246L16.709 25.1026L15.4576 25.1026L18.2035 29.5024C18.306 29.6669 18.3909 29.7192 18.6049 29.7192Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
