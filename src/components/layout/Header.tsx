import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-300 to-purple-300">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-product font-bold tracking-tight text-white">
            Garvita Store
          </h1>
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}