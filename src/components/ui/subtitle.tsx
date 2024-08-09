type TitleType = React.HTMLAttributes<HTMLHeadingElement>;

export default function Subtitle({ children, className, ...props }: TitleType) {
  return (
    <h2 className={`font-secondary text-midGreen font-medium text-xl mb-3 ${className}`} {...props}>
      {children}
    </h2>
  );
}
