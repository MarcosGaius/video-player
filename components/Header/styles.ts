import styled from "styled-components";

export const MainHeader = styled.header`
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;
  padding: 0.8rem 5rem;

  width: 100%;

  background-color: var(--accent-background);

  p {
    background-color: var(--text-color);
    color: var(--main-background);
    font-weight: 600;
    padding: 0.5rem;
  }
`;
