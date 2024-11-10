interface ButtonProps {
  label: string;
  onClick: (e: any) => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
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
        className={`${buttonStyle} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } h-[42px] px-[32px] min-w-[120px] rounded-[4px] text-[#4e4e4e] text-[14px]`}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
