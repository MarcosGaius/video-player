import styled from "styled-components";

export const VideoWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  video {
    width: 100%;
    height: 100%;
  }

  &.theaterMode__video {
    background-color: #000000;

    video {
      width: auto;
      height: 80vh;
    }
  }

  @media screen and (min-width: 768px) {
    &:hover > #controls-container {
      display: flex;
    }
  }
`;
