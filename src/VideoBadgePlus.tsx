import React from 'react'

export default function VideoBadgePlus({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 42.8436 28.4256' className={className}>
      <path
        d='M28.9467 8.13859L28.9467 11.3743L34.4764 6.98555C34.929 6.63897 35.2922 6.42002 35.7734 6.42002C36.444 6.42002 36.8998 6.89044 36.8998 7.74034L36.8998 20.6664C36.8998 21.5254 36.444 21.9951 35.7734 21.9951C35.2922 21.9951 34.929 21.7762 34.4764 21.4212L28.9467 17.0324L28.9467 20.2675C28.9467 22.8827 27.5347 24.3018 24.9006 24.3018L13.1312 24.3018C13.2051 24.142 13.27 23.9774 13.322 23.8068L24.7606 23.8068C27.2444 23.8068 28.4352 22.5762 28.4352 20.1219L28.4352 8.28488C28.4352 5.83898 27.2444 4.59924 24.7606 4.59924L10.7982 4.59924C8.31437 4.59924 7.12365 5.83898 7.12365 8.28488L7.12365 14.7316C7.03553 14.7196 6.94492 14.7178 6.85391 14.7178C6.77236 14.7178 6.69111 14.7192 6.61211 14.7302L6.61211 8.13859C6.61211 5.52335 8.01417 4.11339 10.6582 4.11339L24.9006 4.11339C27.5347 4.11339 28.9467 5.52335 28.9467 8.13859ZM34.844 7.35011L28.9467 11.9547L28.9467 16.4514L34.844 21.056C35.2091 21.3366 35.4995 21.5433 35.7725 21.5433C36.1403 21.5433 36.3833 21.2696 36.3833 20.7251L36.3833 7.69005C36.3833 7.13712 36.1403 6.87189 35.7725 6.87189C35.4995 6.87189 35.2091 7.07785 34.844 7.35011Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8181 21.5717C12.8181 24.8471 10.1182 27.5352 6.85391 27.5352C3.59669 27.5352 0.889751 24.8484 0.889751 21.5717C0.889751 18.3145 3.59669 15.6166 6.85391 15.6166C10.13 15.6166 12.8181 18.2956 12.8181 21.5717ZM6.39532 18.1458L6.39532 21.1222L3.40987 21.1222C3.17159 21.1222 2.95128 21.2866 2.95128 21.5717C2.95128 21.8651 3.17159 22.0296 3.40987 22.0296L6.39532 22.0296L6.39532 25.0157C6.39532 25.2729 6.56046 25.4743 6.85391 25.4743C7.14806 25.4743 7.31251 25.2729 7.31251 25.0157L7.31251 22.0296L10.2798 22.0296C10.5362 22.0296 10.7384 21.8651 10.7384 21.5717C10.7384 21.2866 10.5362 21.1222 10.2798 21.1222L7.31251 21.1222L7.31251 18.1458C7.31251 17.9075 7.14806 17.6872 6.85391 17.6872C6.56046 17.6872 6.39532 17.9075 6.39532 18.1458Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
