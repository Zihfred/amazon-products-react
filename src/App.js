import React from 'react';
import './App.css';
import API from './API/API';
import ProductList from "./components/ProductsList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/Menu/Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends React.Component{

  state ={
    products: [],
    filteredProducts: [],
    searchInputText: '',
  };

  handleChangeInput =(e) =>{
    const text = e.target.value;
    this.setState({searchInputText: text},this.handleSearch);
  };

  handleClickMenu = (selectedCategory) =>{
    let products = [...this.state.products];
    products = products.filter(oneProduct => oneProduct['bsr_category'] === selectedCategory);
    this.setState({filteredProducts: products});
  };

  handleSearch = () =>{
    const text = this.state.searchInputText.trim().toLowerCase();
    let products = [...this.state.products];
    products = products.filter(oneProduct => oneProduct.name.toLowerCase().includes(this.state.searchInputText));
    this.setState({filteredProducts: products})
  };

  componentDidMount() {
  API.getProducts().then((products => {
    console.log(products)
    let categoties = products.products.map(item => item['bsr_category']);
    categoties = [...new Set(categoties)]
    this.setState({
      products: products.products,
      filteredProducts: products.products,
      categories: categoties
    })
  }))
  }

  render() {
    return (
        <Container className="App">

          <Row>
            <Col>
              <SearchBar onChange={this.handleChangeInput} inputValue={this.state.searchInputText} />
              <Menu  handleClickMenu={this.handleClickMenu} menuItems={this.state.categories}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductList products={this.state.filteredProducts}/>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default App;
