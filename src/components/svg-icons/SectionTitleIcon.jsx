export const TitleDecoLeftLg = ({className = "" }) => {
  return (
    <svg
      width="100"
      height="6"
      viewBox="0 0 100 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="3" cy="3" r="3" fill="currentColor" />
      <path d="M6 3H100" stroke="currentColor" />
    </svg>
  );
};
export const TitleDecoRightLg = ({className = "" }) => {
  return (
    <svg
      width="100"
      height="6"
      viewBox="0 0 100 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="97"
        cy="3.00001"
        r="3"
        transform="rotate(-180 97 3.00001)"
        fill="currentColor"
      />
      <path d="M94 3.00001L-1.01328e-06 3" stroke="currentColor" />
    </svg>
  );
};
export const TitleDecoLeftSm = ({ className = "" }) => {
  return (
    <svg
      width="56"
      height="6"
      viewBox="0 0 56 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="3" cy="3" r="3" fill="currentColor" />
      <path d="M6 3H56" stroke="currentColor" />
    </svg>
  );
};
export const TitleDecoRightSm = ({className = "" }) => {
  return (
    <svg
      width="56"
      height="6"
      viewBox="0 0 56 6"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="53"
        cy="3"
        r="3"
        transform="rotate(-180 53 3)"
        fill="currentColor"
      />
      <path d="M50 3L6.25849e-07 3" stroke="currentColor" />
    </svg>
  );
};
