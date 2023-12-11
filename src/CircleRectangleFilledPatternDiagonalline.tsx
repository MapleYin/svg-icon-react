import React from 'react'

export default function CircleRectangleFilledPatternDiagonalline({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 29.4244 22.0607' className={className}>
      <path
        d='M20.3701 0.0413007L25.8721 0.0413007C27.3117 0.0413007 28.2852 0.591412 28.7454 1.61222L28.9824 1.7422L28.8503 1.8743C28.9855 2.26759 29.054 2.72066 29.054 3.22959L29.054 18.8137C29.054 20.8582 27.9473 22.0013 25.8721 22.0013L8.71437 22.0013L8.6548 22.0607L8.62599 22.0013L3.18125 22.0013C1.64157 22.0013 0.634983 21.3924 0.219671 20.2258L0.180085 20.1912L0.199905 20.1714C0.0670868 19.7798 0 19.3263 0 18.8137L0 3.22959C0 1.14736 1.10674 0.0413007 3.18125 0.0413007L20.33 0.0413007L20.3568 0.0144506ZM20.5694 0.552834L16.1655 4.95745C15.976 4.8888 15.7803 4.83361 15.5786 4.79328L19.8185 0.552834L11.0836 0.552834L0.511533 11.1249L0.511533 18.7887C0.511533 19.1438 0.548001 19.4648 0.622246 19.7495L7.8639 12.516C7.90431 12.7178 7.95974 12.9136 8.02881 13.1029L0.826684 20.2952C1.23037 21.086 2.03037 21.4897 3.21124 21.4897L8.49281 21.4897L12.661 17.313C12.8671 17.3671 13.0795 17.4054 13.2973 17.4269L9.22685 21.4897L17.9695 21.4897L28.5418 10.9089L28.5418 3.2539C28.5418 2.90131 28.5029 2.58233 28.4256 2.29897L20.4959 10.2287C20.4744 10.0109 20.4362 9.79849 20.382 9.59228L28.2158 1.7585C27.7974 0.960618 26.9795 0.552834 25.8428 0.552834ZM18.7211 21.4897L25.8428 21.4897C27.553 21.4897 28.5418 20.5673 28.5418 18.7887L28.5418 11.6612ZM3.21124 0.552834C1.42628 0.552834 0.511533 1.47598 0.511533 3.2539L0.511533 10.3823L10.341 0.552834Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M14.1231 17.4854C17.6871 17.4854 20.5544 14.6182 20.5544 11.0541C20.5544 7.49911 17.6871 4.62275 14.1231 4.62275C10.5688 4.62275 7.6917 7.49911 7.6917 11.0541C7.6917 14.6182 10.5688 17.4854 14.1231 17.4854ZM14.1231 16.9413C10.7842 16.9413 8.24493 14.402 8.24493 11.0541C8.24493 7.71523 10.7842 5.17598 14.1231 5.17598C17.471 5.17598 20.0109 7.71523 20.0109 11.0541C20.0109 14.402 17.471 16.9413 14.1231 16.9413Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}