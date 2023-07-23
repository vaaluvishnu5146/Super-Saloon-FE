import React from 'react';

function CategoryBubble({ background = '', data = {} }) {
  return (
    <div className="category-bubble-item">
      <div className="category-bubble" style={{ background: background }}>
        <img width="60%" src={data.categoryImage} />
      </div>
      <p className="category-label">{data.categoryName}</p>
    </div>
  );
}

export default CategoryBubble;
