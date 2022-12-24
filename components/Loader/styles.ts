import styled from "styled-components";

export const VideoLoader = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  svg {
    opacity: 0.8;
    width: 4rem;
    height: auto;
  }
`;
