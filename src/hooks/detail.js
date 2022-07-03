import { useParams } from "react-router-dom";
import datas from "../data/destination.json";

export default function Detail() {
  let voyage = useParams().id;
  console.log([0, 1, 2, 3].indexOf(voyage));
  if (["0", "1", "2", "3"].indexOf(voyage) === -1)
    window.location.href = "/error";
  const data = datas[voyage];

  return (
    <div className="details">
      <section>
        <h1>{data.titre}</h1>
        <p>
          Note: {data.note}, Location: {data.location}
        </p>
        <img src={data.image} alt="Aperçu de la location" />
      </section>
      <section className="description">
        <p>{data.capacité}</p>
        <p>{data.description}</p>
      </section>
      <aside className="price">{data.prix}€/nuit</aside>
    </div>
  );
}
