import styled from "styled-components";

export const SettingsWrapper = styled.div`
  position: fixed;
  z-index: -1;
  right: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: transparent;
`;

export const SettingsContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 80%;

  z-index: 3;

  width: fit-content;
  height: fit-content;
  max-height: 150px;

  margin-right: 0.5rem;
  padding: 0.2rem 0;
  border-radius: 10px;

  overflow: auto;

  background-color: rgba(29, 29, 29, 0.8);

  transition: all 0.3s;

  @media screen and (min-width: 400px) {
    width: fit-content;
    height: fit-content;
    max-height: 150px;
  }

  @media screen and (min-width: 768px) {
    min-width: 200px;
    max-height: 250px;

    padding: 0.4rem 0;
  }

  /* From https://css.glass */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: #707070 #3d3d3d;
    border-radius: 7px;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #3d3d3d;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #707070;
    border-radius: 5px;
    border: 0px solid #ffffff;
  }
`;

export const SettingsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  height: 100%;

  padding: 0.3rem 0.5rem;

  color: var(--text-color);

  cursor: pointer;

  p {
    color: var(--text-color);
    font-size: 0.9rem;
  }

  &:hover {
    background-color: rgba(185, 185, 185, 0.2);
  }

  @media screen and (min-width: 768px) {
    gap: 0.6rem;
    padding: 0.6rem 1rem;
  }
`;

export const ChosenOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  margin-left: 4rem;

  color: var(--text-color);

  p {
    font-size: 0.75rem;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.4rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  svg,
  p,
  small {
    color: var(--text-color);
  }

  p {
    font-size: 0.75rem;
    font-weight: 500;
  }

  small {
    font-size: 0.65rem;
    text-decoration: underline;
    cursor: pointer;
  }

  svg {
    width: 25px;
    height: 25px;
  }

  @media screen and (min-width: 768px) {
    padding: 0.8rem;

    p {
      font-size: 0.85rem;
    }

    small {
      font-size: 0.75rem;
    }
  }
`;

export const PlaybackSection = styled.div`
  li {
    svg {
      visibility: hidden;
    }
    p {
      font-size: 0.8rem;
    }

    .activeRate {
      visibility: visible;
    }
  }
`;
