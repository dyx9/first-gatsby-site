import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import * as styles from './table-of-contents.module.scss';

const TableOfContents = ({ items }) => {

  const idList = getIds(items);
  const activeId = useActiveId(idList);

  function getIds(items) {
    return items.reduce((acc, item) => {
      if (item.url) {
        // url has a # as first character, remove it to get the raw CSS-id
        acc.push(item.url.slice(1));
      }
      if (item.items) {
        acc.push(...getIds(item.items));
      }
      return acc;
    }, []);
  }
  
  function useActiveId(itemIds) {
    const [activeId, setActiveId] = useState(`test`);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: `0% 0% -80% 0%` }
      );
      itemIds.forEach((id) => {
        observer.observe(document.getElementById(id));
      });
      return () => {
        itemIds.forEach((id) => {
          if (typeof(observer) === Element) {
            observer.unobserve(document.getElementById(id));
          }
        });
      };
    }, [itemIds]);
    return activeId;
  }

  const renderItemsRecursively = (items, activeId) => {
    return (
      <ol>
        {items.map(i => (
          <li key={i.url}>
            <Link to={i.url} className={activeId === i.url.slice(1) ? styles.active : undefined}>
              {i.title}
            </Link>
            {i.items && renderItemsRecursively(i.items, activeId)}
          </li>
        ))}
      </ol>
    )
  }

  return (
    <div className={styles.tocContainer}>
      {renderItemsRecursively(items, activeId)}
    </div>
  )
}

export default TableOfContents