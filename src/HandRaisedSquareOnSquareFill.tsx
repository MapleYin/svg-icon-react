import React from 'react'

export default function HandRaisedSquareOnSquareFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26.5781 25.5989' className={className}>
      <path
        d='M19.5751 4.12481L19.5751 4.77266L9.82364 4.77266C7.26143 4.77266 5.75195 6.28985 5.75195 8.85978L5.75195 19.9839L3.71036 19.9839C1.64424 19.9839 0.528423 18.8688 0.528423 16.7956L0.528423 4.12481C0.528423 2.05235 1.64424 0.937212 3.71036 0.937212L16.3939 0.937212C18.4677 0.937212 19.5751 2.08028 19.5751 4.12481Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M25.6793 8.85978L25.6793 21.5208C25.6793 23.566 24.581 24.7091 22.4974 24.7091L9.82364 24.7091C7.74844 24.7091 6.6417 23.603 6.6417 21.5208L6.6417 8.85978C6.6417 6.77755 7.74844 5.6715 9.82364 5.6715L22.4974 5.6715C24.581 5.6715 25.6793 6.81456 25.6793 8.85978ZM15.561 8.30568L15.561 13.9459C15.2275 13.9648 14.8939 14.0122 14.6064 14.0604L14.6064 9.14933C14.6064 8.84045 14.3386 8.57267 14.0304 8.57267C13.7131 8.57267 13.4272 8.84045 13.4272 9.14933L13.4272 14.4558C13.1188 14.5891 12.8619 14.7524 12.6491 14.924L12.6491 11.2573C12.6491 10.9491 12.3814 10.6814 12.0557 10.6814C11.7454 10.6814 11.4874 10.9491 11.4874 11.2573L11.4874 17.3398C11.4874 20.5544 13.5293 22.0377 15.9858 22.0377C18.165 22.0377 19.9017 20.85 20.6995 17.9051C20.9971 16.7896 21.2851 15.6715 21.5388 14.5809C21.577 14.4475 21.5725 14.389 21.5725 14.3153C21.5725 13.9994 21.3179 13.8098 21.0376 13.8098C20.8286 13.8098 20.6033 13.9086 20.4934 14.1935L19.6383 16.4413C19.5043 16.8119 19.297 16.8901 19.0974 16.8901C18.8489 16.8901 18.643 16.7281 18.643 16.3212L18.643 9.69572C18.643 9.37843 18.3927 9.11134 18.0579 9.11134C17.749 9.11134 17.4813 9.37843 17.4813 9.69572L17.4813 14.3088C17.251 14.195 16.9817 14.1092 16.7039 14.0234L16.7039 8.30568C16.7039 7.9884 16.455 7.72062 16.1377 7.72062C15.8281 7.72062 15.561 7.9884 15.561 8.30568Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}