import React from 'react'

export function Righttriangle({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.4323 22.8752' className={className}>
      <path
        d='M0.810748 21.4362L19.8207 21.4362C21.0013 21.4362 21.4272 21.0104 21.4272 19.8291L21.4272 0.81983C21.4272 0.324612 21.1473 0 20.7002 0C20.4315 0 20.1932 0.128126 19.9347 0.386624L0.376858 19.9444C0.127442 20.1932 0 20.4321 0 20.7009C0 21.148 0.314846 21.4362 0.810748 21.4362ZM0.900208 20.9227C0.645424 20.9227 0.530287 20.8466 0.530287 20.6763C0.530287 20.5534 0.559584 20.4683 0.72013 20.3168L20.3161 0.72013C20.4676 0.56935 20.5527 0.530971 20.6665 0.530971C20.8368 0.530971 20.922 0.655189 20.922 0.90929L20.922 19.7784C20.922 20.7894 20.7887 20.9227 19.7777 20.9227Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
