import { FC } from "react";

interface successMessageProps {
  message: string;
}

const SuccessMessage: React.FC<successMessageProps> = ({ message }) => {
  return (
    <>
      <div className="h-full w-full text-center mb-[24px]">
        <p className="text-appColor-text">{message}</p>
      </div>
    </>
  );
};

export default SuccessMessage;
