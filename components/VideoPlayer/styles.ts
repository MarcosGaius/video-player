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

  &:hover > #controls-container {
    display: flex;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  }
`;
