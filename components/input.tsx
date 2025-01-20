interface InputProps {
  label: string;
  placeholder?: string;
  icon?: React.ReactNode;
  required?: boolean;
  type?: "email" | "password" | "text";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  trailingIcon?: {
    icon: React.ReactNode;
    onClick: () => void;
  };
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  icon,
  trailingIcon,
  required = true,
  type,
  onChange,
  value,
}) => {
  return (
    <>
      <div className="email relative mb-[18px]">
        <p className="mb-[8px]">{label}</p>
        <div className="flex items-center relative w-full h-[54px] px-[12px] rounded-[12px] border border-[#C1C1C1] bg-[#fafafa] focus-within:border-appColor-400 focus-within:shadow-lg focus-within:shadow-appColor-500/20 transition-shadow">
          <div className="mr-[12px]">{icon}</div>
          <input
            className="flex-1 h-full bg-transparent outline-none"
            type={type}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
          {trailingIcon && (
            <div className="ml-[12px]" onClick={trailingIcon.onClick}>
              {trailingIcon.icon}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;
