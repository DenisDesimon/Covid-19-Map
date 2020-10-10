import React from "react";

export default class Totaldeath extends React.Component {




  render() {
    if (this.props.data.loading_total) {
      return <div className="total-nums text-center">0</div>;

    }
    return (
      <div className="total-nums text-center">{this.props.data.total.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</div>
    );
  }
}

