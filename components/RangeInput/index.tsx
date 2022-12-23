import * as S from "./styles";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function RangeInput({ defaultValue, onChange }: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return <S.MinimalRangeInput type="range" min={0} max={100} defaultValue={defaultValue} onChange={onChange} />;
}
