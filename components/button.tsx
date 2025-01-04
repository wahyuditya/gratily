interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  bordered?: boolean;
  type?: "button" | "reset" | "submit";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
  bordered = false,
  type,
  loading = false,
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
          h-[42px] px-[32px] min-w-[120px] rounded-[4px] text-[14px] flex justify-center items-center`}
        disabled={disabled}
      >
        {label}

        {loading && (
          <svg
            className="animate-spin h-5 w-5 ml-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        )}
      </button>
    </>
  );
};

export default Button;
