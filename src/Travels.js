import React from "react";
import Travel from "./Travel";

const travels = [
  {
    id: 1,
    destination: "Salamanca",
    country: "Spain",
    image:
      "http://www.leseco.ma/images/stories/1799/universite-de-Salamanque.jpg",
    distance: "1403.90 km"
  },
  {
    id: 2,
    destination: "Roma",
    country: "Italy",
    image:
      "http://techniquedepeinture.com/wp-custom/uploads/2015/10/chapelle-sixtine.jpg",
    distance: "1427.50 km"
  },
  {
    id: 3,
    destination: "London",
    country: "England",
    image:
      "https://bons-plans-londres.com/wp-content/uploads/2015/12/tour-londres-1200x800_c.jpg",
    distance: "443.20 km"
  },
  {
    id: 4,
    destination: "Berlin",
    country: "Germany",
    image:
      "https://www.vanupied.com/wp-content/uploads/Brandenburger_Tor_abends.jpg",
    distance: "927.60 km"
  },
  {
    id: 5,
    destination: "Versailles",
    country: "France",
    image:
    "https://www.petitfute.com/medias/professionnel/25641/premium/600_450/020543-versailles-chateau-de-versailles.jpg",
    distance: "165.70 km"
  }
];

const Travels = () => (
  <div>
    {travels.map((voyage, index) => (
        <ul key={index}>
            <Travel {...voyage}/>
        </ul>
    ))}
  </div>
);

export default Travels;