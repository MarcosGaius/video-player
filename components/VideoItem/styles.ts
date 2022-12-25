import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 320px) {
    img {
      width: 170px;
      height: 90px;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0 0.8rem;

  color: var(--text-color);

  p {
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--text-color);
  }

  .videoInfos {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;

    small {
      opacity: 0.7;
      font-size: 0.7rem;
      font-weight: 300;
    }
  }

  @media screen and (min-width: 320px) {
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    gap: 0.6rem;

    p {
      font-size: 0.95rem;
    }

    .videoInfos {
      gap: 0.3rem;

      small {
        font-size: 0.8rem;
      }
    }
  }
`;
