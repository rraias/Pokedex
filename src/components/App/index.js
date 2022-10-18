import { createContext, useEffect, useRef, useState } from "react";
import fetchApi from "../../Service";
import Loader from "../Loader";
import MainSection from "../Main";
export const PokemonsContext = createContext('pokemons');


function App() {
  let start = useRef(1);
  let end = useRef(19);

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiCall, setApiCall] = useState(true);

  useEffect(() => {
      (async () => {
        const data = await fetchApi(start.current, end.current);
        setPokemons(data);
        setLoading(false);
      })();
  }, [apiCall]);

  function handleNext(){
    setApiCall(apiCall === true? false : true);
    window.scrollTo(0, 0);
    start.current += 18
    end.current += 18;
    setLoading(true)
  }

  function handlePrevious(){
    setApiCall(apiCall === true? false : true);
    window.scrollTo(0, 0);
    start.current -= 18
    end.current -= 18;
    setLoading(true)
 }





  return (
    <PokemonsContext.Provider value={pokemons}>
      {loading ? <Loader/> :
    <MainSection 
    handleNext={handleNext}
    handlePrevious={handlePrevious}
    />
  }
    </PokemonsContext.Provider>
  );
}

export default App;
