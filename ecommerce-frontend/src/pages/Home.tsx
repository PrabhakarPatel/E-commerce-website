import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="FindMore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="sdhshs"
          name="Windows 11"
          price={7878}
          stock={3}
          photo="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71aTEZOda0L._AC_SX679_.jpg"
          handler={addToCartHandler}
        />
      </main>
    </div>
  );
};

export default Home;
