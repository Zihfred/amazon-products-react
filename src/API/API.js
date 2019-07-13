class API {
  async getProducts() {
    return await fetch("https://demo8421975.mockable.io/products").then(res => {
      if (res.ok) return res.json();
    });
  }
}

export default new API();
