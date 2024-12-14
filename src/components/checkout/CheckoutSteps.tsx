import React from 'react';

interface CheckoutStepsProps {
  currentStep: number;
}

export function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const steps = ['Product', 'Address', 'Payment'];

  return (
    <div className="flex items-center justify-center mb-8 font-product">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep 
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
            <span className="ml-2 text-sm hidden sm:inline">{step}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 w-12 mx-2 ${
                index + 2 <= currentStep 
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400' 
                  : 'bg-gray-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}