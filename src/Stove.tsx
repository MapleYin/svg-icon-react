import React from 'react'

export default function Stove({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.8927 21.2723' className={className}>
      <path
        d='M2.09366 19.3936L19.4377 19.3936C20.6905 19.3936 21.5314 18.4606 21.5314 17.0611L21.5314 2.35C21.5314 0.95049 20.6905 0.0258785 19.4377 0.0258785L2.09366 0.0258785C0.840822 0.0258785 0 0.95049 0 2.35L0 17.0611C0 18.4606 0.840822 19.3936 2.09366 19.3936ZM2.05801 18.882C1.12286 18.882 0.511533 18.1772 0.511533 17.1108L0.511533 2.29961C0.511533 1.23321 1.12286 0.529013 2.05801 0.529013L19.4734 0.529013C20.3994 0.529013 21.0198 1.23321 21.0198 2.29961L21.0198 17.1108C21.0198 18.1772 20.3994 18.882 19.4734 18.882ZM4.19933 4.35821C4.80958 4.35821 5.26564 3.89376 5.26564 3.31143C5.26564 2.70958 4.80958 2.24581 4.19933 2.24581C3.59815 2.24581 3.14278 2.70958 3.14278 3.31143C3.14278 3.89376 3.59815 4.35821 4.19933 4.35821ZM8.52755 4.35821C9.12872 4.35821 9.58478 3.89376 9.58478 3.31143C9.58478 2.70958 9.12872 2.24581 8.52755 2.24581C7.9173 2.24581 7.46192 2.70958 7.46192 3.31143C7.46192 3.89376 7.9173 4.35821 8.52755 4.35821ZM12.8285 4.35821C13.4381 4.35821 13.8942 3.89376 13.8942 3.31143C13.8942 2.70958 13.4381 2.24581 12.8285 2.24581C12.2274 2.24581 11.7713 2.70958 11.7713 3.31143C11.7713 3.89376 12.2274 4.35821 12.8285 4.35821ZM17.1567 4.35821C17.7572 4.35821 18.2133 3.89376 18.2133 3.31143C18.2133 2.70958 17.7572 2.24581 17.1567 2.24581C16.5465 2.24581 16.0904 2.70958 16.0904 3.31143C16.0904 3.89376 16.5465 4.35821 17.1567 4.35821ZM0.373541 6.45636L21.1494 6.45636L21.1494 5.91084L0.373541 5.91084ZM3.66964 16.9095L17.8436 16.9095C18.6584 16.9095 19.1544 16.3856 19.1544 15.5714L19.1544 9.75792C19.1544 8.94376 18.6584 8.42891 17.8436 8.42891L3.66964 8.42891C2.85548 8.42891 2.35948 8.94376 2.35948 9.75792L2.35948 15.5714C2.35948 16.3856 2.85548 16.9095 3.66964 16.9095ZM3.61866 16.3322C3.19357 16.3322 2.92697 16.0663 2.92697 15.6315L2.92697 9.70694C2.92697 9.263 3.19357 8.99708 3.61866 8.99708L17.8952 8.99708C18.3203 8.99708 18.5862 9.263 18.5862 9.70694L18.5862 15.6315C18.5862 16.0663 18.3203 16.3322 17.8952 16.3322ZM2.38761 21.2723C2.52374 21.2723 2.63917 21.1478 2.63917 21.0123L2.63917 19.1374L2.12764 19.1374L2.12764 21.0123C2.12764 21.1478 2.25215 21.2723 2.38761 21.2723ZM19.1438 21.2723C19.2792 21.2723 19.3946 21.1478 19.3946 21.0123L19.3946 19.1374L18.8831 19.1374L18.8831 21.0123C18.8831 21.1478 19.0076 21.2723 19.1438 21.2723Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}