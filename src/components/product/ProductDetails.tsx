import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { PRODUCT_DETAILS, PRODUCT_FEATURES } from '../../constants/products';

interface ProductDetailsProps {
  onBuyNow: () => void;
}

export function ProductDetails({ onBuyNow }: ProductDetailsProps) {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-product font-bold tracking-tight text-gray-900">
          {PRODUCT_DETAILS.name}
        </h2>
        <p className="mt-2 text-2xl sm:text-3xl font-product font-bold text-purple-500">
          ₹{PRODUCT_DETAILS.price}
        </p>
        
        <div className="mt-4 space-y-4">
          <p className="text-gray-600 text-sm sm:text-base font-product">
            {PRODUCT_DETAILS.description}
          </p>
          
          <div className="border-t border-b border-gray-200 py-4">
            <h3 className="text-lg font-product font-semibold mb-2">Items:</h3>
            <ul className="space-y-2 text-gray-600">
              {PRODUCT_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 font-product">
                  <span className="text-pink-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={onBuyNow}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 px-8 rounded-md hover:from-pink-500 hover:to-purple-500 transition-colors text-lg font-product"
      >
        <ShoppingCart className="w-5 h-5" />
        Buy Now
      </button>
    </div>
  );
}