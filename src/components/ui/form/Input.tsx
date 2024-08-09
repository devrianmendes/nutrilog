type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
  extraClass?: string;
};

export default function Input({ extraClass, ...props }: InputType) {
  return (
    <input
      className={`border-solid border border-midGreen w-full leading-7 px-2 mb-2 focus:outline-midGreen ${extraClass}`}
      {...props}
    ></input>
  );
}
