import * as S from "./styles";
import { DetailedHTMLProps, ProgressHTMLAttributes, forwardRef, ForwardedRef } from "react";

export const ProgressBar = forwardRef(function ProgressBar(
  { value, max }: DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>,
  ref: ForwardedRef<HTMLProgressElement>
) {
  return <S.MinimalProgressBar value={value} max={max} ref={ref}></S.MinimalProgressBar>;
});
