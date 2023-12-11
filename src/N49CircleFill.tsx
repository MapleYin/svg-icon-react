import React from 'react'

export default function N49CircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1706C24.3315 18.8604 18.8604 24.3315 12.1608 24.3315C5.4711 24.3315 0 18.8604 0 12.1706C0 5.4711 5.47041 0 12.1602 0C18.8597 0 24.3315 5.4711 24.3315 12.1706ZM12.6664 10.4017C12.6664 12.1036 13.4881 13.7365 15.1335 13.7365C16.3907 13.7365 17.1636 12.7848 17.3832 11.5891L17.423 11.5891C17.423 11.6651 17.423 11.7328 17.423 11.818C17.423 13.6397 17.1459 16.8087 15.1845 16.8087C14.2857 16.8087 13.7477 16.1408 13.4672 15.17C13.3829 14.8786 13.2855 14.7859 13.1435 14.7859C12.9472 14.7859 12.8504 14.9084 12.8504 15.0985C12.8504 15.2087 12.8797 15.3929 12.9467 15.5673C13.2669 16.7099 14.1141 17.42 15.2104 17.42C17.5076 17.42 18.0493 14.2131 18.0493 11.9347C18.0493 9.61202 17.4057 6.89395 15.239 6.89395C13.5792 6.89395 12.6664 8.5541 12.6664 10.4017ZM8.96415 7.43145L5.69219 13.824C5.60654 14.0092 5.55635 14.1478 5.55635 14.3093C5.55635 14.5662 5.72832 14.7473 6.04111 14.7473L9.44785 14.7473L9.44785 17.0211C9.44785 17.2081 9.55899 17.3607 9.7666 17.3607C9.93223 17.3607 10.0658 17.1774 10.0658 17.0211L10.0658 14.7473L10.9578 14.7473C11.1339 14.7473 11.2579 14.6457 11.2579 14.4549C11.2579 14.2836 11.0976 14.173 10.9578 14.173L10.0658 14.173L10.0658 7.43897C10.0658 7.01827 9.7837 6.92598 9.58711 6.92598C9.26836 6.92598 9.12363 7.12725 8.96415 7.43145ZM9.44082 14.1659L6.18155 14.1659L6.18155 14.143L9.39199 7.77462L9.44082 7.77462ZM17.2522 10.406C17.2522 11.7526 16.4998 13.1572 15.2403 13.1572C13.9334 13.1572 13.2851 11.7311 13.2851 10.406C13.2851 9.04249 13.9271 7.48712 15.2403 7.48712C16.5668 7.48712 17.2522 9.07042 17.2522 10.406Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
