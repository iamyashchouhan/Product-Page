import React from 'react';

export function PaymentQR() {
  const handlePaymentClick = () => {
    window.location.href = "upi://pay?pa=63280106867.payswiff@indus&pn=GarvitaStore&mc=0000&tid=12345&tn=Payment%20for%20Shop&am=399.00&cu=INR";
  };

  return (
    <div className="text-center space-y-6 font-product">
      <h3 className="text-xl font-semibold text-gray-900">Scan QR Code to Pay</h3>
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg inline-block">
        <img
          src="https://i.ibb.co/RCNLwWc/qr-code.jpg"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <button
        onClick={handlePaymentClick}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 px-8 rounded-md hover:from-pink-500 hover:to-purple-500 transition-colors text-lg font-product"
      >
        Order Now
      </button>
      <div className="space-y-2 text-gray-600">
        <p className="text-sm">
          Please scan this QR code with your payment app to complete the purchase
        </p>
        <p className="text-xs">
          Supported payment methods: UPI, Google Pay, PhonePe, Paytm
        </p>
      </div>
    </div>
  );
}
