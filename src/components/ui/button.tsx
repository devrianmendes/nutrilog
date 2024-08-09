import { ChildrenProps } from "@/types/types";

type ButtonProps = {
  children: React.ReactNode;
  extraClass?: string;
}

export default function Button({children, extraClass}: ButtonProps) {
  return (
    <button className={`w-full p-2 bg-stone-100 font-semibold ${extraClass}`}>
      {children}
    </button>
  );
}
