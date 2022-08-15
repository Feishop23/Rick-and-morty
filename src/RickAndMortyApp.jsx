import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardCharacter } from "./componentes/CardCharacter";
import useLocationApi from "./componentes/Hooks/useLocationApi";
import { LocationInfo } from "./componentes/LocationInfo";
import Paginacion from "./componentes/paginacion/Paginacion";
import Serch from "./componentes/Serch";

export const RickAndMortyApp = () => {
  const [valueSercht, setvalueSercht] = useState();
  const location = useLocationApi(valueSercht);
  
      // La paginacion empieza aqui
  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);
  const maximo = Math.ceil(location?.residents.length / porPagina)
  console.log(maximo);
  // ***************

  return (
    <div>
      <div className="boxImg">
        <img className="Fondo" src="https://i.pinimg.com/564x/26/7a/c4/267ac49d05f91fc8c8812ddafac01eae.jpg" alt="" />
      </div>

      <Serch setvalueSercht={setvalueSercht} />
      <LocationInfo location={location} />
      <div className="containerCard">
        {location?.residents
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((resident) => (
            <CardCharacter key={resident} resident={resident} />
            ))}
        
      </div>
            <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
    </div>
  );
};
