import React from 'react'

export default function HandThumbsdown({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.3105 24.4258' className={className}>
      <path
        d='M20.9492 8.91894C20.9492 5.43544 18.6616 2.74452 16.0836 2.74452L12.6405 2.74452C11.3889 2.12538 9.84152 1.74745 8.13448 1.74745L6.66642 1.74745C5.31827 1.74745 4.25831 1.80741 3.55469 1.99501C2.42676 2.31298 1.72197 3.00644 1.72197 3.99355C1.72197 4.38916 1.8169 4.71777 1.98721 5.0373C1.16621 5.4416 0.688379 6.15703 0.688379 6.99805C0.688379 7.56875 0.832129 8.08496 1.1001 8.42109C0.515527 8.71162 0.147168 9.45928 0.147168 10.2558C0.147168 10.8592 0.339746 11.4465 0.657226 11.7386C0.24209 12.0613 0 12.6709 0 13.3572C0 14.5569 0.937601 15.5141 2.11846 15.5141L5.92609 15.5141C6.79806 15.5141 7.31465 15.926 7.31465 16.557C7.31465 17.939 5.48458 20.6101 5.48458 22.6114C5.48458 23.6842 6.21436 24.4258 7.23761 24.4258C8.00578 24.4258 8.49367 24.0124 9.03605 22.9597C10.4464 20.2003 11.3019 19.2822 14.4034 15.1597L16.4965 15.1597C18.8869 15.1597 20.9492 12.4897 20.9492 8.91894ZM16.0418 8.85811C16.0418 11.2644 15.4922 12.8142 13.9808 14.8277C12.3565 17.0114 10.168 19.5451 8.54503 22.7268C8.09513 23.6259 7.78331 23.905 7.25167 23.905C6.48615 23.905 6.00538 23.3956 6.00538 22.6114C6.00538 20.7764 7.83546 18.1114 7.83546 16.557C7.83546 15.6124 7.08888 14.9842 5.95714 14.9842L2.11846 14.9842C1.22686 14.9842 0.529891 14.2684 0.529891 13.3572C0.529891 12.8272 0.669345 12.4288 0.917393 12.2262C1.2712 11.9484 1.31798 11.5653 0.985752 11.2849C0.815829 11.1689 0.667977 10.7434 0.667977 10.2558C0.667977 9.66143 0.941415 9.12774 1.31368 8.91875C1.63458 8.73047 1.77061 8.42705 1.52081 8.03779C1.33751 7.81152 1.20919 7.44658 1.20919 6.99805C1.20919 6.35351 1.57394 5.80029 2.23146 5.52568C2.52374 5.3876 2.65636 5.12597 2.4379 4.76103C2.29161 4.55244 2.24347 4.2788 2.24347 3.99355C2.24347 3.2791 2.74649 2.71885 3.69034 2.49424C4.32081 2.33593 5.36212 2.25781 6.67482 2.27666L8.14444 2.27666C12.8055 2.32343 16.0418 5.00517 16.0418 8.85811ZM20.4193 8.91894C20.4193 12.2095 18.5552 14.6298 16.4965 14.6298C15.9145 14.6298 15.3681 14.6298 14.8035 14.6298C16.0707 12.765 16.5626 11.1539 16.5626 8.85107C16.5626 6.51211 15.4762 4.53945 13.6063 3.26602C14.4388 3.26602 15.2518 3.26602 16.0836 3.26602C18.3787 3.26602 20.4193 5.72402 20.4193 8.91894Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}