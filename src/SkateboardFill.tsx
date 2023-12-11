import React from 'react'

export default function SkateboardFill({
  className = 'w-6',
  color = '#000000',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.7292 23.3974' className={className}>
      <path
        d='M1.57852 21.8255C3.68252 23.9218 6.65646 23.9231 8.76046 21.8191L21.7985 8.78113C23.9038 6.67576 23.9038 3.68298 21.7985 1.57897C19.7126-0.507556 16.7192-0.507556 14.6333 1.57829L1.57852 14.6331C-0.526173 16.7196-0.526173 19.7215 1.57852 21.8255ZM16.6272 4.94421C16.3944 4.7114 16.3944 4.30915 16.6272 4.08542C16.8697 3.83376 17.2545 3.83376 17.4873 4.06725C17.7292 4.30915 17.7292 4.69255 17.4873 4.94421C17.2545 5.16794 16.86 5.16794 16.6272 4.94421ZM18.4514 6.76775C18.2088 6.52585 18.2088 6.1404 18.4514 5.89851C18.6835 5.66569 19.0858 5.66569 19.3095 5.89851C19.5612 6.1404 19.5612 6.52585 19.3095 6.76775C19.0858 7.00056 18.6835 7.00056 18.4514 6.76775ZM14.8141 6.73074C14.5819 6.507 14.5819 6.12224 14.8329 5.87966C15.0657 5.64753 15.4589 5.64753 15.6917 5.87966C15.9238 6.10339 15.9238 6.507 15.6917 6.73074C15.4491 6.98171 15.0657 6.98171 14.8141 6.73074ZM16.646 8.56199C16.3944 8.33894 16.3944 7.93601 16.646 7.7032C16.8879 7.46062 17.2734 7.46062 17.5153 7.7032C17.7481 7.93601 17.7481 8.33894 17.5153 8.56199C17.2734 8.81365 16.8879 8.81365 16.646 8.56199ZM5.84063 15.7035C5.6169 15.4798 5.6169 15.0957 5.85948 14.8531C6.09229 14.621 6.48614 14.621 6.71896 14.8531C6.95109 15.0768 6.95109 15.4798 6.71896 15.7035C6.47638 15.9552 6.09229 15.9552 5.84063 15.7035ZM7.67325 17.5354C7.44044 17.2935 7.44044 16.9095 7.67325 16.6571C7.91515 16.4334 8.29992 16.4334 8.55089 16.6571C8.77462 16.9095 8.77462 17.2935 8.55089 17.5354C8.29992 17.778 7.91515 17.778 7.67325 17.5354ZM4.04571 17.5173C3.82198 17.2935 3.82198 16.8906 4.04571 16.6571C4.29737 16.4152 4.68145 16.4152 4.90518 16.648C5.15616 16.8906 5.15616 17.2747 4.90518 17.5173C4.68145 17.7501 4.27852 17.7501 4.04571 17.5173ZM5.87833 19.3492C5.62667 19.0982 5.62667 18.7135 5.87833 18.4716C6.11046 18.2206 6.50431 18.2206 6.73712 18.4716C6.9797 18.7135 6.9797 19.0982 6.73712 19.3492C6.50431 19.5729 6.11046 19.5729 5.87833 19.3492ZM11.0746 3.68815L11.4639 4.07741C11.6463 4.24167 11.9164 4.24167 12.0995 4.07741L14.8242 1.35202C15.008 1.16891 15.008 0.899478 14.8242 0.734535L14.4357 0.327113C14.2714 0.153771 13.9461 0.153771 13.7812 0.345961L11.0746 3.03434C10.8915 3.21676 10.8915 3.50573 11.0746 3.68815ZM19.2993 11.9129L19.6886 12.3021C19.8717 12.4755 20.1411 12.4755 20.3242 12.3021L23.058 9.5579C23.2418 9.39364 23.2418 9.14236 23.058 8.94109L22.6799 8.55183C22.515 8.36941 22.2085 8.38757 22.0443 8.55183L19.2993 11.2591C19.1162 11.4422 19.1351 11.7486 19.2993 11.9129ZM0.288088 14.4558L0.695509 14.8639C0.8793 15.0464 1.12989 15.0464 1.313 14.8639L4.03838 12.1386C4.22989 11.9464 4.22989 11.6678 4.03838 11.4841L3.65821 11.0871C3.46602 10.9221 3.19658 10.9221 3.01347 11.0871L0.306935 13.802C0.123828 13.9844 0.123828 14.2916 0.288088 14.4558ZM8.52189 22.7001L8.90207 23.0705C9.12219 23.2536 9.36369 23.2718 9.5468 23.0893L12.2722 20.364C12.4546 20.1802 12.4546 19.8926 12.2722 19.7095L11.8829 19.3209C11.7096 19.1559 11.4304 19.1559 11.2473 19.3209L8.52189 22.0644C8.34855 22.2287 8.33039 22.5267 8.52189 22.7001Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}