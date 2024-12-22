import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const Search = () => {
  let [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;
  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      <h1>Restultados disponiveis</h1>
      <ul className="products">
        {error && <p>{error}</p>}
        {loading && <p>Carrregando...</p>}
        {items &&
          items.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>R$: {product.price}</p>
              <Link to={`/products/${product.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
