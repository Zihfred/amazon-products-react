class API {
  getProducts = async () =>
    await fetch("/products.json").then(res => {
      if (res.ok) return res.json();
    });
}

export default new API();
