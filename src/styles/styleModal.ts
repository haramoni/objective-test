import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 40vw;

  h1 {
    color: red;
    font-family: "Bebas Neue", cursive;
  }

  span {
    font-family: "Marvel", sans-serif;
    font-size: 1vw;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 60vw;
  }
`;
