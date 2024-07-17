type InputType = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputType) {
  // const defaultClasses = "leading-8 text-neutral-950 px-2";
  // return <input className="leading-7 text-neutral-950 px-2" {...props}></input>;
  return (
    <input
      className="border-solid border border-midGreen w-full leading-7"
      {...props}
    ></input>
  );
}
