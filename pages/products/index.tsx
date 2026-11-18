import { GetServerSideProps } from "next";

interface product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface ProductsProps {
  products: product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div>
      <h1>Our Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<ProductsProps> = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: product[] = await response.json();

  return {
    props: {
      products,
    },
  };
}
