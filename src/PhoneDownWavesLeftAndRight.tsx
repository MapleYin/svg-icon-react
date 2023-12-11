import React from 'react'

export default function PhoneDownWavesLeftAndRight({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 46.2318 15.8569' className={className}>
      <path
        d='M0 7.92359C0 10.9918 1.26406 13.7335 3.29941 15.7505C3.40987 15.8637 3.5878 15.8826 3.69415 15.7637C3.78097 15.6728 3.73712 15.4919 3.6378 15.4074C1.69063 13.4674 0.503818 10.8682 0.503818 7.92359C0.503818 4.96919 1.69063 2.36997 3.6378 0.439116C3.73712 0.345461 3.78097 0.173681 3.69415 0.0743622C3.5878-0.0354057 3.40987-0.0172418 3.29941 0.0868625C1.26406 2.10454 0 4.84556 0 7.92359ZM45.8704 7.92359C45.8704 4.84556 44.6064 2.10454 42.571 0.0868625C42.4606-0.0172418 42.2826-0.0354057 42.1763 0.0743622C42.0888 0.173681 42.1326 0.345461 42.2326 0.439116C44.1798 2.36997 45.3666 4.96919 45.3666 7.92359C45.3666 10.8682 44.1798 13.4674 42.2326 15.4074C42.1326 15.4919 42.0888 15.6728 42.1763 15.7637C42.2826 15.8826 42.4606 15.8637 42.571 15.7505C44.6064 13.7335 45.8704 10.9918 45.8704 7.92359Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M4.78203 7.92359C4.78203 9.64986 5.44404 11.2122 6.61182 12.3489C6.7293 12.455 6.90089 12.4732 6.99884 12.3544C7.08634 12.2543 7.067 12.0839 6.95225 11.998C5.82247 11.0235 5.29493 9.51782 5.29493 7.92359C5.29493 6.31958 5.82316 4.81324 6.95225 3.84849C7.067 3.75347 7.08634 3.58306 6.99884 3.48374C6.90089 3.37397 6.7293 3.39145 6.61182 3.49761C5.44404 4.63433 4.78203 6.19732 4.78203 7.92359ZM41.0793 7.92359C41.0793 6.19732 40.4264 4.63433 39.2586 3.49761C39.1411 3.39145 38.9696 3.37397 38.8625 3.48374C38.7841 3.58306 38.8034 3.75347 38.9182 3.84849C40.0473 4.81392 40.5755 6.32027 40.5755 7.92359C40.5755 9.51782 40.0473 11.0235 38.9182 11.998C38.8034 12.0839 38.7841 12.2543 38.8625 12.3544C38.9696 12.4732 39.1411 12.455 39.2586 12.3489C40.4264 11.2122 41.0793 9.64986 41.0793 7.92359Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M8.89425 8.97983C8.8879 9.78316 9.05372 10.8569 9.66759 11.4714C10.0337 11.8285 10.5749 12.0363 11.3157 11.91L15.9104 11.082C16.3467 11.0018 16.7616 10.8331 17.0839 10.529C17.4661 10.1837 17.6853 9.6062 17.7034 8.75025L17.732 7.43462C17.732 7.26655 17.8011 7.10191 17.928 6.97427C18.0361 6.8648 18.1574 6.79644 18.3039 6.74829C19.0152 6.50689 20.6809 6.19214 22.9349 6.19214C25.1896 6.19214 26.8552 6.50689 27.5665 6.74829C27.713 6.79644 27.8343 6.8648 27.9424 6.97427C28.0693 7.10191 28.1384 7.26655 28.1384 7.43462L28.1663 8.75025C28.1852 9.6062 28.4036 10.1837 28.7865 10.529C29.1088 10.8331 29.5237 11.0018 29.9601 11.082L34.5547 11.91C35.2955 12.0363 35.8367 11.8285 36.2028 11.4714C36.8167 10.8569 36.9825 9.78316 36.9762 8.97983C36.9621 7.30786 36.3846 5.91138 35.1952 4.71294C32.6373 2.15435 27.7862 1.04878 22.9349 1.02993C18.0842 1.04878 13.2331 2.15435 10.6745 4.71294C9.48585 5.91138 8.90831 7.30786 8.89425 8.97983Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
