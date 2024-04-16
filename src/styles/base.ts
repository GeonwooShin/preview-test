import { css } from 'styled-components';

const base = css`
  :root {
    --primary: #531fc2;
    --blue: #14077c;
    --blue-2: #0818a6;
    --gray-1: #0a0a0a;
    --gray-2: #aeaeb2;
    --gray-3: #7b7d82;
    --gray-4: #9e9ea4;
    --gray-5: #d7d7d7;
    --gray-6: #eeeeee;
    --gray-7: #f9f9f9;
    --black: #000000;
    --white: #ffffff;
    --holiday: #ffccd9;
    --task: #1aadf8;
  }
  body {
    margin: auto;
  }
  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }
  a {
    text-decoration: none;
  }
`;

export default base;
