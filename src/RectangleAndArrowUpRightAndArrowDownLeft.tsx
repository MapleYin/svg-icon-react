import React from 'react'

export function RectangleAndArrowUpRightAndArrowDownLeft({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18.5062 26.2258' className={className}>
      <path
        d='M1.09424 14.449L1.58009 14.449L1.58009 3.01211C1.58009 1.31485 2.32247 0.598344 4.00704 0.598344L14.1371 0.598344C15.8224 0.598344 16.5563 1.31485 16.5563 3.01211L16.5563 4.08154L17.0506 4.08154L17.0506 3.04316C17.0506 1.04805 16.0828 0.0698203 14.1054 0.0698203L4.03877 0.0698203C2.06133 0.0698203 1.09356 1.04805 1.09356 3.04316ZM4.03037 26.2258L14.1061 26.2258C16.0835 26.2258 17.0422 25.2476 17.0422 23.2615L17.0422 11.8466L16.557 11.8466L16.557 23.2835C16.557 24.9808 15.823 25.6973 14.1287 25.6973L4.00772 25.6973C2.32315 25.6973 1.58009 24.9808 1.58009 23.2835L1.58009 22.2141L1.09424 22.2141L1.09424 23.2615C1.09424 25.2476 2.06201 26.2258 4.03037 26.2258Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.8907 5.11817C12.6951 5.11817 12.597 5.25176 12.597 5.38536C12.597 5.52803 12.7049 5.68048 12.8837 5.68048L14.211 5.68048L17.2801 5.65753L15.2453 7.65957L12.7391 10.1651C12.6723 10.2319 12.6591 10.2897 12.6591 10.3571C12.6591 10.4962 12.7954 10.6137 12.9163 10.6137C12.9922 10.6137 13.0597 10.5823 13.1076 10.5344L15.6223 8.02814L17.6055 6.01154L17.5734 9.00655L17.5734 10.6132C17.5734 10.792 17.735 10.8999 17.8692 10.8999C18.0028 10.8999 18.1448 10.8025 18.1448 10.6062L18.1448 5.39903C18.1448 5.24063 18.0587 5.11817 17.8186 5.11817ZM0.326274 21.1774L5.25479 21.1774C5.4504 21.1774 5.54854 21.0438 5.54854 20.9102C5.54854 20.7669 5.43155 20.6151 5.26182 20.6151L3.93379 20.6151L0.864758 20.6381L2.89952 18.636L5.40645 16.1305C5.47256 16.0644 5.48643 16.015 5.48643 15.9385C5.48643 15.7994 5.34942 15.6819 5.21944 15.6819C5.15264 15.6819 5.08516 15.7133 5.03789 15.7612L2.52256 18.2682L0.539362 20.2841L0.562311 17.2891L0.562311 15.6824C0.562311 15.5036 0.409868 15.3957 0.275589 15.3957C0.133595 15.3957 0 15.4932 0 15.6894L0 20.8966C0 21.055 0.0861347 21.1774 0.326274 21.1774Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
