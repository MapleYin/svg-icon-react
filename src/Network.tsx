import React from 'react'

export default function Network({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M1.11075 7.19688C4.86992 9.87256 9.50332 11.4179 14.4842 11.3529C17.8341 11.2971 20.9894 10.4996 23.8032 9.14746L23.6616 8.59746C20.8796 9.93574 17.7652 10.7221 14.466 10.7961C9.57012 10.8987 5.02237 9.34228 1.32501 6.69316ZM0.379103 13.5742C6.88643 18.9401 15.8382 19.9571 23.2585 16.5273L23.4038 15.8296C15.9302 19.4609 6.80313 18.4523 0.317876 12.7864ZM6.06758 22.1441L6.77843 22.5089C6.55528 21.8591 6.37286 21.2122 6.18643 20.5242C4.43527 12.846 7.15783 5.20303 12.5429 0.254108L11.7982 0.190628C6.51583 5.26631 3.96222 12.9111 5.63936 20.6638C5.779 21.1565 5.93711 21.6751 6.06758 22.1441ZM14.4333 23.6609L15.021 23.5241C12.9252 20.2499 11.6913 16.3409 11.6913 12.1374C11.6913 7.91758 12.9352 3.98458 15.0822 0.700397L14.5833 0.430767C12.3979 3.80967 11.1345 7.81788 11.1345 12.1374C11.1345 16.3721 12.3425 20.329 14.4333 23.6609ZM22.0766 18.7898L22.3184 18.2995C18.3378 16.062 15.5537 11.8945 15.2465 6.93428C15.125 4.91807 15.4466 2.94932 16.1456 1.17178L15.6201 0.982327C14.9093 2.82324 14.5689 4.86377 14.6897 6.99014C14.9787 12.1119 17.9127 16.4702 22.0766 18.7898ZM6.41553 11.3441C7.2418 11.3441 7.93634 10.6579 7.93634 9.8128C7.93634 8.97813 7.2418 8.29199 6.41553 8.29199C5.57041 8.29199 4.8752 8.97813 4.8752 9.8128C4.8752 10.6579 5.57041 11.3441 6.41553 11.3441ZM16.0095 12.6013C16.7513 12.6013 17.3809 11.9808 17.3809 11.2194C17.3809 10.477 16.7513 9.85644 16.0095 9.85644C15.2481 9.85644 14.627 10.477 14.627 11.2194C14.627 11.9808 15.2481 12.6013 16.0095 12.6013ZM12.673 19.7852C13.5174 19.7852 14.1756 19.1276 14.1756 18.2825C14.1756 17.4374 13.5174 16.7799 12.673 16.7799C11.8188 16.7799 11.1703 17.4374 11.1703 18.2825C11.1703 19.1276 11.8188 19.7852 12.673 19.7852ZM12.1608 24.3315C18.8604 24.3315 24.3315 18.8604 24.3315 12.1706C24.3315 5.4711 18.8597 0 12.1602 0C5.47041 0 0 5.4711 0 12.1706C0 18.8604 5.4711 24.3315 12.1608 24.3315ZM12.1608 23.7916C5.74581 23.7916 0.539851 18.5856 0.539851 12.1706C0.539851 5.75489 5.75421 0.548933 12.1602 0.548933C18.5759 0.548933 23.7825 5.75489 23.7825 12.1706C23.7825 18.5856 18.5766 23.7916 12.1608 23.7916Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
