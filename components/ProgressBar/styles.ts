import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  --progress-bar-height: 0.4rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 2rem;

  padding-bottom: 0.5rem;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  &:hover div::after {
    opacity: 1;
    transform: scale(100%);
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: var(--progress-bar-height);

  background-color: var(--text-accent-color);
  cursor: pointer;
`;

interface ISliderProps {
  readonly "data-value": number;
  readonly "data-max": number;
}

export const ProgressBarSlider = styled.div.attrs<ISliderProps>((props) => ({
  style: {
    width: props["data-value"] ? `${(props["data-value"] / props["data-max"]) * 100}%` : "0%",
  },
}))`
  position: relative;

  height: 100%;

  background-color: var(--brand-color);
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    right: calc(var(--progress-bar-height) * -1);
    bottom: -50%;

    opacity: 0;
    transform: scale(0%);

    background-color: var(--brand-color);

    width: calc(var(--progress-bar-height) * 2);
    height: calc(var(--progress-bar-height) * 2);

    border-radius: 100%;

    transition: all 0.4s;
  }
`;
