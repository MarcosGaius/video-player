import styled from "styled-components";

export const MainContainer = styled.main`
  --suggestion-width: 400px;

  position: absolute;
  top: 5rem;

  display: flex;
  /* flex-wrap: wrap; */
  gap: 2rem;
  justify-content: space-between;
  /* align-items: center; */

  min-height: 100vh;

  padding: 2rem 5rem;

  overflow-x: hidden;

  font-family: var(--font-roboto);
`;

export const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: calc(100% - var(--suggestion-width));
  height: auto;
`;

export const VideoDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: var(--text-color);
    font-weight: 500;
    font-size: 1.2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  color: var(--text-color);

  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  padding: 1rem;

  cursor: pointer;

  span {
    font-size: 0.95rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.1rem;
  }

  .videoStats {
    display: flex;
    gap: 0.5rem;

    font-weight: 500;
  }

  #video-tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    opacity: 0.5;

    font-size: 0.85rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
