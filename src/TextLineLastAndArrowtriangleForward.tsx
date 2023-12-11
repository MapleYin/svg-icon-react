import React from 'react'

export default function TextLineLastAndArrowtriangleForward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.1703 25.3893' className={className}>
      <path
        d='M7.77403 23.3683L30.2479 23.3683C30.7319 23.3683 31.0107 23.0812 31.0107 22.5971L31.0107 21.7057C31.0107 21.223 30.7319 20.9352 30.2479 20.9352L7.77403 20.9352C7.28995 20.9352 7.01124 21.223 7.01124 21.7057L7.01124 22.5971C7.01124 23.0812 7.28995 23.3683 7.77403 23.3683ZM0.63555 25.3165L5.17315 22.5647C5.49092 22.3696 5.47207 21.9541 5.17315 21.7779L0.617386 18.9876C0.353419 18.8282 0 18.92 0 19.3172L0 24.9876C0 25.3765 0.371583 25.476 0.63555 25.3165Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M7.26778 2.52504L30.7534 2.52504C30.9127 2.52504 31.0107 2.42709 31.0107 2.26781C31.0107 2.10853 30.9127 2.00218 30.7534 2.00218L7.26778 2.00218C7.1085 2.00218 7.01124 2.10853 7.01124 2.26781C7.01124 2.42709 7.1085 2.52504 7.26778 2.52504ZM7.26778 9.16517L30.7534 9.16517C30.9127 9.16517 31.0107 9.0679 31.0107 8.90862C31.0107 8.74935 30.9127 8.64231 30.7534 8.64231L7.26778 8.64231C7.1085 8.64231 7.01124 8.74935 7.01124 8.90862C7.01124 9.0679 7.1085 9.16517 7.26778 9.16517ZM7.26778 15.806L30.7534 15.806C30.9127 15.806 31.0107 15.708 31.0107 15.5488C31.0107 15.3895 30.9127 15.2922 30.7534 15.2922L7.26778 15.2922C7.1085 15.2922 7.01124 15.3895 7.01124 15.5488C7.01124 15.708 7.1085 15.806 7.26778 15.806Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
