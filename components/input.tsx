interface InputProps {
  label: string;
  icon: React.ReactNode;
  required?: boolean;
  type?: "email" | "password" | "text";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  required = true,
  type,
  onChange,
  value,
}) => {
  return (
    <>
      <div className="email relative mb-[18px]">
        <div className="absolute left-[12px] top-1/2 -translate-y-1/2">
          {icon}
        </div>
        <input
          className="w-full h-[42px] px-[46px] rounded-[4px] border border-[#C1C1C1] bg-[#fafafa]"
          type={type}
          required={required}
          placeholder={label}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};

export default Input;
