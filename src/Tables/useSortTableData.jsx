import { useState, useMemo } from "react";

const useSortTableData = items => {
  const [sortConfig, setSortConfig] = useState({
    field: null,
    direction: null
  });

  const byFieldDown = field => {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  };

  const byFieldUp = field => {
    return (a, b) => (a[field] > b[field] ? -1 : 1);
  };

  const requestSortAscending = field => {
    let direction = "Ascending";
    setSortConfig({ field, direction });
  };

  const requestSortDescending = field => {
    let direction = "Descending";
    setSortConfig({ field, direction });
  };

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      if (sortConfig.field === "rating.rate") {
        if (sortConfig.direction === "Ascending") {
          sortableItems.sort((a, b) => {
            return a.rating.rate > b.rating.rate ? 1 : -1;
          });
        } else {
          sortableItems.sort((a, b) => {
            return a.rating.rate > b.rating.rate ? -1 : 1;
          });
        }
      } else {
        if (sortConfig.direction === "Ascending") {
          sortableItems.sort(byFieldUp(sortConfig.field));
        } else {
          sortableItems.sort(byFieldDown(sortConfig.field));
        }
      }
    }
    return sortableItems;
  }, [items, sortConfig]);

  return {
    items: sortedItems,
    requestSortAscending,
    requestSortDescending,
    sortConfig
  };
};

export default useSortTableData;
