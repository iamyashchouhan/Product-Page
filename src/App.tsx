import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { ImageSlider } from './components/ImageSlider';
import { ProductDetails } from './components/product/ProductDetails';
import { CheckoutForm } from './components/CheckoutForm';
import { PaymentQR } from './components/PaymentQR';
import { CheckoutSteps } from './components/checkout/CheckoutSteps';
import { PRODUCT_IMAGES } from './constants/products';

function App() {
  const [checkoutStep, setCheckoutStep] = useState<'product' | 'address' | 'payment'>('product');

  const getStepNumber = () => {
    switch (checkoutStep) {
      case 'product': return 1;
      case 'address': return 2;
      case 'payment': return 3;
    }
  };

  const handleBuyNow = () => {
    setCheckoutStep('address');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddressSubmit = () => {
    setCheckoutStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <CheckoutSteps currentStep={getStepNumber()} />

        {checkoutStep === 'product' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm">
            <div className="p-4 sm:p-6">
              <ImageSlider images={PRODUCT_IMAGES} />
            </div>
            
            <ProductDetails onBuyNow={handleBuyNow} />
          </div>
        )}

        {checkoutStep === 'address' && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Shipping Details</h2>
            <CheckoutForm onSubmit={handleAddressSubmit} />
          </div>
        )}

        {checkoutStep === 'payment' && (
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Payment</h2>
            <PaymentQR />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;