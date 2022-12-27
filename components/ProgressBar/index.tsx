import * as S from "./styles";
import { forwardRef, ForwardedRef } from "react";

interface IProgressBarProps {
  value: number;
  max: number;
  id: string;
}

export const ProgressBar = forwardRef(function ProgressBar({ value, max, id }: IProgressBarProps, ref: ForwardedRef<HTMLDivElement>) {
  return (
    <S.ProgressBarWrapper ref={ref} id={id} data-type="controller">
      <S.ProgressBar data-type="controller">
        <S.ProgressBarSlider data-value={value} data-max={max} id="progress-bar-slider" data-type="controller" />
      </S.ProgressBar>
    </S.ProgressBarWrapper>
  );
});
