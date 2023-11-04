import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: Math.random(),
    title: "Sushi",
    price: 9.99,
    description: "Sushi avocado Roll",
  },
  {
    id: Math.random(),
    title: "T-Bone",
    price: 24.99,
    description: "Delicious T-Bone meat",
  },
  {
    id: Math.random(),
    title: "Naruto Ramen",
    price: 12.99,
    description: "Naruto Style Ramen",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <ProductItem key={product.id} item={product} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
