import styled from "styled-components";

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: none;
  flex-direction: column-reverse;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 0.8rem 1.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    color: var(--text-color);

    border: none;
    outline: none;

    width: 1.1rem;
    height: 1.1rem;

    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      opacity: 0.9;
    }

    svg:hover {
      opacity: 1;
    }
  }

  .volumeControls {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      display: none;
      width: 4rem;
    }

    &:hover > input {
      display: flex;
    }
  }

  #volume-button,
  #theater-button {
    display: none;
  }

  @media screen and (min-width: 400px) {
    flex-direction: column;
    justify-content: initial;
    gap: 0.3rem;

    #volume-button,
    #theater-button {
      display: flex;
    }

    height: auto;
  }

  @media screen and (min-width: 768px) {
    button {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  @media screen and (min-width: 400px) {
    height: initial;
  }
`;

export const RightControls = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;

  @media screen and (min-width: 400px) {
    flex-direction: initial;
    justify-content: initial;
  }
`;

export const LeftControls = styled.ul`
  display: flex;
  align-items: center;

  justify-content: center;
  width: 100%;

  gap: 1rem;

  .videoTimer {
    display: flex;
    align-items: flex-end;
    height: 100%;
    order: -1;
    flex-grow: 1;
  }

  #play-button,
  #skip-button {
    flex-grow: 1;
  }

  p {
    line-height: initial;
    font-family: var(--font-roboto);
    color: var(--text-color);
    font-size: 0.75rem;
    font-weight: 400;
  }

  @media screen and (min-width: 400px) {
    width: initial;

    .videoTimer {
      align-items: initial;
      line-height: 0;
      height: initial;
      width: initial;
      order: initial;
      flex-grow: initial;
    }
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 0.9rem;
    }
  }
`;
