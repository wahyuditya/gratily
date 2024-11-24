import { Children } from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: any) => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  bordered?: boolean;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  bordered = false,
  type,
}) => {
  const buttonStyle =
    variant === "primary"
      ? "bg-appColor-500 hover:bg-appColor-400"
      : "hover:text-appColor-950";

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`
          ${buttonStyle}  
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${
            bordered
              ? "border border-appColor-950 font-medium text-appColor-800"
              : "text-[#4e4e4e]"
          }
          h-[42px] px-[32px] min-w-[120px] rounded-[4px] text-[14px]`}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
