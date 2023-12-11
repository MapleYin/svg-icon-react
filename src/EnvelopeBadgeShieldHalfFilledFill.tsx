import React from 'react'

export default function EnvelopeBadgeShieldHalfFilledFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 39.9807 31.4412' className={className}>
      <path
        d='M28.727 20.7001C28.6831 20.9015 28.6667 21.1168 28.6667 21.3456L28.6667 25.876L8.51056 25.876C7.4173 25.876 6.80499 25.6234 6.35441 25.246L15.9079 15.675L17.9652 17.5175C18.6055 18.088 19.1381 18.3369 19.8097 18.3369C20.4715 18.3369 21.0139 18.088 21.645 17.5175L23.7114 15.675ZM15.5053 15.3014L5.913 24.8567C5.4963 24.3237 5.29532 23.5904 5.29532 22.6967L5.29532 8.72624C5.29532 7.89343 5.50675 7.12946 5.88302 6.62693ZM34.315 8.72624L34.315 17.8328C34.0682 17.8331 33.8131 17.8759 33.5742 17.9687L30.1287 19.2807C29.5343 19.509 29.1705 19.7938 28.9551 20.1332L24.1043 15.3014L33.7266 6.62693C34.1029 7.12946 34.315 7.89343 34.315 8.72624ZM33.341 6.23835L21.2232 17.1568C20.7124 17.6194 20.2932 17.8127 19.8097 17.8127C19.3164 17.8127 18.8979 17.6194 18.3871 17.1568L6.26857 6.23835C6.76847 5.78913 7.52179 5.53864 8.47658 5.53864L31.133 5.53864C32.0878 5.53864 32.8418 5.78913 33.341 6.23835Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M39.0903 25.9438L39.0903 21.3617C39.0903 20.6404 38.9097 20.3762 38.215 20.1287C37.0028 19.6779 35.9825 19.264 34.7688 18.8083C34.4571 18.7051 34.1008 18.724 33.8666 18.8146C32.7103 19.2892 31.6453 19.6779 30.4331 20.1287C29.7475 20.3762 29.5585 20.6404 29.5585 21.3617L29.5585 25.9438C29.5585 27.83 30.4941 28.5421 33.8798 30.4552C34.1671 30.6142 34.5682 30.5843 34.7871 30.4552C38.154 28.5609 39.0903 27.83 39.0903 25.9438ZM34.3059 30.0621C34.2809 30.0628 34.2559 30.0425 34.2204 30.0196C30.801 28.0752 30.1033 27.5644 30.1033 25.9678L30.1033 21.3107C30.1033 21.0066 30.2673 20.7743 30.5651 20.6655C31.7616 20.2224 32.9569 19.7696 34.1164 19.3056C34.1798 19.2938 34.2523 19.2834 34.3059 19.275Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}