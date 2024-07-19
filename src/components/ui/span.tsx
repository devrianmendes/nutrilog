type SpanProps = React.HTMLProps<HTMLSpanElement> & {
  spanType?: string;
};

export function Span({ children, spanType }: SpanProps) {
  return (
    <span
      className={`font-bold m-auto ${
        spanType === "error" ? "text-errorRed" : "text-midGreen"
      } `}
    >
      {children}
    </span>
  );
}
