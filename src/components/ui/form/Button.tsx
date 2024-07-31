// type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  buttonType?: string;
  extraClass?: string;
};

export default function Button({
  children,
  buttonType,
  extraClass,
  ...props
}: ButtonType) {
  return (
    <>
      {buttonType === "primary" ? (
        <button
          className={`text-bright bg-midGreen h-9 font-medium min-w-32 px-3 ${extraClass} hover:scale-110 duration-100`}
          {...props}
        >
          {children}
        </button>
      ) : (
        <button
          className={`text-midGreen border-midGreen border-2 h-9 font-medium min-w-32 px-3 ${extraClass} hover:scale-110 duration-100`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}
