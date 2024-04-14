import { useState } from 'react'

//Modelo clássico
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';


function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    //Separa todos os colaboradores que existem em um novo array e adiciona o colaborador no final
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
  </div>
  );
}

export default App;
