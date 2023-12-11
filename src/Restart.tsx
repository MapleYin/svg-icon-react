import React from 'react'

export default function Restart({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.2418 20.8406' className={className}>
      <path
        d='M17.1892 20.8406C17.6657 20.8406 17.9842 20.5056 17.9842 19.9091L17.9842 0.95108C17.9842 0.344827 17.6657 0.00976562 17.1892 0.00976562C16.9579 0.00976562 16.7866 0.0667977 16.4813 0.249416L0.63311 9.60175C0.241212 9.83008 0 10.0559 0 10.4252C0 10.8043 0.241212 11.0301 0.63311 11.2577L16.4813 20.6107C16.7866 20.7934 16.9579 20.8406 17.1892 20.8406ZM17.1802 20.3358C17.0482 20.3358 16.9261 20.2884 16.7935 20.2039L0.822766 10.8755C0.653138 10.7722 0.447866 10.6318 0.447866 10.4252C0.447866 10.2192 0.653138 10.088 0.822766 9.98467L16.7935 0.656261C16.9261 0.571789 17.0482 0.524328 17.1802 0.524328C17.3498 0.524328 17.4727 0.637414 17.4727 0.928526L17.4727 19.9219C17.4727 20.2039 17.3498 20.3358 17.1802 20.3358Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
