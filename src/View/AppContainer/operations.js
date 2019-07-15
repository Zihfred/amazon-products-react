export  function filterProducts(products,searchText,category) {

    if (searchText && category) {
        searchText = searchText.trim().toLowerCase();
        products = products.filter(oneProduct => {
            return (
                oneProduct["bsr_category"] === category &&
                oneProduct.name.toLowerCase().includes(searchText)
            );
        });
    } else if (searchText) {
        searchText = searchText.trim().toLowerCase();
        console.log(products);
        products = products.filter(oneProduct => {
            return oneProduct.name
                .trim()
                .toLowerCase()
                .includes(searchText);
        });
    } else if (category) {
        products = products.filter(oneProduct => {
            return oneProduct["bsr_category"] === category;
        });
    }

    return products;
}
