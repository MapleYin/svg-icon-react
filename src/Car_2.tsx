import React from 'react'

export function Car_2({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 37.5667 22.5004' className={className}>
      <path
        d='M18.6117 0.563649C17.6964 0.592157 16.9774 0.63087 16.616 0.679391C16.1487 0.74298 15.6853 0.861269 15.2534 1.05269C14.8715 1.04988 14.4799 1.04844 14.0831 1.04844C11.1043 1.04844 8.39903 1.1293 7.63457 1.22627C6.27969 1.38184 5.33223 2.03907 4.82989 3.0835C4.40313 3.95928 3.56465 6.36143 3.12159 8.66602L1.92471 10.236C0.855964 11.6438 0.545515 12.592 0.545515 14.3945L0.545515 16.6657C0.545515 17.6688 1.03673 18.1242 2.22129 18.2693C3.82717 18.4708 6.90914 18.6184 9.69278 18.696L9.69278 19.2441C8.1452 19.1986 6.50729 19.1325 5.08184 19.0504L5.08184 20.9604C5.08184 21.8238 4.41436 22.5004 3.5502 22.5004L2.17617 22.5004C1.31201 22.5004 0.644531 21.805 0.644531 20.9604L0.644531 18.2366C0.231424 17.8826 0 17.3576 0 16.6204L0 14.3945C0 12.1001 0.595214 11.084 1.48145 9.91113L2.61924 8.43291C3.06982 6.16728 3.8999 3.77471 4.33936 2.85605C4.99434 1.4582 6.26592 0.85654 7.56778 0.679391C8.43555 0.562887 11.3647 0.502926 14.0831 0.502926C15.6731 0.502926 17.3352 0.523206 18.6117 0.563649ZM6.50714 14.2855C6.50714 15.1711 5.86778 15.8098 4.992 15.8098C4.11553 15.8098 3.47617 15.1711 3.47617 14.2855C3.47617 13.4098 4.11553 12.7704 4.992 12.7704C5.86778 12.7704 6.50714 13.4098 6.50714 14.2855ZM13.3876 2.85605C12.9886 3.6902 12.2675 5.73958 11.8018 7.80576C8.57175 7.82912 6.67953 7.90741 4.78937 8.04287C4.33878 8.07217 4.2545 7.76787 4.31583 7.49395C4.74708 5.60294 5.30509 4.11329 5.68663 3.41993C6.08292 2.71524 6.72081 2.19522 7.79903 2.06055C8.82369 1.93405 11.1111 1.88309 14.052 1.88276C13.7916 2.15152 13.5666 2.47406 13.3876 2.85605Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M13.3641 7.49395C13.3028 7.76787 13.387 8.07217 13.8376 8.04287C16.1259 7.87823 18.4354 7.79805 23.1314 7.79805C27.8183 7.79805 30.1277 7.87823 32.416 8.04287C32.8666 8.07217 32.9509 7.76787 32.8993 7.49395C32.4674 5.60294 31.9192 4.11329 31.5188 3.41993C31.1134 2.71524 30.4937 2.19522 29.4064 2.06055C28.3871 1.9336 26.087 1.88272 23.1314 1.88272C20.1757 1.88272 17.8665 1.9336 16.8473 2.06055C15.76 2.19522 15.1312 2.71524 14.7349 3.41993C14.3533 4.11329 13.7953 5.60294 13.3641 7.49395ZM14.0396 15.8098C14.916 15.8098 15.5554 15.1711 15.5554 14.2855C15.5554 13.4098 14.916 12.7704 14.0396 12.7704C13.1638 12.7704 12.5244 13.4098 12.5244 14.2855C12.5244 15.1711 13.1638 15.8098 14.0396 15.8098ZM20.096 15.6986L26.1576 15.6986C26.7963 15.6986 27.2174 15.2775 27.2174 14.6395C27.2174 13.9918 26.7963 13.5798 26.1576 13.5798L20.096 13.5798C19.4573 13.5798 19.0369 13.9918 19.0369 14.6395C19.0369 15.2775 19.4573 15.6986 20.096 15.6986ZM32.2141 15.8098C33.0899 15.8098 33.7292 15.1711 33.7292 14.2855C33.7292 13.4098 33.0899 12.7704 32.2141 12.7704C31.3376 12.7704 30.6983 13.4098 30.6983 14.2855C30.6983 15.1711 31.3376 15.8098 32.2141 15.8098ZM23.1314 19.3011C27.0749 19.3011 32.672 19.0953 35.0366 18.8219C36.3685 18.6636 37.2054 18.0299 37.2054 16.6204L37.2054 14.3945C37.2054 12.1001 36.6193 11.084 35.7239 9.91113L34.5952 8.43291C34.1446 6.16728 33.3055 3.77471 32.8751 2.85605C32.2111 1.4582 30.9486 0.848825 29.6467 0.679391C28.7698 0.562204 25.8497 0.502926 23.1314 0.502926C20.413 0.502926 17.4838 0.562887 16.616 0.679391C15.3142 0.85654 14.0426 1.4582 13.3876 2.85605C12.9482 3.77471 12.1181 6.16728 11.6675 8.43291L10.5297 9.91113C9.64346 11.084 9.04825 12.1001 9.04825 14.3945L9.04825 16.6204C9.04825 18.0299 9.88517 18.6636 11.2261 18.8219C13.5907 19.0953 19.1787 19.3011 23.1314 19.3011ZM23.1314 18.7556C19.2039 18.7556 13.6318 18.5603 11.2695 18.2693C10.085 18.1242 9.59377 17.6688 9.59377 16.6657L9.59377 14.3945C9.59377 12.592 9.90421 11.6438 10.973 10.236L12.1698 8.66602C12.6129 6.36143 13.4514 3.95928 13.8781 3.0835C14.3805 2.03907 15.3279 1.38184 16.6828 1.22627C17.4473 1.1293 20.1526 1.04844 23.1314 1.04844C26.1102 1.04844 28.8 1.1293 29.5785 1.22627C30.9264 1.38252 31.8732 2.03975 32.3846 3.0835C32.8029 3.95928 33.6407 6.36143 34.0838 8.66602L35.2807 10.236C36.3585 11.6438 36.6599 12.592 36.6599 14.3945L36.6599 16.6657C36.6599 17.6688 36.1687 18.1424 34.9841 18.2693C32.6218 18.5323 27.0504 18.7556 23.1314 18.7556ZM11.2244 22.5004L12.5984 22.5004C13.4535 22.5004 14.1301 21.8238 14.1301 20.9604L14.1301 18.7634L9.69278 18.2167L9.69278 20.9604C9.69278 21.805 10.3603 22.5004 11.2244 22.5004ZM33.6643 22.5004L35.0383 22.5004C35.8934 22.5004 36.5699 21.8238 36.5699 20.9604L36.5699 18.2167L32.1326 18.7634L32.1326 20.9604C32.1326 21.8238 32.8001 22.5004 33.6643 22.5004Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
