import React, { useState, useContext } from 'react';

import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { SidebarContext } from '../contexts/SidebarContext';
import Product from '../components/Product';


const ProductDetails = () => {

  const { isOpen, HandleClose } = useContext(SidebarContext);
  const { filterProducts } = useContext(ProductContext)

  const [clickOnCart, setClickOnCart] = useState(false)

  const viewCart = () => {
    setClickOnCart(!clickOnCart);
    HandleClose();
  }

  const { id } = useParams()
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);


  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <div className="w-full h-screen justify-center items-center flex flex-col">
        <h1 className='text-3xl font-bold'>
          Hold a moment... <br />
        </h1>
        <br />
        <div className="loader"></div>
      </div>
    )
  }

  const myFunction = () => {
    if (clickOnCart === false) {
      addToCart(product, product.id);
      viewCart();
    }
    else {
      HandleClose();
    }
  }

  const { title, price, description, image } = product;

  return (
    <div>
      <section className="pt-8 pb-8 lg:py-12 min-h-screen flex flex-col lg:flex-row items-center justify-center">
        <div className="container mx-auto mt-10">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:flex-wrap">
            <div className="flex-1 mb-4 lg:mb-4 lg:mr-4 w-full lg:w-1/2 flex items-center justify-center">
              <img className="max-w-[200px] lg:max-w-[300px]" src={image} alt="Product" />
            </div>
            <div className="flex-1 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-lg lg:text-4xl font-medium mb-2 max-w-2xl mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-lg font-medium mb-4">$ {Math.round(price)}</div>
              <p className="mb-4">{description}</p>
              <button
                onClick={() => myFunction()}
                className="bg-transparent text-black hover:outline py-2 px-4 lg:py-4 lg:px-8  rounded mb-2 lg:mb-0"
              >
                {clickOnCart
                  ? (isOpen ? "Shop more" : "Go to Cart")
                  : "Add to cart"}
              </button>
              <Link to={"/payment"}
                className="bg-transparent text-black hover:outline py-2 px-4 lg:py-4 lg:px-8  rounded"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default ProductDetails;
