import React from 'react'

export default function PersonAndArrowLeftAndArrowRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28.3281 22.2447' className={className}>
      <path
        d='M5.37341 22.244L22.6122 22.244C23.9016 22.244 24.5108 21.7748 24.5108 20.7296C24.5108 17.484 20.4512 13.0117 13.9924 13.0117C7.52526 13.0117 3.46569 17.484 3.46569 20.7296C3.46569 21.7748 4.07487 22.244 5.37341 22.244ZM5.43073 21.7212C4.31648 21.7212 3.97722 21.4671 3.97722 20.7522C3.97722 17.6504 7.74186 13.5262 13.9924 13.5262C20.2437 13.5262 24.0084 17.6504 24.0084 20.7522C24.0084 21.4671 23.66 21.7212 22.5548 21.7212ZM14.0211 10.952C16.8438 10.952 18.9814 8.5625 18.9814 5.4209C18.9814 2.45596 16.753 0 14.0211 0C11.2807 0 9.06002 2.46777 9.06002 5.42227C9.06002 8.56319 11.2074 10.952 14.0211 10.952ZM14.0211 10.4291C11.5028 10.4291 9.57156 8.27529 9.57156 5.42227C9.57156 2.75567 11.5566 0.52286 14.0211 0.52286C16.4673 0.52286 18.4699 2.74454 18.4699 5.4209C18.4699 8.27392 16.5393 10.4291 14.0211 10.4291Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0.240576 5.88311L2.96578 7.95147C3.30015 8.22042 3.77125 8.05528 3.77125 7.64707L3.77125 5.6795L7.16148 5.6795C7.29488 5.6795 7.41168 5.5627 7.41168 5.4209C7.41168 5.2791 7.29488 5.1623 7.16148 5.1623L3.77125 5.1623L3.77125 3.19678C3.77125 2.78584 3.30787 2.62343 2.96578 2.8917L0.240576 4.96006C-0.0710458 5.19151-0.0892098 5.64258 0.240576 5.88311ZM20.555 5.4209C20.555 5.5627 20.6718 5.6795 20.8052 5.6795L24.1955 5.6795L24.1955 7.64707C24.1955 8.05528 24.6666 8.22042 25.001 7.95147L27.7262 5.88311C28.0559 5.64258 28.0378 5.19151 27.7262 4.96006L25.001 2.8917C24.6589 2.62343 24.1955 2.78584 24.1955 3.19678L24.1955 5.1623L20.8052 5.1623C20.6718 5.1623 20.555 5.2791 20.555 5.4209Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
