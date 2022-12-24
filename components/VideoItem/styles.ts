import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  gap: 0.5rem;

  img {
    width: 170px;
    height: 90px;
    border-radius: 5px;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  color: var(--text-color);

  p {
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--text-color);
  }

  .videoInfos {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    small {
      opacity: 0.7;
      font-size: 0.8rem;
      font-weight: 300;
    }
  }
`;
