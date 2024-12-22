import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <h1> Id do produto {id}</h1>
      {error && <p>Ocorreu um erro.</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
