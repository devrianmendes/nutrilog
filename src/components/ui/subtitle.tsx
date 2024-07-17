type TitleType = React.HTMLAttributes<HTMLHeadingElement>;

export default function Subtitle({ children, className, ...props }: TitleType) {
  return (
    <h2 className={`font-secondary text-midGreen text-center font-medium text-xl ${className}`} {...props}>
      {children}
    </h2>
  );
}
