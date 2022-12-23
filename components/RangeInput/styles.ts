import styled from "styled-components";

export const MinimalRangeInput = styled.input`
  &[type="range"] {
    -webkit-appearance: none;

    height: 20px;
    width: 100%;

    background-color: transparent;
  }

  &[type="range"]:focus {
    outline: none;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: var(--text-accent-color);
  }

  &[type="range"]::-webkit-slider-thumb {
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: var(--text-color);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }

  &[type="range"]::-webkit-slider-thumb::before {
    content: "";
    background: var(--text-color);
    width: 100%;
    height: 3px;
  }

  &[type="range"]:focus::-webkit-slider-runnable-track {
    background: var(--text-accent-color);
  }

  &[type="range"]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000;
    background: var(--text-accent-color);
    border-radius: 0px;
    border: 0px solid #000000;
  }

  &[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: var(--text-color);
    cursor: pointer;
  }

  &[type="range"]::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &[type="range"]::-ms-fill-lower {
    background: #dddddd;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }

  &[type="range"]::-ms-fill-upper {
    background: #dddddd;
    border: 0px solid #000000;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #000000;
  }

  &[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: var(--text-color);
    cursor: pointer;
  }

  &[type="range"]:focus::-ms-fill-lower {
    background: #dddddd;
  }

  &[type="range"]:focus::-ms-fill-upper {
    background: #dddddd;
  }
`;
