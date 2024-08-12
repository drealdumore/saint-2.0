export const Google = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 256 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);

const Icon = (props: {
  children: any;
  size?: number;
  class?: string;
  stroke?: 2 | 1.5;
}) => (
  <svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    className={props.class}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {props.children}
  </svg>
);

export const ErrorIcon = (props: {
  size?: number;
  class?: string;
  stroke?: 2 | 1.5;
  fill?: string;
}) => {
  return (
    <Icon size={props.size} class={props.class}>
      <path
        fill="currentColor"
        d="M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM12 9.5A1.25 1.25 0 1 0 12 7a1.25 1.25 0 0 0 0 2.5"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
        clipRule="evenodd"
      ></path>
    </Icon>
  );
};

export const Eye = (props: {
  size?: number;
  class?: string;
  stroke?: 2 | 1.5;
  fill?: string;
}) => {
  return (
    <Icon size={props.size} class={props.class}>
      <path
        d="M2 12.0001L1.11178 11.5406C0.962741 11.8288 0.962741 12.1713 1.11178 12.4595L2 12.0001ZM22 11.9999L22.8882 12.4594C23.0373 12.1712 23.0373 11.8287 22.8882 11.5405L22 11.9999ZM2.88822 12.4595C5.16609 8.05547 8.65289 6.00002 12 6C15.3471 5.99998 18.8339 8.05537 21.1118 12.4594L22.8882 11.5405C20.3386 6.61119 16.2391 3.99997 12 4C7.76084 4.00003 3.66136 6.6113 1.11178 11.5406L2.88822 12.4595ZM1.11178 12.4595C3.66137 17.3888 7.76085 20 12 20C16.2392 20 20.3386 17.3887 22.8882 12.4594L21.1118 11.5405C18.8339 15.9445 15.3471 18 12 18C8.65288 18 5.16609 15.9446 2.88822 11.5406L1.11178 12.4595ZM14 12C14 13.1046 13.1046 14 12 14V16C14.2091 16 16 14.2091 16 12H14ZM12 14C10.8954 14 10 13.1046 10 12H8C8 14.2091 9.79086 16 12 16V14ZM10 12C10 10.8954 10.8954 10 12 10V8C9.79086 8 8 9.79086 8 12H10ZM12 10C13.1046 10 14 10.8954 14 12H16C16 9.79086 14.2091 8 12 8V10Z"
        fill="currentColor"
      />
    </Icon>
  );
};