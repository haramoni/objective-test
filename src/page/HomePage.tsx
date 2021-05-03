import React, { useEffect, useState } from "react";
import keys from "../keys.json";
import md5 from "md5";
import { Container } from "../styles/styleModal";

function HomePage(props: any) {
  console.log(props.data);

  let publicKey = keys.publickey;
  let privateKey = keys.privatekey;
  let date = Date.now();
  let timestamp = date.toString();
  let hash = md5(timestamp + privateKey + publicKey);

  // useEffect(() => {
  //   api
  //     .get(
  //       // `/v1/public/characters?limit=50&offset=50&orderBy=-modified&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  //       `/v1/public/characters?limit=10&offset=${startOffSet}&orderBy=-modified&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`
  //     )
  //     .then((response) => {
  //       setData(response.data.data.results);
  //     });
  // }, [startOffSet]);

  return (
    <Container>
      <h1>{props.data.name}</h1>
      <span>Comics:</span>
      <div className="infoContainer">
        {props.data.comics.items.map((item: any, index: any) => {
          return (
            <div>
              <span>{item.name}</span>
            </div>
          );
        })}
        {props.size && (
          <>
            <div>
              <span>Series:</span>
              {props.data.series.items.map((item: any, index: any) => {
                return (
                  <div>
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <span>Eventos:</span>
              {props.data.events.items.map((item: any, index: any) => {
                return (
                  <div>
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default HomePage;
