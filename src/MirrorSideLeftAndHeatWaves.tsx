import React from 'react'

export default function MirrorSideLeftAndHeatWaves({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.7794 26.1838' className={className}>
      <path
        d='M24.7465 3.9576C27.2258 3.9576 28.6609 5.445 28.3855 7.83046L27.9124 12.1853C27.7868 13.3833 28.4238 14.0441 29.7642 14.0441L33.8081 14.0441C34.1618 14.0441 34.4181 14.3192 34.4181 14.6729L34.4181 21.4624C34.4181 21.9817 34.119 22.1969 33.5557 22.0576C31.285 21.4931 29.4879 21.2789 27.4244 21.2789L20.9573 21.2789C21.0417 21.1102 21.129 20.9401 21.2154 20.7674L22.436 20.7674C25.2478 20.7674 26.4968 19.6837 26.787 17.0764L27.8753 7.75253C28.1076 5.75311 26.8697 4.46913 24.7465 4.46913C19.9624 4.46913 12.9488 4.55409 9.37949 5.03192C3.31739 5.82675 0.511533 8.47304 0.511533 13.6811C0.511533 18.1272 3.0838 20.6653 7.70916 20.7579C7.62285 20.9255 7.53664 21.0928 7.4544 21.261C2.65939 21.0843 0 18.3796 0 13.6811C0 8.21327 3.02012 5.38836 9.379 4.52879C12.9238 4.02234 19.9806 3.9492 24.7465 3.9576ZM20.3233 21.2789L14.518 21.2789C14.6025 21.1102 14.6898 20.9401 14.7762 20.7674L20.582 20.7674C20.4943 20.9378 20.4067 21.1078 20.3233 21.2789ZM13.8846 21.2789L8.07938 21.2789C8.16391 21.1102 8.25123 20.9401 8.33766 20.7674L14.1432 20.7674C14.0555 20.9378 13.968 21.1078 13.8846 21.2789Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.10216 25.7046C7.5294 24.9749 7.33409 24.4907 7.33409 23.6452C7.33409 21.7443 9.23019 20.1197 9.23019 17.7893C9.23019 15.8037 7.6629 15.0822 7.6629 12.6682L7.6629 12.0891L7.08702 12.0891L7.08702 12.6682C7.08702 15.4886 8.6627 16.0901 8.6627 17.7893C8.6627 20.0007 6.76729 21.5131 6.76729 23.6416C6.76729 24.7948 7.14336 25.4462 7.62374 26.0549C7.86817 26.3647 8.32072 26.0179 8.10216 25.7046ZM5.15577 11.9763C4.96749 12.272 5.14463 12.594 5.50235 12.594L9.24688 12.594C9.6046 12.594 9.78243 12.2726 9.59346 11.9763L7.75255 9.11883C7.64307 8.95077 7.55245 8.89989 7.37462 8.89989C7.19747 8.89989 7.07823 8.96053 6.97852 9.11883ZM14.541 25.7046C13.9676 24.9749 13.773 24.4907 13.773 23.6452C13.773 21.7443 15.6684 20.1197 15.6684 17.7893C15.6684 15.8037 14.1018 15.0822 14.1018 12.6682L14.1018 12.0891L13.5259 12.0891L13.5259 12.6682C13.5259 15.4886 15.1009 16.0901 15.1009 17.7893C15.1009 20.0007 13.2068 21.5131 13.2068 23.6416C13.2068 24.7948 13.5836 25.4462 14.0633 26.0549C14.3266 26.3829 14.7777 26.0179 14.541 25.7046ZM11.603 11.9763C11.4147 12.272 11.5835 12.594 11.9419 12.594L15.6851 12.594C16.0435 12.594 16.2213 12.272 16.0337 11.9763L14.2096 9.11883C14.1008 8.96053 14.0095 8.89989 13.8135 8.89989C13.6266 8.89989 13.5353 8.96053 13.4174 9.11883ZM20.9799 25.7046C20.4071 24.9749 20.2125 24.4907 20.2125 23.6452C20.2125 21.7443 22.1072 20.1197 22.1072 17.7893C22.1072 15.8037 20.5406 15.0822 20.5406 12.6682L20.5406 12.0891L19.9641 12.0891L19.9641 12.6682C19.9641 15.4886 21.5404 16.0901 21.5404 17.7893C21.5404 20.0007 19.645 21.5131 19.645 23.6416C19.645 24.7948 20.0399 25.4462 20.5015 26.0549C20.7647 26.3829 21.2166 26.0179 20.9799 25.7046ZM18.0335 11.9763C17.8452 12.272 18.0224 12.594 18.3801 12.594L22.1246 12.594C22.483 12.594 22.6602 12.272 22.4726 11.9763L20.6491 9.11883C20.5585 8.96053 20.4295 8.89989 20.2523 8.89989C20.0836 8.89989 19.9839 8.95077 19.8751 9.11883Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}