import type { ReactNode } from "react";
import { Container as Wrap } from "./styles";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <Wrap className={className}>{children}</Wrap>;
}
