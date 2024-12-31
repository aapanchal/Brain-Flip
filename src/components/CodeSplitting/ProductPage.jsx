import FeaturedProducts from "./FeaturedProducts";
import ProductList from "./ProductList";
import Heading from "./Heading";

// eslint-disable-next-line react/prop-types
function ProductPage({ products, heading }) {
    // eslint-disable-next-line react/prop-types
    const featuredProducts = products.filter(product => product.featured);
    // eslint-disable-next-line react/prop-types
    const totalProducts = products.length;
  return (
    <div className="m-2">
      <Heading
        heading={heading}
        totalProducts={totalProducts} />

      <ProductList
        products={products} />

      <FeaturedProducts
        featuredProducts={featuredProducts} />  

    </div>
  );
}

export default ProductPage;
