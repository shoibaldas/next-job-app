import React from 'react';

export default function ProductsLayout({ children }) {
  return (
    <div className="products-layout">
      {/* You can add a sidebar, header, or other layout elements here */}
      {children}
    </div>
  );
}
