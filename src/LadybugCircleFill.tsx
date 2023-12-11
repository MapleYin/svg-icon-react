import React from 'react'

export default function LadybugCircleFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.6928 24.351' className={className}>
      <path
        d='M24.3315 12.1804C24.3315 18.8799 18.8604 24.351 12.1608 24.351C5.4711 24.351 0 18.8799 0 12.1804C0 5.49063 5.47041 0.0195312 12.1602 0.0195312C18.8597 0.0195312 24.3315 5.49063 24.3315 12.1804ZM18.1308 7.94923L16.8079 9.00479C16.6017 8.79288 16.3464 8.70001 16.1679 8.79835C14.7542 9.65401 13.3891 9.79961 12.1608 9.79961C10.9515 9.79961 9.5584 9.65401 8.1629 8.79835C7.9753 8.68184 7.72003 8.77403 7.52354 9.00479L6.20001 7.94923C6.05508 7.82589 5.85997 7.85108 5.75547 7.97716C5.66983 8.13116 5.68301 8.32628 5.80909 8.43077L7.17031 9.50587C6.6128 10.3863 6.22832 11.5564 6.13838 12.7704L4.5546 12.7529C4.37696 12.7529 4.25362 12.8567 4.25362 13.0512C4.25362 13.2358 4.37696 13.3501 4.5546 13.3501L6.10703 13.3501C6.1084 14.8376 6.46563 16.1255 7.09287 17.1531L5.68829 18.2632C5.54336 18.3774 5.53018 18.5453 5.65284 18.6791C5.73916 18.8059 5.91612 18.8317 6.07921 18.7259L7.43291 17.6583C8.37539 18.8785 9.75254 19.6277 11.3934 19.7483C11.8537 19.7783 11.9875 19.5851 11.9875 19.2971L11.9875 10.5867C11.9875 10.49 12.0815 10.4232 12.1608 10.4232C12.2401 10.4232 12.3251 10.49 12.3251 10.5867L12.3251 19.2971C12.3251 19.5851 12.4589 19.7783 12.9283 19.7483C14.5691 19.6277 15.9463 18.8785 16.8888 17.6583L18.2425 18.7259C18.4056 18.8317 18.5825 18.8059 18.6689 18.6791C18.7915 18.5453 18.7783 18.3774 18.6243 18.2632L17.2288 17.1531C17.8561 16.1255 18.2133 14.8376 18.2056 13.3501L19.7671 13.3501C19.9447 13.3501 20.0772 13.2358 20.0772 13.0512C20.0772 12.8567 19.9636 12.7529 19.7859 12.7529L18.1833 12.7704C18.0843 11.5564 17.7089 10.3863 17.1702 9.50587L18.5035 8.43077C18.638 8.30811 18.6519 8.13116 18.5662 7.97716C18.4429 7.83292 18.2855 7.82589 18.1308 7.94923ZM10.8038 15.7011C10.8038 16.3833 10.2276 16.9393 9.5461 16.9393C8.89043 16.9393 8.32471 16.3833 8.32471 15.7011C8.32471 15.0454 8.89043 14.4615 9.5461 14.4615C10.2276 14.4615 10.8038 15.0454 10.8038 15.7011ZM16.0151 15.7011C16.0151 16.3833 15.4494 16.9393 14.7854 16.9393C14.1129 16.9393 13.536 16.3833 13.536 15.7011C13.536 15.0454 14.1129 14.4615 14.7854 14.4615C15.4494 14.4615 16.0151 15.0454 16.0151 15.7011ZM10.4082 12.1598C10.4082 12.7359 9.91016 13.234 9.31582 13.234C8.73828 13.234 8.22276 12.7359 8.22276 12.1598C8.22276 11.5459 8.73828 11.0758 9.31582 11.0758C9.91016 11.0758 10.4082 11.5648 10.4082 12.1598ZM16.1178 12.1598C16.1178 12.7359 15.6016 13.234 15.0247 13.234C14.4206 13.234 13.9232 12.7359 13.9232 12.1598C13.9232 11.5648 14.4206 11.0758 15.0247 11.0758C15.6016 11.0758 16.1178 11.5459 16.1178 12.1598ZM15.523 3.36612L14.5418 3.90362C14.0655 4.16524 13.8236 4.51953 13.9444 5.01192L13.9821 5.16338C13.4532 4.93653 12.8398 4.80459 12.1608 4.80459C11.4818 4.80459 10.8685 4.93653 10.3396 5.16338L10.3766 5.01192C10.4981 4.51114 10.2652 4.1834 9.77989 3.90362L8.78956 3.36612C8.47266 3.17647 8.24053 3.67169 8.54766 3.84815L9.54229 4.37315C9.80801 4.5253 9.85049 4.63682 9.82051 4.89004L9.75489 5.5086C8.9836 6.0625 8.5212 6.88282 8.5212 7.88321C8.5212 8.23682 8.64883 8.4376 9.04288 8.64268C9.79688 9.02217 10.9499 9.2461 12.1608 9.2461C13.362 9.2461 14.5248 9.02217 15.2781 8.64268C15.6729 8.4376 15.8005 8.23682 15.8005 7.88321C15.8005 6.88282 15.3381 6.0625 14.5668 5.5086L14.4921 4.89004C14.4614 4.63682 14.513 4.5253 14.7787 4.37315L15.774 3.84815C16.0721 3.67169 15.8399 3.17647 15.523 3.36612Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}