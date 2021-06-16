import React, { Component } from "react";
import { DataTypes } from "./Types";

export class DataGetter extends Component {

  render() {
    return <React.Fragment>
      {this.props.children}
    </React.Fragment>
  }

  componentDidUpdate = () => this.getData();
  componentDidMount = () => this.getData();

  getData = () => {
    // dsData >>> dataStoreData
    const dsData = this.props.products_params || {};

    // rtData >>> requestData
    const rtData = {
      _limit: this.props.pageSize || 10,
      _sort: this.props.sortKey || "name",
      _page: this.props.match.params.page || 1,
      category_like: (this.props.match.params.category || "") === "all"
        ? "" : this.props.match.params.category
    }
    
    // this.props.loadData(DataTypes.PRODUCTS, rtData);
    if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
      this.props.loadData(DataTypes.PRODUCTS, rtData);
    }
  }
}