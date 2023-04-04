import { Link, useParams } from 'react-router-dom';

const ProductsDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Products Details!</h1>
      <p>{params.productId}</p>
      <p>
        Back to <Link to="/products">Products.</Link>
      </p>
    </>
  );
};
export default ProductsDetailPage;
