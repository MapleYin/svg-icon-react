import React from 'react'

export default function EyeSlashFill({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.9005 24.6197' className={className}>
      <path
        d='M10.6451 8.3217C9.83221 9.44063 9.35912 10.8188 9.36651 12.3148C9.40352 16.0598 12.4545 19.1889 16.2699 19.1889C17.7323 19.1889 19.1039 18.713 20.2297 17.9057L23.4826 21.1584C21.3477 22.1361 18.9072 22.7699 16.2699 22.7699C6.87959 22.7699 0 14.7532 0 12.3148C0 10.8085 2.66612 7.15463 6.92073 4.59754ZM32.5392 12.3148C32.5392 13.8236 29.901 17.4684 25.6629 20.0252L21.8901 16.2509C22.6965 15.1324 23.1727 13.7701 23.1727 12.3148C23.1727 8.49933 20.0197 5.44972 16.2699 5.44972C14.8017 5.44972 13.4384 5.90129 12.3204 6.67762L9.10966 3.46563C11.2353 2.4966 13.6588 1.86934 16.2699 1.86934C25.5651 1.86934 32.5392 9.88536 32.5392 12.3148ZM16.8252 14.5014C16.6484 14.5492 16.462 14.5733 16.2699 14.5733C15.0268 14.5733 14.0205 13.567 14.0205 12.3148C14.0205 12.1254 14.0439 11.9415 14.0905 11.7668ZM18.5194 12.3148C18.5194 12.4891 18.4999 12.6586 18.4611 12.8206L15.7661 10.1246C15.9275 10.0856 16.0964 10.066 16.2699 10.066C17.5131 10.066 18.5194 11.0723 18.5194 12.3148Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M26.8815 23.2788C26.9865 23.3831 27.159 23.3754 27.2549 23.2788C27.3794 23.1536 27.3592 23.0014 27.2549 22.8964L5.36144 0.99454C5.2753 0.908405 5.10147 0.871394 4.97832 0.99454C4.87471 1.09815 4.87471 1.27267 4.97832 1.37697Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
