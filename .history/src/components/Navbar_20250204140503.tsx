import React from 'react';
import { Link } from 'react-router-dom';
import { FireExtinguisher, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="relative z-20 container mx-auto px-6 py-6 flex items-center justify-between">
      <Link to="/" className="flex items-center space-x-2 text-white">
        <FireExtinguisher className="h-8 w-8" />
        <span className="text-2xl font-bold">Matrix Fire Extinguisher</span>
      </Link>
      <div className="flex items-center space-x-8 text-white">
        <Link to="/products" className="hover:text-red-400">Products</Link>
        <Link to="/about" className="hover:text-red-400">About</Link>
        <Link to="/contact" className="hover:text-red-400">Contact</Link>
        <button className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
          <ShoppingCart className="h-5 w-5" />
          
        </button>
      </div>
    </nav>
  );
}