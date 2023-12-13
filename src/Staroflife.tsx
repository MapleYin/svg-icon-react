import React from 'react'

export function Staroflife({ className = 'w-6', color = '#000000' }: { className?: string; color?: string }) {
  return (
    <svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 23.1526 25.0301' className={className}>
      <path
        d='M11.3351 25.0301L11.4374 25.0301C13.1194 25.0301 13.6455 24.5912 13.6455 22.953L13.6455 16.432L19.2936 19.6838C19.8425 19.9886 20.2608 20.1455 20.6206 20.1455C21.2432 20.1455 21.6738 19.7265 22.2178 18.8144L22.2599 18.7266C22.6142 18.1352 22.7822 17.668 22.7822 17.2769C22.7822 16.692 22.3939 16.2731 21.5619 15.7794L15.9048 12.5102L21.5801 9.25001C22.4113 8.77511 22.7906 8.33741 22.7906 7.77071C22.7906 7.36212 22.6135 6.89493 22.2592 6.29375L22.2178 6.21641C21.6822 5.30361 21.2425 4.8664 20.6283 4.8664C20.2686 4.8664 19.8418 5.02265 19.3117 5.32744L13.6455 8.60575L13.6455 2.07706C13.6455 0.43887 13.1194 0 11.4374 0L11.3351 0C9.64326 0 9.12695 0.43887 9.12695 2.07706L9.12695 8.60575L3.47052 5.32744C2.94952 5.02265 2.52276 4.8664 2.163 4.8664C1.54883 4.8664 1.10909 5.30361 0.573538 6.21641L0.522364 6.29375C0.177832 6.89493 0.000683665 7.36212 0.000683665 7.77071C0.000683665 8.33741 0.370899 8.77511 1.21123 9.25001L6.88651 12.5102L1.2294 15.7794C0.397462 16.2731 0 16.692 0 17.2769C0 17.668 0.177149 18.1352 0.530762 18.7266L0.573538 18.8144C1.1084 19.7265 1.54815 20.1455 2.16163 20.1455C2.5214 20.1455 2.94884 19.9886 3.48868 19.6838L9.12695 16.432L9.12695 22.953C9.12695 24.5912 9.64326 25.0301 11.3351 25.0301ZM11.3081 24.5261C10.0613 24.5261 9.61895 24.2143 9.61895 22.9877L9.61895 15.9147C9.61895 15.7752 9.55694 15.7034 9.47403 15.7034C9.42452 15.7034 9.37569 15.7139 9.32618 15.7522L3.20108 19.2888C2.81387 19.5113 2.50411 19.6278 2.24249 19.6278C1.76944 19.6278 1.42198 19.2629 1.03546 18.5771L0.948251 18.4501C0.687314 17.9959 0.542197 17.6296 0.542197 17.3205C0.542197 16.8949 0.822666 16.5747 1.4422 16.2084L7.42608 12.7509C7.56144 12.6734 7.62071 12.5946 7.62071 12.5151C7.62071 12.435 7.56144 12.3366 7.43448 12.278L1.4338 8.80284C0.833115 8.44493 0.561728 8.11631 0.561728 7.69004C0.561728 7.38165 0.687314 7.02442 0.948251 6.57999L1.03546 6.43419C1.42198 5.74835 1.77013 5.40157 2.24317 5.40157C2.50479 5.40157 2.81456 5.51807 3.20176 5.74971L9.22354 9.23038C9.2919 9.25968 9.34073 9.27921 9.39932 9.27921C9.52901 9.27921 9.61895 9.19835 9.61895 9.01212L9.61895 2.04239C9.61895 0.815829 10.0613 0.504013 11.3081 0.504013L11.4644 0.504013C12.7021 0.504013 13.1542 0.815829 13.1542 2.04239L13.1542 9.01212C13.1542 9.18858 13.2253 9.27921 13.3543 9.27921C13.3947 9.27921 13.4436 9.25968 13.5119 9.23038L19.5805 5.74971C19.9774 5.51807 20.2865 5.40157 20.5481 5.40157C21.0212 5.40157 21.3603 5.74835 21.7559 6.43419L21.834 6.57999C22.0949 7.03419 22.2478 7.38165 22.2478 7.69004C22.2478 8.11631 21.9673 8.44493 21.3484 8.80284L15.3938 12.2969C15.2669 12.3555 15.1985 12.435 15.1985 12.5151C15.1985 12.5758 15.2669 12.6546 15.3932 12.7327L21.3491 16.2084C21.968 16.5747 22.2484 16.8949 22.2484 17.3394C22.2484 17.6484 22.0949 17.9959 21.834 18.4501L21.7559 18.5771C21.3603 19.2629 21.0219 19.609 20.5488 19.609C20.2684 19.609 19.9586 19.5022 19.5812 19.2888L13.4463 15.7334C13.3968 15.7041 13.3668 15.7034 13.3173 15.7034C13.2253 15.7034 13.1542 15.7752 13.1542 15.9147L13.1542 22.9877C13.1542 24.2143 12.7021 24.5261 11.4644 24.5261Z'
        fill={color}
        fillOpacity='0.85'
      />
    </svg>
  )
}
