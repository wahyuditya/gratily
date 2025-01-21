interface errorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<errorMessageProps> = ({ message }) => {
  return (
    <>
      <div className="h-full w-full text-center mb-[24px]">
        <p className="text-appColor-error ">{message}</p>
      </div>
    </>
  );
};

export default ErrorMessage;
