


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AppLayout from '../Layout/AppLayout';


const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [id]);

  const addToCart = () => {
    // Implement logic to add the product to the cart
    // You can use localStorage, Redux, or any other state management solution
    // For simplicity, let's assume we are storing cart items in localStorage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Redirect to the shopping cart page
    window.location.href = '/cart';
  };

  if (!product) {
    return <div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700"></div>;
  }

  return (
    <AppLayout>
      <div className="flex justify-center items-center h-screen py-[200px] p-[70px] mb-[70px] w-full">
        <div className="rounded-lg shadow-md overflow-hidden w-[700px] h-[600px] max-w-md bg-white cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[rgba(208,191,255,0.4)] inset-0 rounded-lg shadow-md" style={{ boxShadow: 'inset 0 0 70px rgba(110, 87, 115, 0.7)' }}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[260px] object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-white-600 mb-2">{product.description}</p>
            <span className="text-white-600 mb-2">stock: {product.stock}</span><br></br>
            <span className="text-white-600 mb-2">brand: {product.brand}</span><br></br>
            <span className="text-white-600 mb-2">tags: {product.tags.map((tag, index) => (
              <React.Fragment key={index}>
                {tag}{index < product.tags.length - 1 && ', '}
              </React.Fragment>
            ))}</span>
            <div className="flex justify-between items-center">
              <span className="text-purple-600 font-bold">${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                <span className="text-yellow-600 mr-1">{product.rating.toFixed(1)}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <button onClick={addToCart} className="relative overflow-hidden h-10 w-70 mt-[20px] px-[20px] bg-purple-600 rounded-lg">
  <span className="relative text-white font-bold px-8 py-8">Add to cart</span>
</button>

</div>
</div>
</div>
</div>
</AppLayout>
);
};

export default ProductDetailsPage;



