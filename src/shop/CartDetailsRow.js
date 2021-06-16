import React, { Component } from "react";

export class CartDetailsRow extends Component {

  handleChange = (product, e) =>  {
    if (Number(e.target.value) >= 0) {
      this.props.updateQuantity(product, e.target.value);
    }
  }

  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return <tr>
        <td colSpan="5">Your cart is empty</td>
      </tr>
    } else {
      return <React.Fragment>
        {this.props.cart.map(item => 
          <tr key={item.product.id}>
            <td>
              <input type="number"
                className="form-control"
                value={item.quantity}
                onChange={(e) => this.handleChange(item.product, e)} />
            </td>
            <td>{item.product.name}</td>
            <td className="text-end">${item.product.price.toFixed(2)}</td>
            <td className="text-end">${(item.quantity * item.product.price).toFixed(2)}</td>
            <td>
              <button className="btn btn-danger btn-sm mx-2"
                onClick={() => this.props.removeFromCart(item.product)}
              >Remove</button>
            </td>
          </tr>
        )}

        <tr>
          <th colSpan="3" className="">Total:</th>
          <th colSpan="2">${this.props.cartPrice.toFixed(2)}</th>
        </tr>
      </React.Fragment>
    }
  }
}