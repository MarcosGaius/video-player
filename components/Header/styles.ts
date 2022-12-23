import styled from "styled-components";

export const MainHeader = styled.header`
  position: fixed;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;

  width: 100vw;
  height: 5rem;

  background-color: var(--accent-background);

  P {
    background-color: var(--text-color);
    color: var(--main-background);
    font-weight: 600;
    padding: 0.5rem;
  }
`;
