import React from 'react'

export default function Sparkles({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.7695 30.8061' className={className}>
      <path
        d='M10.5513 5.82901C10.653 5.82901 10.7221 5.76768 10.7332 5.65752C10.9479 3.77363 10.9458 3.34424 13.2904 3.09121C13.4188 3.08076 13.4612 3.00195 13.4612 2.90996C13.4612 2.81797 13.4188 2.73848 13.2904 2.72803C10.9458 2.48408 10.9479 2.05469 10.7332 0.170801C10.7221 0.0606447 10.653 0 10.5513 0C10.4404 0 10.3805 0.0606447 10.3603 0.170801C10.1547 2.05469 10.1477 2.48408 7.80303 2.72803C7.67471 2.73848 7.63223 2.81797 7.63223 2.90996C7.63223 3.00195 7.67471 3.08076 7.80303 3.09121C10.1477 3.34424 10.1547 3.77363 10.3603 5.65752C10.3805 5.76768 10.4404 5.82901 10.5513 5.82901Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.20889 14.1782C4.26797 14.1782 4.32364 14.1414 4.34385 14.0551C4.91251 10.658 4.8544 10.7963 8.28555 10.105C8.35303 10.0932 8.4087 10.057 8.4087 9.97002C8.4087 9.89209 8.35303 9.84619 8.28555 9.83506C4.8544 9.12607 4.91182 9.27568 4.34385 5.88564C4.32364 5.79863 4.26797 5.76181 4.20889 5.76181C4.14073 5.76181 4.08506 5.79863 4.07393 5.88633C3.48916 9.26455 3.61651 9.14375 0.123146 9.83506C0.0556648 9.84687 0 9.89209 0 9.97002C0 10.0486 0.0556648 10.0932 0.116799 10.105C3.60879 10.8083 3.48916 10.6755 4.07393 14.0537C4.08506 14.1414 4.14073 14.1782 4.20889 14.1782Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M12.7629 28.4728C12.9748 28.4728 13.0995 28.3403 13.1113 28.1731C13.7982 20.2562 14.4982 19.7909 22.1072 19.1766C22.2842 19.1654 22.4082 19.0498 22.4082 18.8651C22.4082 18.6895 22.2842 18.5732 22.1072 18.5621C14.4982 17.9387 13.7982 17.4825 13.1113 9.55644C13.0995 9.39902 12.9748 9.25683 12.7629 9.25683C12.551 9.25683 12.427 9.39902 12.4145 9.55644C11.7276 17.4825 11.0276 17.9387 3.41856 18.5621C3.2416 18.5732 3.11758 18.6895 3.11758 18.8651C3.11758 19.0498 3.2416 19.1654 3.41856 19.1766C10.999 20.0568 11.6055 20.275 12.4145 28.1731C12.427 28.3403 12.551 28.4728 12.7629 28.4728Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
