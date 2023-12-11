import React from 'react'

export default function CarTopLaneDashedArrowtriangleInward({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.6686 23.8363' className={className}>
      <path
        d='M0 14.7621C0 15.151 0.372267 15.2505 0.627152 15.0917L5.17315 12.3392C5.49161 12.144 5.47207 11.7286 5.17315 11.5523L0.617386 8.7621C0.353419 8.60331 0 8.70351 0 9.0917ZM36.3073 14.7621L36.3073 9.0917C36.3073 8.70351 35.9545 8.604 35.699 8.7621L31.1341 11.5523C30.8352 11.7293 30.8163 12.1434 31.1341 12.3392L35.6808 15.0917C35.9364 15.2498 36.3073 15.151 36.3073 14.7621Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M6.9464 6.55048L7.23331 6.55048C7.29425 6.55048 7.33996 6.51386 7.33996 6.44384L7.33996 0.527826C7.33996 0.466886 7.29425 0.430263 7.23331 0.430263L6.9464 0.430263C6.87637 0.430263 6.83975 0.466886 6.83975 0.527826L6.83975 6.44384C6.83975 6.51386 6.87637 6.55048 6.9464 6.55048ZM6.9464 14.9877L7.23331 14.9877C7.29425 14.9877 7.33996 14.9511 7.33996 14.881L7.33996 8.96572C7.33996 8.90478 7.29425 8.85908 7.23331 8.85908L6.9464 8.85908C6.87637 8.85908 6.83975 8.90478 6.83975 8.96572L6.83975 14.881C6.83975 14.9511 6.87637 14.9877 6.9464 14.9877ZM6.9464 23.4256L7.23331 23.4256C7.29425 23.4256 7.33996 23.389 7.33996 23.3189L7.33996 17.4029C7.33996 17.342 7.29425 17.3054 7.23331 17.3054L6.9464 17.3054C6.87637 17.3054 6.83975 17.342 6.83975 17.4029L6.83975 23.3189C6.83975 23.389 6.87637 23.4256 6.9464 23.4256ZM29.0739 6.55048L29.3609 6.55048C29.4316 6.55048 29.4675 6.51386 29.4675 6.44384L29.4675 0.527826C29.4675 0.466886 29.4316 0.430263 29.3609 0.430263L29.0739 0.430263C29.013 0.430263 28.9673 0.466886 28.9673 0.527826L28.9673 6.44384C28.9673 6.51386 29.013 6.55048 29.0739 6.55048ZM29.0739 14.9877L29.3609 14.9877C29.4316 14.9877 29.4675 14.9511 29.4675 14.881L29.4675 8.96572C29.4675 8.90478 29.4316 8.85908 29.3609 8.85908L29.0739 8.85908C29.013 8.85908 28.9673 8.90478 28.9673 8.96572L28.9673 14.881C28.9673 14.9511 29.013 14.9877 29.0739 14.9877ZM29.0739 23.4256L29.3609 23.4256C29.4316 23.4256 29.4675 23.389 29.4675 23.3189L29.4675 17.4029C29.4675 17.342 29.4316 17.3054 29.3609 17.3054L29.0739 17.3054C29.013 17.3054 28.9673 17.342 28.9673 17.4029L28.9673 23.3189C28.9673 23.389 29.013 23.4256 29.0739 23.4256ZM18.1529 23.8363C22.1737 23.8363 24.4984 22.7201 24.4984 20.3906L24.4984 8.49463L24.9964 8.49463C25.4336 8.49463 25.6901 8.29473 25.6894 7.96016L25.6978 7.38242C25.6964 7.04717 25.4336 6.8291 24.9957 6.8291L24.4984 6.8291L24.4984 3.89541C24.4984 1.41445 22.2134 0.0174803 18.1536 0.0181639C14.1134 0.0181639 11.8466 1.41377 11.8466 3.89541L11.8466 6.8291L11.3492 6.8291C10.9107 6.8291 10.666 7.04717 10.6653 7.38174L10.6647 7.96016C10.6731 8.29473 10.9107 8.49463 11.3485 8.49463L11.8466 8.49463L11.8466 20.3906C11.8466 22.7201 14.1608 23.8363 18.1529 23.8363ZM18.1536 23.3021C14.4555 23.3105 12.3738 22.3879 12.3738 20.397L12.3738 3.8961C12.3738 1.74551 14.4265 0.526473 18.1529 0.526473C21.8996 0.526473 23.9803 1.74551 23.9803 3.89541L23.9803 20.397C23.9803 22.3879 21.8706 23.3105 18.1536 23.3021ZM18.1718 10.0228C19.0089 10.0235 20.8441 10.1198 21.3478 10.1205C22.1235 10.1205 22.5017 9.80937 22.5791 8.94775L22.7067 7.44609C22.8239 6.02578 22.2579 5.29658 18.1725 5.2959C14.087 5.2959 13.5203 6.02578 13.6382 7.44677L13.7574 8.94707C13.844 9.80937 14.22 10.1205 14.9972 10.1198C15.5016 10.1205 17.0561 10.0235 18.1718 10.0228ZM18.1718 21C21.6762 21.0084 22.7072 20.5222 22.5943 19.0628L22.5135 18.1887C22.4033 17.0111 21.4141 16.596 18.1725 16.5967C14.9302 16.596 13.9416 17.0027 13.8308 18.1887L13.7506 19.0621C13.637 20.5138 14.6681 21.0084 18.1718 21Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}