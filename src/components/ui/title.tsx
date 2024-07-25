type TitleType = React.HTMLAttributes<HTMLHeadingElement> & {extraClass?: string};

export default function Title({ children, extraClass, ...props }: TitleType) {
  return (
    <h1 className={`font-secondary font-medium text-3xl text-white ${extraClass}`} {...props}>
      {children}
    </h1>
  );
}
