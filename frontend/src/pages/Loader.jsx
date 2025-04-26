 // SpinnerLoader.jsx
import React from 'react';

const SpinnerLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcf8f3]">
      <div className="w-12 h-12 border-4 border-[#a9745c] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-[#5c4033] font-semibold text-lg">CaféSphere is loading...</p>
    </div>
  );
};

export default SpinnerLoader;
