import styled from "styled-components";

interface ISize {
  size?: boolean;
}

export const Container = styled.div<ISize>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;

  .headerContainer {
    display: flex;
    flex: 0.5;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title {
    color: red;
    font-family: "Bebas Neue", cursive;
    font-size: 4.5vw;
  }

  .inputContainer {
    display: flex;
    justify-content: center;
    aling-items: center;
  }

  .searchTitle {
    color: blue;
    font-family: "Bebas Neue", cursive;
    font-size: 1.8vw;
    font-weight: 500;
  }

  .inputStyle {
    border: none;
    height: 2.2vw;
    padding-left: 1vw;
    border-radius: 1vw 0 0 1vw;
    margin-left: 1vw;
    width: 16vw;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .buttonInput {
    border: none;
    background: white;
    border-radius: 0 1vw 1vw 0;
    width: 2vw;
    cursor: pointer;
  }

  .infoContainer {
    display: flex;
    flex: 3;
    justify-content: center;
    padding: 1vw;
  }

  .buttonContainer {
    display: flex;
    flex: 0.4;
    justify-content: space-evenly;
  }

  .icon {
    width: 2vw;
    height: 2vw;
    color: white;
  }

  .buttonIcon {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .grid {
    display: inline-grid;
    grid-gap: 2vw;
    height: fit-content;
    justify-content: center;
    align-items: center;
    grid-template-rows: auto auto auto auto auto;

    grid-template-columns: ${({ size }) =>
      size ? "repeat(1, auto)" : "repeat(2, auto)"};

    align-content: center;
  }

  .container {
    width: 36vw;
    display: flex;
    flex-direction: row;
    height: 12vw;
    border-radius: 6vw 2vw 2vw 6vw;
    border: none;
    cursor: pointer;
  }

  .imageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-top: 1vw;
  }

  .testeImg {
    border-radius: 100%;
    width: 10vw;
  }

  .infosContainer {
    display: flex;
    padding: 1vw;
    flex: 2;
    align-items: center;
    margin: auto;
    flex-direction: column;
  }

  .mainText {
    color: red;
    font-size: ${({ size }) => (size ? "3vw" : "1.8vw")};

    font-family: "Bebas Neue", cursive;
  }

  .dataContainer {
    display: ${({ size }) => (size ? "none" : "flex")};

    flex-direction: row;
    width: 20vw;
  }

  .infoTitle {
    font-size: 1.8vw;
    font-family: "Bebas Neue", cursive;
  }

  .containerInfo {
    display: flex;
    flex-direction: column;
    padding: 1vw;
  }

  .infoText {
    font-family: "Marvel", sans-serif;
    font-size: 1vw;
  }
`;

export const CustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
