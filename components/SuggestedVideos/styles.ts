import styled from "styled-components";

export const SuggestionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 100vw;
  min-height: 100vh;

  margin-bottom: 2rem;

  @media screen and (min-width: 500px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) and (max-width: 1366px) {
    width: 350px;
    max-width: 350px;
    gap: 1.5rem;
  }

  @media screen and (min-width: 1366px) {
    width: 400px;
    max-width: 400px;
  }
`;

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FilterButton = styled.button`
  position: absolute;
  z-index: 2;

  background-color: var(--main-background);

  height: 110%;
  width: auto;

  padding: 0.5rem;
  border-radius: 100%;
  outline: none;
  border: none;

  cursor: pointer;

  &#start-arrow {
    display: none;
    left: -10px;
  }

  &#end-arrow {
    display: none;
    right: -10px;
  }

  &:hover {
    background-color: var(--accent-background);
  }

  @media screen and (min-width: 320px) {
    &#start-arrow,
    &#end-arrow {
      display: block;
    }
  }
`;

export const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    height: 110%;
    width: auto;

    color: var(--text-color);
  }
`;

interface IFilterButtons {
  readonly "data-translate": number;
}

export const FiltersButtons = styled.div<IFilterButtons>`
  display: flex;
  gap: 0.6rem;
  width: 100%;

  overflow: auto;

  padding: 0 0.5rem;

  .activeFilter {
    color: #383838;
    background-color: var(--text-color);

    &:hover {
      background-color: var(--text-color);
    }
  }

  button {
    transform: ${(props) => {
      return `translateX(${props["data-translate"]}px)`;
    }};

    min-width: max-content;

    border: none;
    outline: none;

    padding: 0.5rem;
    border-radius: 10px;

    background-color: #383838;

    font-family: var(--font-roboto);
    font-weight: 500;

    color: var(--text-color);

    cursor: pointer;

    &:hover {
      background-color: #4d4d4d;
    }
  }

  @media screen and (min-width: 320px) {
    padding: 0;
    overflow: hidden;
  }
`;
