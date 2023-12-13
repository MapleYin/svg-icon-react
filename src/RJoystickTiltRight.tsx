import React from 'react'

export function RJoystickTiltRight({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.4748 25.1278' className={className}>
      <path
        d='M28.1663 9.3043C27.9957 9.35336 27.8372 9.43487 27.7016 9.54534C26.3805 4.33587 21.6719 0.511533 16.0567 0.511533C9.40106 0.511533 4.00994 5.88448 4.00994 12.559C4.00994 19.2049 9.38289 24.596 16.0567 24.596C21.6782 24.596 26.3807 20.7606 27.7012 15.5663C27.8368 15.6773 27.9951 15.7593 28.1655 15.8087C26.7454 21.1661 21.8609 25.1075 16.0567 25.1075C9.11746 25.1075 3.50749 19.4885 3.50749 12.559C3.50749 5.60088 9.1363 0 16.0567 0C21.8547 0 26.7461 3.93139 28.1663 9.3043Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M28.8926 10.246C28.577 10.0134 28.1311 10.1604 28.1311 10.5511L28.1311 14.5578C28.1311 14.9499 28.5686 15.0948 28.8919 14.8636L31.3584 13.003C31.6428 12.7709 31.6623 12.338 31.3584 12.1059Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M16.0567 22.0463C21.3012 22.0463 25.544 17.8021 25.544 12.559C25.544 7.30548 21.3012 3.071 16.0567 3.071C10.8046 3.071 6.56873 7.30548 6.56873 12.559C6.56873 17.8021 10.8046 22.0463 16.0567 22.0463ZM16.0567 21.5348C11.0875 21.5348 7.08026 17.5185 7.08026 12.559C7.08026 7.58976 11.0875 3.58254 16.0567 3.58254C21.026 3.58254 25.0325 7.58976 25.0325 12.559C25.0325 17.5185 21.026 21.5348 16.0567 21.5348ZM13.6434 17.3469C13.7991 17.3469 13.9034 17.2217 13.9034 17.094L13.9034 13.2341L16.6614 13.2341L18.9144 17.1556C18.9937 17.2905 19.0555 17.3469 19.1898 17.3469C19.3303 17.3469 19.4171 17.253 19.4171 17.1237C19.4171 17.0458 19.3941 16.9783 19.321 16.855L17.1661 13.1982C18.558 12.9417 19.4126 11.9213 19.4126 10.4946C19.4126 8.87394 18.2459 7.7336 16.5479 7.7336L13.6064 7.7336C13.471 7.7336 13.3596 7.84269 13.3596 7.99767L13.3596 17.094C13.3596 17.2301 13.508 17.3469 13.6434 17.3469ZM13.9034 12.7156L13.9034 8.2548L16.6187 8.2548C17.9729 8.2548 18.9079 9.14591 18.9079 10.4876C18.9079 11.8098 17.9743 12.7156 16.6258 12.7156Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
