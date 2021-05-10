import styled from "styled-components";

interface ISize {
  size?: boolean;
}

export const Container = styled.div<ISize>`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  font-family: PT Sans Caption;

  .headerContainer {
    display: flex;
    flex: 0.8;
    align-items: center;
    flex-direction: row;
    background: white;
    justify-content: ${({ size }) => (size ? "center" : "space-between")};
    padding: 1vw;

    img {
      width: 8vw;
    }
  }

  .buttonInput {
    height: 1.6vw;
    width: 1vw;
    border: none;
    background: #ffffff;
    cursor: pointer;
    margin-top: auto;
  }

  .button {
    text-align: left;
    background: transparent;
    border: none;
  }

  .content {
    display: flex;
    flex: 11;
    padding: 1vw 10vw 0vw 10vw;
    flex-direction: column;
  }

  .candidateInfo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20vw;

    span {
      color: #555555;
      font-size: 1vw;
    }

    span:first-child {
      font-weight: bold;
    }
  }

  .box {
    background: #f5f5f5;
    width: 1.8vw;
    height: 1.8vw;
    border-radius: 0.3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .searchContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1vw 10vw 1vw 10vw;
    justify-content: space-evenly;
    align-items: ${({ size }) => (size ? "center" : "")};

    h1 {
      font-family: PT Sans Caption;
      color: #555555;
      font-size: 1.9vw;
    }

    h2 {
      color: #555555;
      font: PT Sans Caption;
      margin-top: 0.6vw;
      font-size: 1vw;
    }

    input {
      width: 15vw;
      border: none;
      height: 1.6vw;
      margin-top: 0.6vw;
      padding-left: 1vw;

      font: italic normal normal 14px/19px PT Sans;
      letter-spacing: 0px;
      color: #8e8e8e;
      outline: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  .contentTitle {
    padding: 1vw 10vw 0vw 10vw;
    display: flex;
    width: 100vw;
    flex: 0.1;
  }

  .title {
    width: 26vw;
    margin-top: auto;
    text-align: left;
    font-family: PT Sans;
    font-size: 0.6;
    letter-spacing: 0px;
    color: #8e8e8e;
    padding-left: 1.2vw;
    opacity: 1;
  }

  .heroInfo {
    display: flex;
    height: 5.7vw;
    margin-top: 1vw;
    width: 100%;
    background: #ffffff;
    border-radius: 0.3vw;
    flex-direction: row;

    cursor: pointer;
  }

  .character {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .series {
    display: ${({ size }) => (size ? "none" : "flex")};
    flex: 1;
    flex-direction: column;
    justify-content: center;
    color: #555555;
    font-family: PT Sans;
    font-size: 0.9vw;
  }

  .events {
    display: ${({ size }) => (size ? "none" : "flex")};
    flex: 1;
    flex-direction: column;
    justify-content: center;
    color: #555555;
    font-family: PT Sans;
    font-size: 0.9vw;
  }

  .testeImg {
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 0.2vw;
    margin-left: 1.2vw;
  }

  .mainText {
    margin-left: 1.5vw;
    font-family: PT Sans;
    font-size: 0.9vw;
    font-size: ${({ size }) => (size ? "2vw" : "0.9vw")};

    font-weight: bold;
    letter-spacing: 0px;
    color: #555555;
  }

  .navigation {
    display: flex;
    margin-top: 2vw;
    background: #ffffff;
    padding: 2vw;
    align-items: center;
    justify-content: center;
    height: 5vw;

    .navigationButton {
      width: 2.5vw;
      height: 2.5vw;
      background: #f5f5f5 0% 0% no-repeat padding-box;
      border: 1px solid #e5e5e5;
      opacity: 1;
      border-radius: 0.3vw;
      cursor: pointer;
    }
  }

  .buttonContainer {
    width: 20vw;
    display: flex;
    justify-content: space-evenly;
  }

  .inputContainer {
    display: flex;
    align-items: center;
    flex; 1;
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
