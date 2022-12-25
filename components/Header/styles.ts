import styled from "styled-components";

export const MainHeader = styled.header`
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  width: 100%;
  height: 4rem;

  background-color: var(--accent-background);

  p {
    background-color: var(--text-color);
    color: var(--main-background);
    font-weight: 600;
    padding: 0.5rem;
  }

  @media screen and (min-width: 320px) {
    justify-content: initial;
    padding: 1rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem 5rem;
  }
`;
