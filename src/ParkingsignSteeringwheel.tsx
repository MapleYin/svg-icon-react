import React from 'react'

export default function ParkingsignSteeringwheel({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40.3859 26.7924' className={className}>
      <path
        d='M0.199227 25.3186C0.326576 25.3186 0.407537 25.2355 0.407537 25.0796L0.407537 15.1242L6.9627 15.1242C11.5323 15.1242 14.401 12.5796 14.401 8.49386C14.401 4.41651 11.533 1.81875 6.96339 1.81875L0.199227 1.81875C0.0816441 1.81875 0 1.90108 0 2.05704L0 25.0796C0 25.2362 0.0816441 25.3186 0.199227 25.3186ZM0.407537 14.7213L0.407537 2.22101L7.02207 2.22101C11.2686 2.22101 13.9991 4.64796 13.9991 8.49386C13.9991 12.3391 11.2588 14.7213 7.02207 14.7213ZM27.8637 26.7924C34.5534 26.7924 40.0245 21.3213 40.0245 14.6218C40.0245 7.93203 34.5528 2.46094 27.863 2.46094C21.1726 2.46094 15.6931 7.93203 15.6931 14.6218C15.6931 21.3213 21.1642 26.7924 27.8637 26.7924ZM16.9523 10.4345C18.6234 6.08975 22.9166 2.96046 27.8623 2.96046C32.8164 2.96046 37.1006 6.08975 38.7724 10.4338C38.866 10.7046 38.742 10.8887 38.5272 10.8887L17.1974 10.8887C16.9749 10.8887 16.8586 10.7046 16.9523 10.4345ZM27.8442 18.5105C26.4388 18.5105 25.2901 17.3806 25.2901 15.9375C25.2901 14.5237 26.4388 13.3848 27.8442 13.3848C29.2859 13.3848 30.4346 14.5237 30.4346 15.9375C30.4346 17.3806 29.2859 18.5105 27.8442 18.5105ZM16.4631 17.1214C16.3949 16.8283 16.4573 16.578 16.835 16.5737C21.498 16.5327 25.2491 20.6731 24.6431 25.1942C24.6061 25.5901 24.3573 25.7517 23.9964 25.6228C20.2447 24.3038 17.3477 21.0922 16.4631 17.1214ZM39.2629 17.1214C38.3686 21.0922 35.4813 24.3038 31.7289 25.6228C31.3687 25.7517 31.1193 25.5901 31.0822 25.1942C30.495 20.7192 34.1813 16.5327 38.8903 16.5737C39.2688 16.578 39.3304 16.8283 39.2629 17.1214Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
