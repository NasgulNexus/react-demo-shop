import { useState, useMemo } from "react";

const useSortTableData = items => {
  const [sortConfig, setSortConfig] = useState(null);
  const [selectButton, setSelectButton] = useState(null);

  const byFieldDown = field => {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  };

  const byFieldUp = field => {
    return (a, b) => (a[field] > b[field] ? -1 : 1);
  };

  const requestSortAscending = field => {
    let direction = "Ascending";
    switch (field) {
      case "title":
        setSelectButton("titleAscending");
        break;
      case "price":
        setSelectButton("priceAscending");
        break;
      case "rating.rate":
        setSelectButton("ratingAscending");
        break;
      case "category":
        setSelectButton("categotyAscending");
        break;
      default:
        console.log("default");
    }
    setSortConfig({ field, direction });
  };

  const requestSortDescending = field => {
    let direction = "Descending";
    switch (field) {
      case "title":
        setSelectButton("titleDescending");
        break;
      case "price":
        setSelectButton("priceDescending");
        break;
      case "rating.rate":
        setSelectButton("ratingDescending");
        break;
      case "category":
        setSelectButton("categotyDescending");
        break;
      default:
        console.log("default");
    }
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
    selectButton
  };
};

export default useSortTableData;
