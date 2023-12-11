import React from 'react'

export default function RectangleDashedAndPaperclip({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.4994 26.0104' className={className}>
      <path
        d='M2.0649 20.8012C2.0649 22.5791 2.98873 23.5016 4.773 23.5016L8.08023 23.5016L8.08023 24.0131L4.73462 24.0131C2.66011 24.0131 1.55269 22.8987 1.55269 20.8255L1.55269 17.4926L2.0649 17.4926ZM15.639 24.0131L8.97066 24.0131L8.97066 23.5016L15.639 23.5016ZM23.1985 24.0131L16.5294 24.0131L16.5294 23.5016L23.1985 23.5016ZM30.6067 20.8255C30.6067 22.8987 29.5 24.0131 27.4254 24.0131L24.0882 24.0131L24.0882 23.5016L27.3955 23.5016C29.1804 23.5016 30.1042 22.5791 30.1042 20.8012L30.1042 17.4926L30.6067 17.4926ZM2.0649 16.6022L1.55269 16.6022L1.55269 9.46479L2.0649 9.46479ZM30.6067 16.6022L30.1042 16.6022L30.1042 11.3008L30.6067 10.7954ZM8.08023 2.56538L4.773 2.56538C2.98873 2.56538 2.0649 3.48784 2.0649 5.26577L2.0649 8.57436L1.55269 8.57436L1.55269 5.24145C1.55269 3.15922 2.66011 2.05385 4.73462 2.05385L8.08023 2.05385ZM15.639 2.56538L8.97066 2.56538L8.97066 2.05385L15.639 2.05385ZM23.1985 2.56538L16.5294 2.56538L16.5294 2.05385L23.1985 2.05385ZM24.0882 2.35057L24.0882 2.05385L24.3824 2.05385Z'
        fill={color}
        fillOpacity='0.85'
      />
      <path
        d='M20.0078 13.9259C21.2332 15.1234 23.2075 15.513 24.7694 13.9232L29.8007 8.88276C29.9289 8.75464 29.9184 8.57016 29.8182 8.47133C29.7264 8.3809 29.5544 8.34458 29.4082 8.49155L24.3432 13.5558C23.1095 14.7902 21.4366 14.5597 20.4025 13.5327C19.3475 12.4847 19.1429 10.8138 20.3591 9.58989L26.8776 3.09027C27.7704 2.20726 28.8666 2.47338 29.4558 3.07094C30.0352 3.64965 30.3013 4.74525 29.4267 5.62963L23.0393 12.0282C22.6625 12.4056 22.1979 12.3316 21.8868 12.0659C21.547 11.7722 21.5289 11.2531 21.9063 10.8756L26.6768 6.11489C26.8419 5.94975 26.7763 5.79594 26.6963 5.70551C26.5975 5.58852 26.4444 5.53266 26.2792 5.71664L21.5248 10.4892C20.8855 11.1467 20.9407 11.9699 21.4565 12.4578C21.9939 12.9582 22.8039 13.0783 23.4627 12.4278L29.8347 6.04672C31.0026 4.87953 30.6234 3.435 29.8611 2.65384C29.0904 1.87337 27.6424 1.50394 26.4675 2.69769L20.0203 9.16303C18.4396 10.7438 18.7838 12.711 20.0078 13.9259Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
