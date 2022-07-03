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
      <section className="detailhead">
        <h1>{data.titre}</h1>
        <p>
          Note: {data.note}, Location: {data.location}
        </p>
      </section>
      <section className="detaildescription">
        <img src={data.image} alt="Aperçu de la location" />
        <p>{data.capacité}</p>
        <p>{data.description}</p>
      </section>
      <aside className="detailprice">{data.prix}€/nuit</aside>
    </div>
  );
}
