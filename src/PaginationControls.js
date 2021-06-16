import React, { Component } from "react";
import { PaginationButtons } from "./PaginationButtons";

export class PaginationControls extends Component {

  constructor(props) {
    super(props);
    this.pageSizes = this.props.sizes || [5 ,10 , 25, 100];
    this.sortKeys = this.props.keys || ["Name", "Price"];
  }

  handlePageSizeChange = (e) => {
    this.props.setPageSize(e.target.value);
  }

  handleSortPropertyChange = (e) => {
    this.props.setSortProperty(e.target.value);
  }

  render() {
    return <div className="m-2">
      <div className="text-center m-1">
        <PaginationButtons 
          currentPage={this.props.currentPage}
          pageCount={this.props.pageCount}
          navigate={this.props.navigateToPage}/>
      </div>

      <div className="d-flex justify-content-center">

        <select className="form-select m-2"
          onChange={this.handlePageSizeChange}
          value={this.props.pageSize || this.pageSizes[1]}
        >
          {this.pageSizes.map(size =>
            <option value={size} key={size}>
              {size} per page
            </option>
          )}
        </select>

        <select className="form-select m-2"
          onChange={this.handleSortPropertyChange}
          value={this.props.sortKey || this.sortKeys[0]}
        >
          {this.sortKeys.map(key =>
            <option value={key.toLowerCase()} key={key}>
              Sort By {key}
            </option>
          )}
        </select>
      </div>
    </div>
  }

}