import React, { useEffect, useState } from 'react';
import './Accordion.css';
import { useSearchParams } from 'react-router-dom';

export default function Accordion({ title, items, event }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [currentItems, setCurrentItems] = useState(5);
  const [slicedItems, setSlicedItems] = useState(items?.slice(0, 5));

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    setSlicedItems(items?.slice(0, currentItems));
  }, [items, currentItems]);

  const isFiltered = (id) => {
    return params.getAll('f').includes(id);
  };

  const setFilter = (id) => {
    const filters = params.getAll('f');
    if (filters.includes(id)) {
      params.delete(
        'f',
        filters.filter((tag) => tag === id)
      );
      setParams(params);
    } else {
      params.append('f', id);
      setParams(params);
    }
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isCollapsed ? 'collapsed' : ''}`}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <span>{title}</span>
        <img
          src="/media/images/icons/dropdown-arrow.png"
          alt="dropdown arrow"
        />
      </div>
      <div className={`accordion-body ${isCollapsed ? 'collapsed' : ''}`}>
        {slicedItems?.map((item) => (
          <div
            onClick={() => setFilter(item.id)}
            key={item.id}
            className={`accordion-body-item ${
              isFiltered(item.id) && 'selected'
            }`}
          >
            <span>{item.label}</span>
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
