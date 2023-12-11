import React from 'react'

export default function TornadoCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM13.0057 19.0102C12.5871 19.0772 12.0939 19.1142 11.6565 19.0283C11.4858 18.9977 11.3339 19.1035 11.3032 19.2484C11.2551 19.4129 11.3212 19.5592 11.5665 19.6275C11.9249 19.6945 12.719 19.6757 13.1696 19.6087C13.3584 19.5592 13.4434 19.4143 13.4141 19.2673C13.3841 19.121 13.2503 18.9788 13.0057 19.0102ZM16.2237 16.5563C14.9987 16.9142 13.4324 17.0293 12.167 16.8354C11.9775 16.8061 11.8319 16.9099 11.8013 17.0673C11.772 17.2149 11.8744 17.378 12.0827 17.4094C13.3634 17.5922 15.1193 17.5727 16.4579 17.1185C16.6278 17.0565 16.7191 16.8983 16.6403 16.715C16.5972 16.5667 16.432 16.4761 16.2237 16.5563ZM18.0097 13.8407C16.5952 14.3304 14.7471 14.6855 12.8292 14.6855C11.9969 14.6855 11.1723 14.6542 10.5039 14.5307C10.3151 14.5007 10.1611 14.6115 10.1298 14.7767C10.1082 14.9152 10.21 15.0804 10.419 15.1131C11.0308 15.2107 11.9412 15.2687 12.8292 15.2771C14.9067 15.2764 16.7288 14.8933 18.2291 14.4016C18.3836 14.3473 18.4799 14.1683 18.4367 14.0045C18.3936 13.8575 18.218 13.741 18.0097 13.8407ZM17.9141 11.4768C16.3952 12.1131 14.354 12.4172 12.2397 12.4172C10.5332 12.4172 8.51134 12.1674 7.28311 11.8229C7.07754 11.7427 6.91036 11.8326 6.85811 11.9816C6.80723 12.1754 6.90059 12.3237 7.07051 12.3851C8.4795 12.8141 10.5389 13.0289 12.2397 13.0289C14.55 13.0289 16.693 12.6857 18.1753 11.9881C18.3516 11.9156 18.4254 11.7387 18.3516 11.5729C18.2868 11.4259 18.1203 11.3673 17.9141 11.4768ZM8.85508 4.70166C6.69092 5.33282 5.38008 6.54786 5.38008 7.85987C5.38008 9.74014 7.77969 10.7592 11.9982 10.7592C15.883 10.7592 18.9598 9.84913 18.9598 8.29366C18.9598 7.00274 16.9726 6.20762 14.1106 6.20762C12.1472 6.20762 10.3753 6.62686 8.9584 7.24073C8.73262 7.34453 8.67198 7.55284 8.76465 7.69913C8.8378 7.8377 8.99161 7.89835 9.26006 7.79659C10.4194 7.2545 11.9912 6.78643 14.1162 6.78643C16.7184 6.78643 18.3755 7.3962 18.3755 8.29297C18.3755 9.30488 15.6061 10.1874 12.0046 10.1874C8.12794 10.1874 5.97345 9.36553 5.97345 7.86758C5.97345 6.84112 7.03419 5.83917 9.04522 5.2505C9.1879 5.20596 9.29171 5.04786 9.26671 4.88838C9.2047 4.69326 9.02911 4.65781 8.85508 4.70166Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}