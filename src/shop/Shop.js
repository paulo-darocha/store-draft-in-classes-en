import React, { Component } from "react";
import { CartSummary } from "./CartSummary";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";
import { ProductPageConnector } from "./ProductPageConnector";
import { PaginationControls } from "../PaginationControls";

const ProductPages = ProductPageConnector(PaginationControls)

export class Shop extends Component {

  handleAddToCart = (...args) => {
    this.props.addToCart(...args);
    this.props.history.push("/shop/cart");
  }

  render() {
    return <div className="container-sm">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
          <CartSummary {...this.props} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 p-1">
          <CategoryNavigation baseUrl="/shop/products"
            categories={this.props.categories} />
        </div>
        <div className="col-sm-9 p-1">
          <ProductPages />
          <ProductList 
            products={this.props.products} 
            addToCart={this.handleAddToCart} />
          
        </div>
      </div>
    </div>
  }
}
 