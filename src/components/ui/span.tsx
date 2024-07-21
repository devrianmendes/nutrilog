type SpanProps = React.HTMLProps<HTMLSpanElement> & {
  spanType?: string;
  extraClass?: string;
};

export function Span({ children, spanType, extraClass }: SpanProps) {
  return (
    <span
      className={`font-bold m-auto ${extraClass} ${
        spanType === "error" ? "text-errorRed" : "text-midGreen"
      } `}
    >
      {children}
    </span>
  );
}
