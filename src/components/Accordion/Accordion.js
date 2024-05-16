import React, { useEffect, useState } from 'react';
import './Accordion.css';
import { useSearchParams } from 'react-router-dom';

export default function Accordion({ title, items, setFilteredTags }) {
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

  const setFilter = (tag) => {
    const filters = params.getAll('f');
    if (filters.includes(tag.id)) {
      params.delete(
        'f',
        filters.filter((filter) => filter === tag.id)
      );
      setParams(params);
      setFilteredTags((prevTags) => {
        return prevTags.filter((filter) => filter.id !== tag.id);
      });
    } else {
      params.append('f', tag.id);
      setParams(params);
      setFilteredTags((prev) => [...prev, { label: tag.label, id: tag.id }]);
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
            onClick={() => setFilter(item)}
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
