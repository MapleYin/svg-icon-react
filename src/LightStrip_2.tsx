import React from 'react'

export default function LightStrip_2({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17.4326 27.1446' className={className}>
      <path
        d='M9.8134 23.6731C9.8134 24.5692 10.4101 25.1295 11.362 25.1295L15.5311 25.1295C16.474 25.1295 17.0713 24.5692 17.0713 23.6724L17.0713 3.51964C17.0713 2.62286 16.474 2.0625 15.5311 2.0625L11.362 2.0625C10.4101 2.0625 9.8134 2.62286 9.8134 3.51896ZM10.3363 23.6349L10.3363 3.55646C10.3363 2.96281 10.7423 2.58536 11.3737 2.58536L15.5117 2.58536C16.1431 2.58536 16.5485 2.96281 16.5485 3.55646L16.5485 23.6349C16.5485 24.2292 16.1431 24.6067 15.5117 24.6067L11.3737 24.6067C10.7423 24.6067 10.3363 24.2292 10.3363 23.6349ZM11.7686 24.8464L11.7686 26.8676C11.7686 27.0228 11.8994 27.1446 12.0455 27.1446C12.1923 27.1446 12.3148 27.0046 12.3148 26.8864L12.3148 24.8464ZM14.5699 24.8464L14.5699 26.8864C14.5699 27.0046 14.6917 27.1446 14.8385 27.1446C14.9937 27.1446 15.1161 27.0228 15.1161 26.8676L15.1161 24.8464ZM13.4469 6.57228C13.9615 6.57228 14.3869 6.14689 14.3869 5.62316C14.3869 5.08966 13.9615 4.66427 13.4469 4.66427C12.9232 4.66427 12.4978 5.08966 12.4978 5.62316C12.4978 6.14689 12.9232 6.57228 13.4469 6.57228ZM13.4469 10.5957C13.9615 10.5957 14.3869 10.1522 14.3869 9.6089C14.3869 9.09425 13.9615 8.65978 13.4469 8.65978C12.9232 8.65978 12.4978 9.09425 12.4978 9.6089C12.4978 10.1522 12.9232 10.5957 13.4469 10.5957ZM13.4469 14.5633C13.9615 14.5633 14.3869 14.1568 14.3869 13.6323C14.3869 13.1086 13.9615 12.6832 13.4469 12.6832C12.9232 12.6832 12.4978 13.1086 12.4978 13.6323C12.4978 14.1568 12.9232 14.5633 13.4469 14.5633ZM13.4469 18.549C13.9615 18.549 14.3869 18.1243 14.3869 17.5999C14.3869 17.0664 13.9615 16.6508 13.4469 16.6508C12.9232 16.6508 12.4978 17.0664 12.4978 17.5999C12.4978 18.1243 12.9232 18.549 13.4469 18.549ZM13.4469 22.5536C13.9615 22.5536 14.3869 22.1289 14.3869 21.5863C14.3869 21.071 13.9615 20.6372 13.4469 20.6372C12.9232 20.6372 12.4978 21.071 12.4978 21.5863C12.4978 22.1289 12.9232 22.5536 13.4469 22.5536Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M0 23.6794C0 24.5762 0.597365 25.1365 1.54864 25.1365L5.71768 25.1365C6.66964 25.1365 7.25792 24.5762 7.25792 23.6787L7.25792 3.52667C7.25792 2.62989 6.66964 2.06954 5.71768 2.06954L1.54864 2.06954C0.597365 2.06954 0 2.62989 0 3.52599ZM0.52286 23.6419L0.52286 3.56349C0.52286 2.96915 0.928915 2.5924 1.56026 2.5924L5.69835 2.5924C6.32969 2.5924 6.74415 2.96915 6.74415 3.56349L6.74415 23.6419C6.74415 24.2362 6.32969 24.6137 5.69835 24.6137L1.56026 24.6137C0.928915 24.6137 0.52286 24.2362 0.52286 23.6419ZM1.96426 2.35264L2.50137 2.35264L2.50137 0.312601C2.50137 0.194435 2.37891 0.0544918 2.23213 0.0544918C2.08604 0.0544918 1.96426 0.176271 1.96426 0.331448ZM4.75655 2.35264L5.30275 2.35264L5.30275 0.331448C5.30275 0.176271 5.18029 0.0544918 5.03419 0.0544918C4.87833 0.0544918 4.75655 0.194435 4.75655 0.312601ZM3.6335 6.56183C4.14884 6.56183 4.58263 6.12804 4.58263 5.61271C4.58263 5.07013 4.14884 4.64542 3.6335 4.64542C3.10977 4.64542 2.68438 5.07013 2.68438 5.61271C2.68438 6.12804 3.10977 6.56183 3.6335 6.56183ZM3.6335 10.5483C4.14884 10.5483 4.58263 10.1326 4.58263 9.59913C4.58263 9.07472 4.14884 8.65001 3.6335 8.65001C3.10977 8.65001 2.68438 9.07472 2.68438 9.59913C2.68438 10.1326 3.10977 10.5483 3.6335 10.5483ZM3.6335 14.5158C4.14884 14.5158 4.58263 14.0904 4.58263 13.5667C4.58263 13.0423 4.14884 12.6358 3.6335 12.6358C3.10977 12.6358 2.68438 13.0423 2.68438 13.5667C2.68438 14.0904 3.10977 14.5158 3.6335 14.5158ZM3.6335 18.5386C4.14884 18.5386 4.58263 18.1048 4.58263 17.5895C4.58263 17.0469 4.14884 16.6033 3.6335 16.6033C3.10977 16.6033 2.68438 17.0469 2.68438 17.5895C2.68438 18.1048 3.10977 18.5386 3.6335 18.5386ZM3.6335 22.5348C4.14884 22.5348 4.58263 22.1094 4.58263 21.5759C4.58263 21.0515 4.14884 20.6268 3.6335 20.6268C3.10977 20.6268 2.68438 21.0515 2.68438 21.5759C2.68438 22.1094 3.10977 22.5348 3.6335 22.5348Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
