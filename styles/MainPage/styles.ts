import styled from "styled-components";

export const MainContainer = styled.main`
  --main-container-padding: 0;

  position: absolute;
  top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  min-height: 100vh;

  padding: var(--main-container-padding);

  overflow-x: hidden;

  font-family: var(--font-roboto);

  &.theaterMode__main {
    flex-direction: column;
    padding-top: 0;

    top: 4rem;
    padding: 0;

    #details-container,
    #suggested-container {
      padding: 0 5rem;
    }

    #suggested-container {
      width: 100%;
      max-width: 100%;
      margin-bottom: 5rem;
    }
  }

  @media screen and (min-width: 320px) {
    --main-container-padding: 1rem;
    top: 5rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    --main-container-padding: 2rem 5rem;
  }
`;

export const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: auto;
  height: auto;
`;

export const VideoDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 0.8rem;

  h1 {
    color: var(--text-color);
    font-weight: 500;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 320px) {
    padding: 0;
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
    flex-wrap: wrap;
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
