
import './Estilos.css'

import ListPokemons from "./components/ListPokemons";
import PokeContext from "../src/components/providers/PokeContext";
function App() {
  return (
    <PokeContext>
      <div className="">
   
   <ListPokemons/>
 </div>
    </PokeContext>
  );
}

export default App;

