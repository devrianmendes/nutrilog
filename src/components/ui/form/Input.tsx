type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
  extraClass?: string;
};

export default function Input({ extraClass, ...props }: InputType) {
  // const defaultClasses = "leading-8 text-neutral-950 px-2";
  // return <input className="leading-7 text-neutral-950 px-2" {...props}></input>;
  return (
    <input
      className={`border-solid border border-midGreen w-full leading-7 px-2 mb-2 ${extraClass}`}
      {...props}
    ></input>
  );
}
