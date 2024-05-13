import React, { useEffect, useState } from 'react';
import './Accordion.css';

import { v4 as uuidv4 } from 'uuid';

export default function Accordion({ title, items }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentItems, setCurrentItems] = useState(5);
  const [slicedItems, setSlicedItems] = useState(items?.slice(0, 5));

  useEffect(() => {
    setSlicedItems(items?.slice(0, currentItems));
  }, [items, currentItems]);

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <span>{title}</span>
        <img src="/media/images/dropdown-arrow.png" alt="dropdown arrow" />
      </div>
      <div className={`accordion-body ${isCollapsed ? 'collapsed' : ''}`}>
        {slicedItems?.map((item) => (
          <div key={uuidv4()} className="accordion-body-item">
            <span>{item.name}</span>
            <span className="accordion-item-qty">{item.qty}</span>
          </div>
        ))}
        {currentItems < items?.length && (
          <span
            className="see-more"
            onClick={() => setCurrentItems((prev) => prev + 5)}
          >
            See more
          </span>
        )}
      </div>
    </div>
  );
}
