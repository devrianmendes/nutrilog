type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonType) {
  return <button {...props}>{children}</button>;
}
