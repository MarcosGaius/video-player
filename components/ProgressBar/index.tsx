import * as S from "./styles";
import { forwardRef, ForwardedRef } from "react";

interface IProgressBarProps {
  value: number;
  max: number;
  id: string;
}

export const ProgressBar = forwardRef(function ProgressBar({ value, max, id }: IProgressBarProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <S.ProgressBarWrapper ref={ref} id={id}>
      <S.ProgressBar>
        <S.ProgressBarSlider data-value={value} data-max={max} />
      </S.ProgressBar>
    </S.ProgressBarWrapper>
  );
});
