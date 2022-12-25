import styled from "styled-components";

export const SuggestionsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: var(--suggestion-width);

  margin-bottom: 2rem;

  @media screen and (min-width: 320px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    gap: 0.5rem;
  }
`;
