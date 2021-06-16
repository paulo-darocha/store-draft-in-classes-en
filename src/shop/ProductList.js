import React, { Component } from "react";

export class ProductList extends Component {

  render() {
    if (this.props.products == null ||
      this.props.products.length === 0) {
        return <h5 className="p-2">No Products</h5>
      }

    return this.props.products.map(prod =>
      <div className="card m-1 p-1 bg-light-gray" key={prod.id}>
        <h4>
          {prod.name}
          <span className="badge rounded-pill bg-primary float-end my-1 me-3"
            style={{fontSize: ".6em"}}
          >
            ${prod.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {prod.description}
          <button className="btn btn-success btn-sm float-end"
            onClick={() => this.props.addToCart(prod)}
          >Add To Cart</button>
        </div>
      </div>)
  }

}