import { ReactNode } from "react";
import * as S from "./styles";

interface ITextProps {
  children: ReactNode;
}

export default function Text({ children }: ITextProps) {
  return <S.Paragraph>{children}</S.Paragraph>;
}
