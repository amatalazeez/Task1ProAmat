import React, { useState, useEffect } from 'react';
import AppLayout from '../Layout/AppLayout';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateQuantity = (index, quantity) => {
    const updatedCartItems = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <AppLayout>
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-purple-600 text-white">
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{item.title}</td>
                  <td className="py-2 px-4 border-b">{item.description}</td>
                  <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="number"
                      className="border rounded py-1 px-2 h-6"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value, 10))}
                      min="1"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b">
                    <button 
                      className="text-red-500 hover:text-red-700" 
                      onClick={() => removeItem(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="py-2 px-4 border-t text-right">Subtotal</td>
                <td colSpan="2" className="py-2 px-4 border-t">${calculateSubtotal()}</td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </AppLayout>
  );
};

export default CartPage;
