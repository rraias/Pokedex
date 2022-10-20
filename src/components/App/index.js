import { createContext, useEffect, useMemo, useState, useRef } from "react";
import fetchApi from "../../Service";
import Footer from "../Footer";
import Loader from "../Loader";
import MainSection from "../Main";
import Pagination from '../Common/Pagination'
export const PokemonsContext = createContext('pokemons');



function App() {

  const nameRef = useRef();

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiCall, setApiCall] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 18;

  const currentPokemonData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return pokemons.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, pokemons])

  useEffect(() => {
    (async () => {
      const data = await fetchApi();
      setPokemons(data);
      setLoading(false);
    })();
  }, [apiCall]);

  function handleSearch(){
    setLoading(true);
    setPokemons((prevState) => 
    prevState.filter((el) =>
    el.name.toLowerCase().includes(nameRef.current.value.toLowerCase()) ? el : ''));
    setLoading(false);
  };

  function handleReset(){
    nameRef.current.value = ''
    setLoading(true);
    setApiCall(apiCall === true ? false : true)
  }


  return (
    <PokemonsContext.Provider value={currentPokemonData}>
      {loading ? <Loader /> :
        <MainSection
        nameRef={nameRef} 
        handleSearch={handleSearch}
        handleReset={handleReset}
        />
      }
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={pokemons.length}
        siblingCount={3}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      <Footer />
    </PokemonsContext.Provider>
  );
}

export default App;
