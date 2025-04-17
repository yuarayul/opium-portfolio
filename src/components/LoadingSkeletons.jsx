import React from 'react';

const LoadingSkeletons = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="product-item skeleton">
          <div className="skeleton-img"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      ))}
    </>
  );
};

export default LoadingSkeletons;
