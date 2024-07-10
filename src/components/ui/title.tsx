type TitleType = React.HTMLAttributes<HTMLHeadingElement>;

export default function Title({children, ...props}: TitleType) {
    return <h1 className="font-medium text-3xl">{children}</h1>
}