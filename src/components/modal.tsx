import React, { useEffect, useState } from "react";
import keys from "../keys.json";
import md5 from "md5";
import { Container } from "../styles/styleModal";

function modal(props: any) {
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

export default modal;
