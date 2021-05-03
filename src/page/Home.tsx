import React, { useState, useEffect } from "react";
import { Container, CustomStyles } from "../styles/style";
import { FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import api from "../services/api";
import Modal from "react-modal";
import HomePage from "./HomePage";
import keys from "../keys.json";
import md5 from "md5";

function Home() {
  const [data, setData] = useState([]);
  const [numberPages, setNumberPages] = useState<any>();
  const [startOffSet, setStartOffSet] = useState<number>(0);
  const [isShown, setIsShown] = useState(true);
  const [name, setName] = useState();
  const [reload, setReload] = useState(false);
  const [modal, setModal] = useState<any>(false);
  const [info, setInfo] = useState<any>();
  const [windowSize, setWindowSize] = useState(false);
  // We listen to the resize event

  let publicKey = keys.publickey;
  let privateKey = keys.privatekey;
  let date = Date.now();
  let timestamp = date.toString();
  let hash = md5(timestamp + privateKey + publicKey);

  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vw = window.innerWidth;
    if (vw < 800) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  });

  useEffect(() => {
    api
      .get(
        `/v1/public/characters?limit=10&offset=${startOffSet}&orderBy=-modified&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      )
      .then((response) => {
        setData(response.data.data.results);
        setReload(false);
      });
  }, [startOffSet, reload]);

  function handlePrev() {
    if (startOffSet >= 0) {
      setStartOffSet(startOffSet - 10);
    }
  }

  function handleNext() {
    setStartOffSet(startOffSet + 10);
  }

  function handleButton() {
    if (name) {
      api
        .get(
          // `/v1/public/characters?limit=50&offset=50&orderBy=-modified&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
          `/v1/public/characters?name=${name}&orderBy=-modified&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        )
        .then((response) => {
          setData(response.data.data.results);
        });
    } else {
      setReload(true);
    }
  }

  function closeModal() {
    setModal(false);
  }
  function openModal(item: any, index: any) {
    setInfo(item);
    setModal(true);
  }

  return (
    <Container size={windowSize}>
      <div className="headerContainer">
        <h1 className="title">Busca de Personagens</h1>
        <div className="inputContainer">
          <span className="searchTitle">Nome do Personagem: </span>
          <input
            className="inputStyle"
            type="text"
            placeholder="Search.."
            onChange={(e: any) => setName(e.target.value)}
          />
          <button className="buttonInput" onClick={handleButton}>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="infoContainer">
        <div className="grid">
          {data.map((item: any, index: any) => {
            return (
              <button
                onClick={openModal.bind(this, item, index)}
                className="container"
              >
                <div className="imageContainer">
                  <img
                    className="testeImg"
                    src={item.thumbnail.path + "/standard_xlarge.jpg"}
                    alt=""
                  />
                </div>
                <div className="infosContainer">
                  <span className="mainText">{item.name}</span>
                  <div className="dataContainer">
                    <div className="containerInfo">
                      <span className="infoTitle">Series</span>
                      <span className="infoText">
                        {item.series.items.name
                          ? item.series.items.name
                          : "Sem séries disponíveis!"}
                      </span>
                    </div>
                    <div className="containerInfo">
                      <span className="infoTitle">Eventos</span>
                      <span className="infoText">
                        {item.events.items[index]
                          ? item.events.items[index].name
                          : "Sem eventos!"}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="buttonContainer">
        {isShown && (
          <>
            <button onClick={handlePrev} className="buttonIcon">
              <FaArrowLeft className="icon" />
            </button>
            <button onClick={handleNext} className="buttonIcon">
              <FaArrowRight className="icon" />
            </button>
          </>
        )}
      </div>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={CustomStyles}
        contentLabel="Example Modal"
      >
        <HomePage data={info} size={windowSize} />
      </Modal>
    </Container>
  );
}

export default Home;
