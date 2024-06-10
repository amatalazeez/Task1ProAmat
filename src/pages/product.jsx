
import React, { useState, useEffect } from 'react';
import AppLayout from '../Layout/AppLayout';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterAndSortProducts(term, selectedCategory, sortOption);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterAndSortProducts(searchTerm, category, sortOption);
  };

  const handleSort = (option) => {
    setSortOption(option);
    filterAndSortProducts(searchTerm, selectedCategory, option);
  };

  const filterAndSortProducts = (term, category, sortOption) => {
    let filtered = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(term) &&
        (category === '' || product.category === category)
      );
    });

    if (sortOption === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-asc') {
      filtered.sort((a, b) => a.rating - b.rating);
    } else if (sortOption === 'rating-desc') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
  };

  const categoryOptions = [
    { label: 'All', value: '' },
    { label: 'Groceries', value: 'groceries' },
    { label: 'Furniture', value: 'furniture' },
  ];
  

  return (
    <AppLayout>
      
      <div className="flex justify-between items-center mb-4">
  <div className="flex items-center">
 
    {categoryOptions.map((option) => (
      <button
        key={option.value}
        className={`px-4 py-2 mr-2 rounded-lg ${
          selectedCategory === option.value
            ? 'bg-purple-600 text-white'
            : 'bg-gray-200'
        }`}
        onClick={() => handleCategoryFilter(option.value)}
      >
        {option.label}
      </button>
    ))}
       <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleSearch}
      className="px-4 py-2 border rounded-lg w-50 mr-2"
    />
  </div>
  <div className="flex items-center">
    <span className="mr-2">Sort by:</span>
    <select
      value={sortOption}
      onChange={(e) => handleSort(e.target.value)}
      className="px-4 py-2 border rounded-lg"
    >
      <option value="">Default</option>
      <option value="price-asc">Price (Low to High)</option>
      <option value="price-desc">Price (High to Low)</option>
      <option value="rating-asc">Rating (Low to High)</option>
      <option value="rating-desc">Rating (High to Low)</option>
    </select>
  </div>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
        {filteredProducts.map((Product) => (
          <div
            key={Product.id}
            className="bg-white  shadow-md overflow-hidden
             cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex
              flex-col items-start gap-3 transition-all duration-300 group
               hover:bg-[rgba(208,191,255,0.1)]   inset-0 rounded-md shadow-md" style={{ boxShadow: 'inset 0 0 13px rgba(110, 87, 115, 0.7)' }} 
          >
            <img
              src={Product.thumbnail}
              alt={Product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 ">
              <h3 className="text-lg font-bold mb-2">{Product.title}</h3>
              <p className="text-gray-600 mb-2">{Product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">
                  ${Product.price.toFixed(2)}
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-600 mr-1">
                    {Product.rating.toFixed(1)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              
              <button
  class="relative overflow-hidden  h-10 w-full mt-5 
   group hover:animate-pulse hover:shadow-lg hover:scale-105 transition
    duration-500 before:absolute before:inset-0 before:rounded-lg
     before:bg-gradient-to-br before:from-pink-50 before:via-purple-50 before:to-indigo-50"
>
  <span class="relative text-purple-600 font-bold px-8 py-8">               <a href={`/ProductDetailsPage/${Product.id}`}>
  View Details
</a> </span>
</button>


  

            </div>
          </div>
        ))}
      </div>
      
    </AppLayout>
  );
};

export default Product;