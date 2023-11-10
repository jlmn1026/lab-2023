import { ReactNode } from "react";

type Props = {
  width: string;

  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const TestButton = ({ children, width, ...commonProps }: Props) => {
  return (
    <button
      style={{
        width,
      }}
      {...commonProps}
    >
      {children}
    </button>
  );
};

export default TestButton;
