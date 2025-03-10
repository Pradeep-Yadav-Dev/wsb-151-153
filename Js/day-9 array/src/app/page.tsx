'use client';

import React from 'react';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';

// Sample product data (in a real app, this would come from an API or database)
const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
  },
  {
    id: 3,
    name: 'Laptop',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
  },
  {
    id: 4,
    name: 'Smartphone',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
  },
];

export default function Home() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <Cart />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </CartProvider>
  );
} 