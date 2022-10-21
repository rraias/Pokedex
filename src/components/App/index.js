import {
  useEffect, useMemo, useState, useRef, useCallback,
} from 'react';
import fetchApi from '../../Service';
import Footer from '../Footer';
import Loader from '../Loader';
import MainSection from '../Main';
import Pagination from '../Common/Pagination';
import Header from '../Header';

function App() {
  const nameRef = useRef();

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiCall, setApiCall] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 18;

  const currentPokemonData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return pokemons.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemons]);

  useEffect(() => {
    (async () => {
      const data = await fetchApi();
      setPokemons(data);
      setLoading(false);
    })();
  }, [apiCall]);

  const handleSearch = useCallback(() => {
    setLoading(true);
    setPokemons((prevState) => (
      prevState.filter((el) => (el.name.toLowerCase().includes(nameRef.current.value.toLowerCase())
      || el.id.toString() === nameRef.current.value
        ? el : ''))));
    setCurrentPage(1);
    setLoading(false);
  }, [pokemons]);

  const handleReset = useCallback(() => {
    nameRef.current.value = '';
    setLoading(true);
    setApiCall(apiCall !== true);
  }, [apiCall]);

  return (
    <>
      <Header />
      {loading ? <Loader />
        : (
          <MainSection
            nameRef={nameRef}
            handleSearch={handleSearch}
            handleReset={handleReset}
            pokemons={currentPokemonData}
          />
        )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={pokemons.length}
        siblingCount={3}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <Footer />
    </>
  );
}

export default App;
