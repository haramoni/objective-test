import React, { useState, useEffect } from "react";
import { Container, CustomStyles } from "../styles/style";
import { FaSearch } from "react-icons/fa";
import api from "../services/api";
import Modal from "react-modal";
import ModalComponent from "../components/modal";
import keys from "../keys.json";
import md5 from "md5";

import Logo from "../assets/logo.png";

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
  const [series, setSeries] = useState<any>();
  // We listen to the resize event

  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vw = window.innerWidth;
    if (vw < 800) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  });

  let publicKey = keys.publickey;
  let privateKey = keys.privatekey;
  let date = Date.now();
  let timestamp = date.toString();
  let hash = md5(timestamp + privateKey + publicKey);

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
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="candidateInfo">
          <span>Júlia Haramoni</span>
          <span>Teste de Front-end</span>
          <span className="box">CB</span>
        </div>
      </div>

      <div className="searchContainer">
        <h1>Busca de personagens</h1>
        <h2>Nome do personagem</h2>
        <div className="inputContainer">
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
      <div className="contentTitle">
        <div className="title">Personagem</div>
        <div className="title">{windowSize ? "" : "Séries"}</div>
        <div className="title">{windowSize ? "" : "Eventos"}</div>
      </div>
      <div className="content">
        {data.map((item: any, index: any) => {
          return (
            <button
              onClick={openModal.bind(this, item, index)}
              className="button"
            >
              <div className="heroInfo">
                <div className="character">
                  <img
                    className="testeImg"
                    src={item.thumbnail.path + "/standard_medium.jpg"}
                    alt=""
                  />
                  <span className="mainText">{item.name}</span>
                </div>
                <div className="series">
                  {item.series.items.map((item: any, index: any) => {
                    if (index < 3) {
                      return <span>{item.name}</span>;
                    }
                  })}
                </div>
                <div className="events">
                  {item.events.items.map((item: any, index: any) => {
                    if (index < 3) {
                      return <span>{item.name}</span>;
                    }
                  })}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="navigation">
        <div className="buttonContainer">
          <button
            className="navigationButton"
            onClick={(e) => setStartOffSet(0)}
          >
            1
          </button>
          <button
            className="navigationButton"
            onClick={(e) => setStartOffSet(10)}
          >
            2
          </button>
          <button
            className="navigationButton"
            onClick={(e) => setStartOffSet(20)}
          >
            3
          </button>
          <button
            className="navigationButton"
            onClick={(e) => setStartOffSet(30)}
          >
            4
          </button>
          <button
            className="navigationButton"
            onClick={(e) => setStartOffSet(40)}
          >
            5
          </button>
        </div>
      </div>

      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={CustomStyles}
        contentLabel="Example Modal"
      >
        <ModalComponent data={info} size={windowSize} />
      </Modal>
    </Container>
  );
}

export default Home;
