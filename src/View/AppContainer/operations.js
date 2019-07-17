export function filterProductsArr(products, searchText, category) {
  if (searchText && category) {
    searchText = searchText.trim().toLowerCase();
    if (category !== "All") {
      products = products.filter(
        oneProduct =>
          oneProduct["bsr_category"] === category &&
          oneProduct.brand.toLowerCase().includes(searchText)
      );
    } else {
      products = products.filter(oneProduct =>
        oneProduct.brand.toLowerCase().includes(searchText)
      );
    }
  } else if (searchText) {
    searchText = searchText.trim().toLowerCase();
    products = products.filter(oneProduct => {
      return oneProduct.brand
        .trim()
        .toLowerCase()
        .includes(searchText);
    });
  } else if (category) {
    if (category !== "All") {
      products = products.filter(oneProduct => {
        return oneProduct["bsr_category"] === category;
      });
    }
  }

  return products;
}
