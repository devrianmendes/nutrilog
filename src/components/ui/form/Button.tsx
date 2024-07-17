// type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  buttonType: string;
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
          className={`text-bright bg-midGreen h-9 font-medium w-32 ${extraClass}`}
          {...props}
        >
          {children}
        </button>
      ) : (
        <button
          className={`text-midGreen border-2 h-9 font-medium w-20 ${extraClass}`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
  // return <button {...props}>{children}</button>;
}
