import { Link } from 'react-router-dom';

const DUMMY_PRODUCTs = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
];

const ProductsPage = () => {
  return (
    <>
      <h1>My Product Page</h1>
      <ul>
        {DUMMY_PRODUCTs.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ProductsPage;
