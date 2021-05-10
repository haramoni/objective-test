import { Container } from "../styles/styleModal";

function modal(props: any) {
  console.log(props);
  return (
    <Container>
      <h1>{props.data.name}</h1>
      <div className="infoContainer">
        <span>{props.data.description}</span>
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
