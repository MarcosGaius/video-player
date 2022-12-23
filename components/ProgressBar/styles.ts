import styled from "styled-components";

export const MinimalProgressBar = styled.progress`
  &[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border: none;
    width: 100%;
    height: 0.4rem;

    background-color: var(--text-accent-color);

    cursor: pointer;
  }

  &[value]::-webkit-progress-bar {
    background: var(--text-accent-color);
  }

  &[value]::-webkit-progress-value {
    background: var(--brand-color);
  }

  &[value]::-moz-progress-bar {
    background: var(--brand-color);
  }
`;
