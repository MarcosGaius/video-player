import styled from "styled-components";

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;

  width: 100%;
  height: auto;

  padding: 0.8rem 1.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    color: var(--text-color);

    border: none;
    outline: none;

    width: 1.5rem;
    height: 1.5rem;

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
`;

export const ControlButtons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const RightControls = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LeftControls = styled.ul`
  display: flex;
  align-items: center;

  gap: 1rem;

  .videoTimer {
    display: flex;
    align-items: center;
    height: 100%;
  }

  p {
    font-family: var(--font-roboto);
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 400;
  }
`;
