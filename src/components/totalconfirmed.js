import React from "react";

export default class Totalconfirmed extends React.Component {

  render() {
    if (this.props.data.loading_total) {
      return <div className="total-nums text-danger text-center">0</div>;

    }
    return (
      <div className="total-nums text-danger text-center">{this.props.data.total.confirmed.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</div>
    );
  }
}